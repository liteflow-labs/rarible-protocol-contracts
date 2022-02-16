### deploy all

```
cd deploy
rm -fr build && rm -f .openzeppelin/unknown-1337.json && npm run truffle -- migrate --network XXX
```

- copy smart contract from `deployed transferProxy at`
- copy smart contract from `deployed erc20TransferProxy at`
- copy smart contract from `deployed exchangeV2 at`

### deploy erc721 token

```
npm run truffle -- exec ./scripts/deploy-erc721.js --network XXX --name "Weentar ERC721" --symbol WNTR721 --baseURI ipfs:/
```

### deploy erc1155 token

```
npm run truffle -- exec ./scripts/deploy-erc1155.js --network XXX --name "Weentar ERC1155" --symbol WNTR1155 --baseURI ipfs:/
```

### deploy tokens erc20

```
cd erc20
npm run truffle -- deploy
```

- copy smart contract address of `ERC20Test`

### seed database with erc20

```sql
INSERT INTO "public"."Category" ("id", "title") VALUES ('fa73db4b-f08a-4bf6-b203-df623a5ebaea', 'Currency');
INSERT INTO "public"."Account" ("address") VALUES ('0x0000000000000000000000000000000000000000');
INSERT INTO "public"."Asset" ("id", "creatorAddress", "name", "description", "standard", "categoryId", "image") VALUES ('0xb151157e40CD33727d3be904B872A192154eD20D', '0x0000000000000000000000000000000000000000', 'ERC20', 'currency', 'ERC20', 'fa73db4b-f08a-4bf6-b203-df623a5ebaea', 'ipfs://QmWdK1GCQpPVcbfJNJPy32j5E7FsnQ3oRSKq3gJgRVWgP1');
```

### start ganache for local dev

```
npm run ganache -- --networkId 1337 --port 7545 --db="./ganache/" --wallet.deterministic
```
