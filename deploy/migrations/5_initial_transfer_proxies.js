const TransferProxy = artifacts.require('TransferProxy');
const ERC721LazyMintTransferProxy = artifacts.require('ERC721LazyMintTransferProxy');
const ERC1155LazyMintTransferProxy = artifacts.require('ERC1155LazyMintTransferProxy');
const ERC20TransferProxy = artifacts.require('ERC20TransferProxy');

module.exports = async function (deployer) {
  //erc721 + erc1155
  await deployer.deploy(TransferProxy);
  const transferProxy = await TransferProxy.deployed();
  await transferProxy.__OperatorRole_init();
  console.log("deployed transferProxy at", transferProxy.address)

  //erc20
  await deployer.deploy(ERC20TransferProxy);
  const erc20TransferProxy = await ERC20TransferProxy.deployed();
  await erc20TransferProxy.__OperatorRole_init();
  console.log("deployed erc20TransferProxy at", erc20TransferProxy.address)

  //erc721lazy
  await deployer.deploy(ERC721LazyMintTransferProxy);
  const erc721Proxy = await ERC721LazyMintTransferProxy.deployed();
  await erc721Proxy.__OperatorRole_init();
  console.log("deployed erc721LazyProxy at", erc721Proxy.address)

  //erc1155lazy
  await deployer.deploy(ERC1155LazyMintTransferProxy);
  const erc1155Proxy = await ERC1155LazyMintTransferProxy.deployed();
  await erc1155Proxy.__OperatorRole_init();
  console.log("deployed erc1155LazyProxy at", erc1155Proxy.address)

};