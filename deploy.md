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

### Deploy erc721 token

#### Factory address:

- Mainnet 1: `0x363cEf6ab850371800cd2CffcAeF9F27104DB976`
- BSC 56: `0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58`
- BSC Testnet 97: `0x9DEa39f488768ae692AD8d652924842a30E99584`
- Goerli 5: `0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771`
- Polygon Mumbai 80001: `0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3`

#### Command

```bash
cd deploy
npm run truffle -- exec ./scripts/deploy-erc721.js --network XXX --name "Weentar ERC721" --symbol WNTR721 --baseURI ipfs:/ --factoryAddress 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58
```

### Deploy erc1155 token

#### Factory address:

- Mainnet 1: `0x499aB47958AA4ec14402DD49F1f15135211142B2`
- BSC 56: `0x42741cECf928c5Daae0116B3745d0418C7a178E7`
- BSC Testnet 97: `0xD7b40F58a572b501F2Cb6b78E07a8C1607340C87`
- Goerli 5: `0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D`
- Polygon Mumbai 80001: `0xb27F7B0238Ba3f65E074c30883CcaF4C39010672`

#### Command

```bash
cd deploy
npm run truffle -- exec ./scripts/deploy-erc1155.js --network XXX --name "Weentar ERC1155" --symbol WNTR1155 --baseURI ipfs:/ --factoryAddress 0x42741cECf928c5Daae0116B3745d0418C7a178E7
```

### deploy tokens erc20

```bash
cd erc20
npm run truffle -- deploy
```

- copy smart contract address of `ERC20Test`
