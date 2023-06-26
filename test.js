const { ethers } = require("ethers");

// Goerli 测试网络节点 URL
const providerUrl = "https://eth-goerli.g.alchemy.com/v2/-UE6dJpKffa4Eolh67ReMCtd7rW7x9SV";

// 实例化以太坊网络提供程序
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// 合约地址和 ABI
const contractAddress = "0xAAc987728A611BEfD4846F737a541f521Aa3b596";
const contractAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[],"name":"Closed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"blockRange","type":"uint256"}],"name":"NewBlockRange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IExecutionDelegate","name":"executionDelegate","type":"address"}],"name":"NewExecutionDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oracle","type":"address"}],"name":"NewOracle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IPolicyManager","name":"policyManager","type":"address"}],"name":"NewPolicyManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"trader","type":"address"},{"indexed":false,"internalType":"uint256","name":"newNonce","type":"uint256"}],"name":"NonceIncremented","type":"event"},{"anonymous":false,"inputs":[],"name":"Opened","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"hash","type":"bytes32"}],"name":"OrderCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"maker","type":"address"},{"indexed":true,"internalType":"address","name":"taker","type":"address"},{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"indexed":false,"internalType":"struct Order","name":"sell","type":"tuple"},{"indexed":false,"internalType":"bytes32","name":"sellHash","type":"bytes32"},{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"indexed":false,"internalType":"struct Order","name":"buy","type":"tuple"},{"indexed":false,"internalType":"bytes32","name":"buyHash","type":"bytes32"}],"name":"OrdersMatched","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"FEE_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVERSE_BASIS_POINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORACLE_ORDER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORDER_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockRange","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"internalType":"struct Order","name":"order","type":"tuple"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"internalType":"struct Order[]","name":"orders","type":"tuple[]"}],"name":"cancelOrders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"cancelledOrFilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"internalType":"struct Order","name":"order","type":"tuple"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"bytes","name":"extraSignature","type":"bytes"},{"internalType":"enum SignatureVersion","name":"signatureVersion","type":"uint8"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"internalType":"struct Input","name":"sell","type":"tuple"},{"components":[{"components":[{"internalType":"address","name":"trader","type":"address"},{"internalType":"enum Side","name":"side","type":"uint8"},{"internalType":"address","name":"matchingPolicy","type":"address"},{"internalType":"address","name":"collection","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"listingTime","type":"uint256"},{"internalType":"uint256","name":"expirationTime","type":"uint256"},{"components":[{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"extraParams","type":"bytes"}],"internalType":"struct Order","name":"order","type":"tuple"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"bytes","name":"extraSignature","type":"bytes"},{"internalType":"enum SignatureVersion","name":"signatureVersion","type":"uint8"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"internalType":"struct Input","name":"buy","type":"tuple"}],"name":"execute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"executionDelegate","outputs":[{"internalType":"contract IExecutionDelegate","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incrementNonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"_weth","type":"address"},{"internalType":"contract IExecutionDelegate","name":"_executionDelegate","type":"address"},{"internalType":"contract IPolicyManager","name":"_policyManager","type":"address"},{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"uint256","name":"_blockRange","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"open","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"policyManager","outputs":[{"internalType":"contract IPolicyManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockRange","type":"uint256"}],"name":"setBlockRange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IExecutionDelegate","name":"_executionDelegate","type":"address"}],"name":"setExecutionDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IPolicyManager","name":"_policyManager","type":"address"}],"name":"setPolicyManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

// 需要查询的区块高度
const blockNumber = 8804652;

// 定义合约方法名称和 gas 统计信息对象
const methodName = "execute";
const gasInfo = {};

// 获取指定区块信息并遍历其中的所有交易
provider.getBlockWithTransactions(blockNumber).then(async (block) => {
  console.log('block', block)
  for (const txHash of block.transactions) {
    // 获取交易详情
    const tx = await provider.getTransaction(txHash);

    // 如果交易是对合约的调用，则进一步处理统计相关的信息
    if (tx.to === contractAddress) {
      const contract = new ethers.Contract(contractAddress, contractAbi, provider);

      // 获取调用方法名称
      const method = await contract.interface.parseTransaction(tx).name;

      // 如果调用方法名称与预期不符，则跳过该交易
      if (method !== methodName) {
        continue;
      }

      // 获取 gas 使用量
      const gasUsed = tx.gasPrice.mul(tx.gasLimit);

      // 统计信息数量加 1 并计算平均值
      if (!gasInfo[method]) {
        gasInfo[method] = {
          method: method,
          min: gasUsed,
          max: gasUsed,
          avg: gasUsed,
          calls: 1
        };
      } else {
        const info = gasInfo[method];
        info.calls += 1;
        info.min = ethers.BigNumber.min(info.min, gasUsed);
        info.max = ethers.BigNumber.max(info.max, gasUsed);
        info.avg = ethers.BigNumber.from(info.avg).add(gasUsed).div(info.calls);
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
  console.log(JSON.stringify(result));
}).catch((error) => {
  console.error(error);
});