### Network config

Update in `truffle-config.js` the exported `networks` variable with the right network. Only one network should be exported to avoid spamming the provider.

Make sure you have the corresponding network file in `~/.ethereum/NETWORK_NAME.json` with the following content:

```json
{
  "address": "0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457",
  "key": "", // mnemonic. the path must be m/44'/60'/0'/0/0
  "url": "", // provider url
  "network_id": 56, // binance
  "gasPrice": 6 // in wei. make sure to put a good value even on testnet, not too low and not too high!
}
```

You can find the addresses and mnemonics on 1Password with names like "Liteflow CHAIN Rarible".
If you create a new address, make sure to save it on 1Password with a name like "Liteflow CHAIN Rarible".

### Etherscan config

Create a file in `~/.ethereum/etherscan.json` with the following content:

```json
{
  "apiKey": "XXX"
}
```

### Deploy exchange, transfer proxies and factories

Update `deploy/migrations/config.js` to add the network if not already present.

```bash
cd deploy
npm run truffle -- migrate --network XXX
```

If you got errors, restart the last command.

If you got the same error and the same place after restarting the command many times, you need to restart the deployment from the beginning.
To do so, remove the following folders and files and start again:

```bash
rm -fr build && rm -f .openzeppelin/CHAIN.json
```

Once deployed, copy ALL the outputs logs in a new file at the root named: `deploy-CHAIN_NAME.md`

Then extract the following info for the backend config:

- copy smart contract from `deployed transferProxy at`
- copy smart contract from `deployed erc20TransferProxy at`
- copy smart contract from `deployed exchangeV2 at`
- copy smart contract from `deployed factory721 minimal at`
- copy smart contract from `deployed factory1155 at`

Add the new values to the following sections and commit this file as well as the new file `deploy-CHAIN_NAME.md` and also `deploy/.openzeppelin/CHAIN.json`

### Verify contracts

```bash
npm run truffle -- run verify ExchangeV2 ERC20TransferProxy TransferProxy ERC721RaribleFactoryC2 ERC1155RaribleFactoryC2 --verifiers=etherscan --network XXX
```

### Deploy erc721 token

```bash
cd deploy
npm run truffle -- exec ./scripts/deploy-erc721.js --network XXX --name "XXX" --symbol "XXX" --baseURI ipfs:/ --factoryAddress XXX
```

### Deploy erc1155 token

```bash
cd deploy
npm run truffle -- exec ./scripts/deploy-erc1155.js --network XXX --name "XXX" --symbol "XXX" --baseURI ipfs:/ --factoryAddress XXX
```

### Deploy tokens erc20

```bash
cd erc20
npm run truffle -- deploy
```

- copy smart contract address of `ERC20Test`
