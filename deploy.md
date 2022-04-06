### deploy all

```bash
cd deploy
# TODO: not sure about the rm!
rm -fr build && rm -f .openzeppelin/unknown-1337.json && npm run truffle -- migrate --network XXX
```

- copy smart contract from `deployed transferProxy at`
- copy smart contract from `deployed erc20TransferProxy at`
- copy smart contract from `deployed exchangeV2 at`

### deploy erc721 token

#### Factory address:

- Ethereum 1: `0x6E42262978de5233C8d5B05B128C121fBa110DA4`
- Ropsten 3: `0x939d0308CE4274C287E7305D381B336B77dBfcd3`
- BSC 56: `0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58`

> https://docs.rarible.org/reference/contract-addresses/

#### Command

```bash
cd deploy
npm run truffle -- exec ./scripts/deploy-erc721.js --network XXX --name "Weentar ERC721" --symbol WNTR721 --baseURI ipfs:/ --factoryAddress 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58
```

### deploy erc1155 token

#### Factory address:

- Ethereum 1: `0xDA5BFe0bD4443d63833C8f4E3284357299eaE6BC`
- Ropsten 3: `0xccf0cB91Fe5cCb697781427C141ed0662aE4FE2e`
- BSC 56: `0x42741cECf928c5Daae0116B3745d0418C7a178E7`

> https://docs.rarible.org/reference/contract-addresses/

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
