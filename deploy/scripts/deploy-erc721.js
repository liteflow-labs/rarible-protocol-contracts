const truffle = require('truffle')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// copy from rarible
function randomBinary(size) {
  return `0x${Array.from(Array(size * 2))
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')}`
}

function getArg(name) {
  const index = process.argv.findIndex((arg) => arg === `--${name}`)
  if (index === -1) throw new Error(`no arg found with name "${name}"`)
  return process.argv[index + 1]
}

module.exports = async function (callback) {
  try {
    const name = getArg('name')
    const symbol = getArg('symbol')
    const baseURI = getArg('baseURI')
    console.log('name:', name)
    console.log('symbol:', symbol)
    console.log('baseURI:', baseURI)

    const ERC721RaribleFactoryC2 = artifacts.require('ERC721RaribleFactoryC2')
    const factory = await ERC721RaribleFactoryC2.deployed()
    console.log('using factory at', factory.address)

    const salt = randomBinary(32)
    console.log('salt', salt)

    const confirm = await new Promise((resolve) => {
      rl.question('Confirm info? type yes to confirm: ', resolve)
    })
    if (confirm !== 'yes') throw new Error('user cancelled')

    console.log('deploying...')
    const { tx, logs } = await factory.createToken(
      name,
      symbol,
      baseURI,
      baseURI,
      salt,
    )
    console.log('tx:', tx)
    console.log('token deployed at:', logs[2].args[0])
  } catch (error) {
    console.error(error)
  } finally {
    callback()
  }
}
