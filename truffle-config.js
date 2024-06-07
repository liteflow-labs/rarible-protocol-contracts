const os = require('os')

let apiKeys = {}
try {
  console.log(
    `Loading etherscan key from ${os.homedir() + '/.ethereum/etherscan.json'}`,
  )
  apiKeys = require(os.homedir() + '/.ethereum/etherscan.json')
  console.log('loaded etherscan api key')
} catch {
  console.log('unable to load etherscan key from config')
}

function createNetwork(name) {
  try {
    var json = require(os.homedir() + '/.ethereum/' + name + '.json')
    var gasPrice = json.gasPrice != null ? json.gasPrice : undefined

    return {
      provider: () => {
        // const { estimate } = require('@rarible/estimate-middleware')
        if (json.path != null) {
          const {
            createProvider: createTrezorProvider,
          } = require('@rarible/trezor-provider')
          const provider = createTrezorProvider({
            url: json.url,
            path: json.path,
            chainId: json.network_id,
          })
          provider.send = provider.sendAsync
          return provider
        } else {
          return createProvider(json.address, json.key, json.url)
        }
      },
      from: json.address,
      // gasPrice: gasPrice, // if gas price is set, also need to force gas. The default value of gas is like 550M
      // gas: 20_000_000,
      network_id: json.network_id,
      skipDryRun: true,
      networkCheckTimeout: 4 * 1000 * 1000,
      // networkCheckTimeout: 10 * 1000,
    }
  } catch (e) {
    return null
  }
}

const providers = {}

function createProvider(address, key, url) {
  if (providers[address]) return providers[address]
  console.log('creating provider for address: ' + address)
  var HDWalletProvider = require('@truffle/hdwallet-provider')
  const provider = new HDWalletProvider(key, url)
  providers[address] = provider
  return provider
}

module.exports = {
  api_keys: apiKeys,

  plugins: ['truffle-plugin-verify'],

  networks: {
    // e2e: createNetwork("e2e"),
    // ops: createNetwork("ops"),
    // ropsten: createNetwork("ropsten"),
    // mainnet: createNetwork('mainnet'),
    // rinkeby: createNetwork("rinkeby"),
    // rinkeby2: createNetwork("rinkeby2"),
    // polygon_mumbai: createNetwork("polygon_mumbai"),
    // polygon_mainnet: createNetwork("polygon_mainnet"),
    // binance_testnet: createNetwork('binance_testnet'),
    // binance: createNetwork("binance"),
    // goerli: createNetwork('goerli'),
    // mumbai: createNetwork('mumbai'),
    // polygon: createNetwork('polygon'),
    // ultron_testnet: createNetwork('ultron_testnet'),
    // lightlink_pegasus: createNetwork('lightlink_pegasus'),
    // lightlink_phoenix: createNetwork('lightlink_phoenix'),
    // neonevm_devnet: createNetwork('neonevm_devnet'),
    // neonevm: createNetwork('neonevm'),
    // arbitrum_one: createNetwork('arbitrum_one'),
    // arbitrum_sepolia: {
    //   ...createNetwork('arbitrum_sepolia'),
    //   verify: {
    //     apiUrl: 'https://api-sepolia.arbiscan.io/api',
    //     apiKey: apiKeys.arbitrum_sepolia,
    //     explorerUrl: 'https://sepolia.arbiscan.io/address',
    //   },
    // },
    sepolia: createNetwork('sepolia'),
    polygon_amoy: {
      ...createNetwork('polygon_amoy'),
      verify: {
        apiUrl: 'https://api-amoy.polygonscan.com/api',
        apiKey: apiKeys.arbitrum_sepolia,
        explorerUrl: 'https://amoy.polygonscan.com/address',
      },
    },
  },

  compilers: {
    solc: {
      version: '0.7.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: 'istanbul',
      },
    },
  },
}
