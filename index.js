const { ethers } = require("ethers");
const { contractAbi } = require("./abi.js");

// RPC 节点
const providerUrl = "";

// 实例化以太坊网络提供程序
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// 合约地址
const contractAddress = "0x000000000000ad05ccc4f10045630fb830b95127";

// 需要查询的区块高度
const blockNumber = 17036137;

// 定义合约方法名称和 gas 统计信息对象
const methodName = ["execute", 'bulkExecute'];
const gasInfo = {};

// 获取指定区块信息并遍历其中的所有交易
provider.getBlockWithTransactions(blockNumber).then(async (block) => {
  const targetsArr = block.transactions.filter((tx) => tx.to?.toLowerCase() === contractAddress.toLowerCase());

  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  for(const target of targetsArr) {
    // 获取调用方法名称
    const method = await contract.interface.parseTransaction(target).name;
    console.log('method:', method);
    if (methodName.includes(method)) {
      // 获取 gas 使用量
      const txReceipt = await provider.getTransactionReceipt(target.hash);
      const gasPrice = target.gasPrice;
      const gasUsed = txReceipt.gasUsed;

      const txFee = gasPrice.mul(gasUsed);
      // 想要十进制的话 ethers.utils.formatEther 一下就行了
      console.log(`Transaction ${target.hash} gas fee: ${ethers.utils.formatEther(txFee)} ETH`);

      // 统计信息数量加 1 并计算平均值
      if (!gasInfo[method]) {
        gasInfo[method] = {
          method: method,
          min: gasUsed,
          max: gasUsed,
          avg: gasUsed,
          calls: 1,
        };
      } else {
        const info = gasInfo[method];
        info.calls += 1;
        // 计算最小值、最大值、平均值
        info.min = info.min.lt(gasUsed) ? info.min : gasUsed;
        info.max = info.max.gt(gasUsed) ? info.max : gasUsed;
        info.avg = info.avg.add(gasUsed).div(2);
      }
    }
  }

  // 构造 JSON 对象
  const result = {
    commitHash: "bb5d39539354e96cf6e69ad107906a0b6a46ea91",
    contractReports: {
      [contractAddress]: {
        name: "Conduit",
        methods: Object.values(gasInfo)
      }
    }
  };

  // 打印输出 JSON
  console.log('final result: ', JSON.stringify(result));
}).catch((error) => {
  console.error(error);
});