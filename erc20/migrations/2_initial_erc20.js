const { deploy } = require('@openzeppelin/truffle-upgrades/dist/utils')

const ERC20Test = artifacts.require('ERC20Test')

module.exports = async function (deployer, network) {
  await deployer.deploy(
    ERC20Test,
    'Test Token',
    'TST',
    '1000000000000000000000000',
  )
}
