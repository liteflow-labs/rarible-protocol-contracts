const { getSettings } = require("./config.js")
const { CRYPTO_PUNKS } = require("@rarible/exchange-v2/test/assets.js");

module.exports = async function (deployer, network) {
  const settings = getSettings(network);
  let cryptoPunksMarket;

  if (!settings.deploy_CryptoPunks && settings.address_CryptoPunks === "0x0000000000000000000000000000000000000000") {
    return;
  }

  const CryptoPunksMarket = artifacts.require('CryptoPunksMarket');
  const PunkTransferProxy = artifacts.require('PunkTransferProxy');
  const ExchangeV2 = artifacts.require('ExchangeV2');

  if (settings.deploy_CryptoPunks) {
    await deployer.deploy(CryptoPunksMarket);
    cryptoPunksMarket = await CryptoPunksMarket.deployed();
  } else {
    cryptoPunksMarket = await CryptoPunksMarket.at(settings.address_CryptoPunks);
  }
  console.log("cryptoPunksMarket address: ",  cryptoPunksMarket.address);

  await deployer.deploy(PunkTransferProxy);
  const punkTransferProxy = await PunkTransferProxy.deployed();
  console.log("deployed punkTransferProxy: ", punkTransferProxy.address);
  await punkTransferProxy.__OperatorRole_init();

  const exchangeV2 = await ExchangeV2.deployed();

  await punkTransferProxy.addOperator(exchangeV2.address);

  await exchangeV2.setTransferProxy(CRYPTO_PUNKS, punkTransferProxy.address);
  await setTestCryptoPunks(settings.deploy_CryptoPunks, settings.address_ownerTestCryptoPunks, punkTransferProxy.address);
};

async function setTestCryptoPunks(_needDeploy, _owner, _punkTransferProxy) {
  if (_needDeploy) {
    const cryptoPunksMarket = await CryptoPunksMarket.deployed();
    await cryptoPunksMarket.allInitialOwnersAssigned();
    let punkIndex = 1;
    let punkNumber = 10;
    while (punkIndex <= punkNumber) {
      await cryptoPunksMarket.getPunk(punkIndex, { from: _owner });
      await cryptoPunksMarket.offerPunkForSaleToAddress(punkIndex, 0, _punkTransferProxy, { from: _owner });
      punkIndex++;
    }
  }
}