➜ deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network goerli

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

# Compiling your contracts...

> Compiling ./contracts/AssetMatchersImport.sol
> Compiling ./contracts/ExchangeV2Import.sol
> Compiling ./contracts/RoyaltiesRegistryImport.sol
> Compiling ./contracts/TokensImport.sol
> Compiling ./contracts/TransferProxiesImport.sol
> Compilation warnings encountered:

    @rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:33:9: Warning: This declaration shadows an existing declaration.
        string memory _tokenURI = _tokenURIs[tokenId];
        ^---------------------^

@rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:32:5: The shadowed declaration is here:
function _tokenURI(uint256 tokenId) internal view virtual returns (string memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/interfaces/IERC1271.sol:16:5: Warning: Interface functions are implicitly "virtual"
function isValidSignature(bytes32 \_hash, bytes calldata \_signature) virtual external view returns (bytes4 magicValue);
^--------------------------------------------------------------------------------------------------------------------^
,@openzeppelin/contracts/access/Ownable.sol:26:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor () internal {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/BeaconProxy.sol:35:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address beacon, bytes memory data) public payable {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/UpgradeableBeacon.sol:27:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address implementation_) public {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:144:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:147:14: Warning: Unused local variable.
(address token, LibERC721LazyMint.Mint721Data memory data) = abi.decode(matchNft.data, (address, LibERC721LazyMint.Mint721Data));
^-----------^
,@rarible/custom-matchers/contracts/AssetMatcherCollection.sol:17:5: Warning: Function state mutability can be restricted to pure
function matchAssets(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/AssetMatcher.sol:68:5: Warning: Function state mutability can be restricted to pure
function simpleMatch(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/royalties/contracts/LibRoyalties2981.sol:15:5: Warning: Function state mutability can be restricted to pure
function calculateRoyalties(address to, uint256 amount) internal view returns (LibPart.Part[] memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/tokens/contracts/erc-721/ERC721Upgradeable.sol:389:5: Warning: Function state mutability can be restricted to view
function \_burned(uint256 tokenId) internal returns (bool) {
^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'goerli'
> Network id: 5
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x8a2d6bb4e56cf91956a3c6523ec0e78c33a9b921c4b631a035877feb31a57092
> Blocks: 2 Seconds: 24
> contract address: 0x4d89a53AC48A00ea3D31aA8a3Dd5898d4FacD23E
> block number: 7583839
> block timestamp: 1663066020
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4999922497
> gas used: 155006 (0x25d7e)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000077503 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0000077503 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x32ec86ae2dabec599136218d78ba29ea3592b82971c8cf89016f42388189a165

Error: **_ Deployment Failed _**

"RoyaltiesRegistry" ran out of gas (using a value you set in your network config or deployment parameters.)

- Block limit: 30000000 (0x1c9c380)
- Gas sent: 1000000 (0xf4240)


    at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:365:1
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Object.deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy.ts:9:48)
    at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy-impl.ts:43:24
    at Object.resumeOrDeploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/deployment.ts:42:22)
    at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/impl-store.ts:33:23
    at Manifest.lockedRun (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/manifest.ts:118:14)
    at fetchOrDeployGeneric (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/impl-store.ts:25:24)
    at Object.deployImpl (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy-impl.ts:42:10)
    at deployProxy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/deploy-proxy.ts:46:16)
    at module.exports (/Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/migrations/2_initial_RoyaltiesRegistry.js:6:29)
    at Migration._deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:75:1)
    at Migration._load (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:56:1)
    at Migration.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
    at Object.runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
    at runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
    at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
    at Command.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)

Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜ deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network goerli

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

# Compiling your contracts...

> Compiling ./contracts/AssetMatchersImport.sol
> Compiling ./contracts/ExchangeV2Import.sol
> Compiling ./contracts/RoyaltiesRegistryImport.sol
> Compiling ./contracts/TokensImport.sol
> Compiling ./contracts/TransferProxiesImport.sol
> Compilation warnings encountered:

    @rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:33:9: Warning: This declaration shadows an existing declaration.
        string memory _tokenURI = _tokenURIs[tokenId];
        ^---------------------^

@rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:32:5: The shadowed declaration is here:
function _tokenURI(uint256 tokenId) internal view virtual returns (string memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/interfaces/IERC1271.sol:16:5: Warning: Interface functions are implicitly "virtual"
function isValidSignature(bytes32 \_hash, bytes calldata \_signature) virtual external view returns (bytes4 magicValue);
^--------------------------------------------------------------------------------------------------------------------^
,@openzeppelin/contracts/access/Ownable.sol:26:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor () internal {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/BeaconProxy.sol:35:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address beacon, bytes memory data) public payable {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/UpgradeableBeacon.sol:27:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address implementation_) public {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:144:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:147:14: Warning: Unused local variable.
(address token, LibERC721LazyMint.Mint721Data memory data) = abi.decode(matchNft.data, (address, LibERC721LazyMint.Mint721Data));
^-----------^
,@rarible/custom-matchers/contracts/AssetMatcherCollection.sol:17:5: Warning: Function state mutability can be restricted to pure
function matchAssets(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/AssetMatcher.sol:68:5: Warning: Function state mutability can be restricted to pure
function simpleMatch(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/royalties/contracts/LibRoyalties2981.sol:15:5: Warning: Function state mutability can be restricted to pure
function calculateRoyalties(address to, uint256 amount) internal view returns (LibPart.Part[] memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/tokens/contracts/erc-721/ERC721Upgradeable.sol:389:5: Warning: Function state mutability can be restricted to view
function \_burned(uint256 tokenId) internal returns (bool) {
^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'goerli'
> Network id: 5
> Block gas limit: 30000000 (0x1c9c380)

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x39ff81fdba5787cfce10a10102201f85459ca4334155bb1d9486f6e27e31392e
> Blocks: 1 Seconds: 13
> contract address: 0x838F12cfcD51944fe70d2a9474C24e0D5Cfc33C5
> block number: 7583847
> block timestamp: 1663066140
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4998613481
> gas used: 1572377 (0x17fe19)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00007861885 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x9227137b70f30b74d27b9fdaf88d340e7db0fc68b102c9267d95761961b6902f
> Blocks: 2 Seconds: 16
> contract address: 0x2Bf8458E4B32C76912fccAea829B5A403570588B
> block number: 7583849
> block timestamp: 1663066164
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4998371471
> gas used: 484020 (0x762b4)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.000024201 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xbd2b000ce2e5ac90b9aac9960c9cd873298b6a62bfa275e3bc39ce73d58d1825
> Blocks: 1 Seconds: 16
> contract address: 0xB2e59Cca2cC32A52827224A117fde827084b15ab
> block number: 7583851
> block timestamp: 1663066188
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49980503635
> gas used: 642215 (0x9cca7)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00003211075 ETH

deployed royaltiesRegistry at 0xB2e59Cca2cC32A52827224A117fde827084b15ab

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0001349306 ETH

# 3_royalties_provider_v2legacy.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 4_royalties_provider_art_blocks.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0xa9b87830ef3c11d0fd4f4eced29ea4f4f06a31ddef9d891c5d6bfa6658e83e3c
> Blocks: 1 Seconds: 8
> contract address: 0x54D424Eb644e9ba1AfAdC71232D900c15a6fe30A
> block number: 7583855
> block timestamp: 1663066248
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49976830675
> gas used: 648927 (0x9e6df)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00003244635 ETH

deployed transferProxy at 0x54D424Eb644e9ba1AfAdC71232D900c15a6fe30A

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x6f777d2f0fcb1d0b4b1cb4a7df48ceb4be624e4541924689111c771bbc662d98
> Blocks: 2 Seconds: 21
> contract address: 0x16Cf17dCa26c86C57bF3CaCA8424511D7Fb150b4
> block number: 7583859
> block timestamp: 1663066296
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49973635505
> gas used: 570395 (0x8b41b)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00002851975 ETH

deployed erc20TransferProxy at 0x16Cf17dCa26c86C57bF3CaCA8424511D7Fb150b4

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xce3ea46198accb7982fcbf5959003f8f72f6f663029987f66f06cd6fd695f7d4
> Blocks: 2 Seconds: 20
> contract address: 0xDb9C2d028E39C6cE789E58f509916BDe25DF4557
> block number: 7583863
> block timestamp: 1663066344
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49969047265
> gas used: 849009 (0xcf471)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00004245045 ETH

deployed erc721LazyProxy at 0xDb9C2d028E39C6cE789E58f509916BDe25DF4557

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0xfadc3a6a48faa594c166765831a4213d35e6ba5a82169405be90bf4043fa4df2
> Blocks: 4 Seconds: 56
> contract address: 0xC1317150720f939374f7DdEd6F2bF71dfbc8DFF9
> block number: 7583869
> block timestamp: 1663066428
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49964518505
> gas used: 837104 (0xcc5f0)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000418552 ETH

deployed erc1155LazyProxy at 0xC1317150720f939374f7DdEd6F2bF71dfbc8DFF9

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00014527175 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x6a33316a82d09dfec7bbf42e6d1c597f3e0383ef55d5cfae6d11aa29782e5714
> Blocks: 1 Seconds: 28
> contract address: 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
> block number: 7583875
> block timestamp: 1663066512
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4994397086
> gas used: 4012326 (0x3d3926)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0002006163 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xbcce76929d3b0baeb45c54810861076a3291baeab5a922807b03b2bab1858d73
> Blocks: 2 Seconds: 24
> contract address: 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
> block number: 7583878
> block timestamp: 1663066548
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4993921932
> gas used: 950308 (0xe8024)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000475154 ETH

deployed erc721 at 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xad9ade30fba977eb4fce65f1fc7091b78c10d5caeb29c6e187d21906acbce73f
> Blocks: 2 Seconds: 21
> contract address: 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
> block number: 7583880
> block timestamp: 1663066572
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49916302585
> gas used: 4583347 (0x45efb3)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00022916735 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x66cd5cac718c397a21616c97909fbfb1615495767cd95439be6a49e5a88d1844
> Blocks: 2 Seconds: 16
> contract address: 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
> block number: 7583882
> block timestamp: 1663066596
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4991163599
> gas used: 933319 (0xe3dc7)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00004666595 ETH

deployed erc1155 at 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x5a372834d34bc8405152b7b6ce3c022060b58104209bdeff7dad15fe7214a132
> Blocks: 2 Seconds: 29
> contract address: 0xb5FD9dDD34D783a07c866B37a8D7F25385b19210
> block number: 7583884
> block timestamp: 1663066632
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4990985453
> gas used: 356292 (0x56fc4)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000178146 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x01bdfe054064f37bb6aa13064d8df4dc73e0fa92f7a252ab6d1d9bda1c40bbfb
> Blocks: 3 Seconds: 52
> contract address: 0xc6920feb44D4fA10dE7097d608632fB47394A4a2
> block number: 7583887
> block timestamp: 1663066692
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4990807301
> gas used: 356304 (0x56fd0)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000178152 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0005595948 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xd23601e8da5ee1ab99cb9d7c6ac626b6a101c140727a7fd74e28c1079dd2c584
> Blocks: 1 Seconds: 16
> contract address: 0x295125F9A15E450F404625278222afdDD88bA08F
> block number: 7583891
> block timestamp: 1663066740
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49888459765
> gas used: 3894094 (0x3b6b4e)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0001947047 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x074451e8344e3da293592239b6e95a4faf35bbec25983f814895715b798552aa
> Blocks: 2 Seconds: 16
> contract address: 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1
> block number: 7583893
> block timestamp: 1663066764
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4988444039
> gas used: 803875 (0xc4423)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00004019375 ETH

deployed exchangeV2 at 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00023489845 ETH

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 9_deploy_legacy.js

{
communityWallet: '0xfb571F9da71D1aC33E069571bf5c67faDCFf18e4',
deploy_legacy: true,
beneficiary: '0xfb571F9da71D1aC33E069571bf5c67faDCFf18e4',
buyerFeeSigner: '0xfb571F9da71D1aC33E069571bf5c67faDCFf18e4',
rarible_token_legacy: {
name: 'Rarible',
symbol: 'RARI',
signer: '0x002ed05478c75974e08f0811517aa0e3eddc1380',
contractURI: 'https://api-e2e.rarible.com/contractMetadata/{address}',
tokenURIPrefix: 'ipfs://'
},
mintable_token_legacy: {
name: 'Rarible',
symbol: 'RARI',
newOwner: '0x002ed05478c75974e08f0811517aa0e3eddc1380',
contractURI: 'https://api-e2e.rarible.com/contractMetadata/{address}',
tokenURIPrefix: 'ipfs://'
},
deploy_CryptoPunks: true,
address_ownerTestCryptoPunks: '0xf17f52151EbEF6C7334FAD080c5704D77216b732'
}

Error: Could not find artifacts for ExchangeStateV1 from any sources
at Resolver.require (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/resolver/dist/lib/resolver.js:61:1)
at Object.require (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:172:1)
at ResolverIntercept.require (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/ResolverIntercept.js:22:1)
at module.exports (/Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/migrations/9_deploy_legacy.js:14:35)
at Migration.\_load (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:55:1)
at Migration.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
at Object.runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
at Object.runFrom (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
at runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
at Command.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)
Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜ deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network goerli

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

# Compiling your contracts...

> Compiling ./contracts/AssetMatchersImport.sol
> Compiling ./contracts/ExchangeV2Import.sol
> Compiling ./contracts/RoyaltiesRegistryImport.sol
> Compiling ./contracts/TokensImport.sol
> Compiling ./contracts/TransferProxiesImport.sol
> Compilation warnings encountered:

    @rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:33:9: Warning: This declaration shadows an existing declaration.
        string memory _tokenURI = _tokenURIs[tokenId];
        ^---------------------^

@rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:32:5: The shadowed declaration is here:
function _tokenURI(uint256 tokenId) internal view virtual returns (string memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/interfaces/IERC1271.sol:16:5: Warning: Interface functions are implicitly "virtual"
function isValidSignature(bytes32 \_hash, bytes calldata \_signature) virtual external view returns (bytes4 magicValue);
^--------------------------------------------------------------------------------------------------------------------^
,@openzeppelin/contracts/access/Ownable.sol:26:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor () internal {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/BeaconProxy.sol:35:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address beacon, bytes memory data) public payable {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/UpgradeableBeacon.sol:27:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address implementation_) public {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:144:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:147:14: Warning: Unused local variable.
(address token, LibERC721LazyMint.Mint721Data memory data) = abi.decode(matchNft.data, (address, LibERC721LazyMint.Mint721Data));
^-----------^
,@rarible/custom-matchers/contracts/AssetMatcherCollection.sol:17:5: Warning: Function state mutability can be restricted to pure
function matchAssets(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/AssetMatcher.sol:68:5: Warning: Function state mutability can be restricted to pure
function simpleMatch(LibAsset.Asset ... turns (LibAsset.AssetType memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/royalties/contracts/LibRoyalties2981.sol:15:5: Warning: Function state mutability can be restricted to pure
function calculateRoyalties(address to, uint256 amount) internal view returns (LibPart.Part[] memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/tokens/contracts/erc-721/ERC721Upgradeable.sol:389:5: Warning: Function state mutability can be restricted to view
function \_burned(uint256 tokenId) internal returns (bool) {
^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'goerli'
> Network id: 5
> Block gas limit: 30000000 (0x1c9c380)

# 9_deploy_legacy.js

{
communityWallet: '0x29bD48E4cB7562D660506Ff940365a76A8d407E3',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
new impl 721 = 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
old impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
new impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87

> Saving migration to chain.

---

> Total cost: 0 ETH

# 11_update_exchangev2.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 12_deploy_ERC721Minimal_tokens_factory.js

Deploying 'ERC721RaribleMinimal'

---

> transaction hash: 0xe08d910aa651c1ebae0da850228d74c5f2799a4f0d2f3a9dafdd955b9bef40dc
> Blocks: 1 Seconds: 16
> contract address: 0xC74A89214fe516F10d59989CbACa838EA6DAfcA8
> block number: 7583943
> block timestamp: 1663067448
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4986233601
> gas used: 3814925 (0x3a360d)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00019074625 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xeaffebef9033e0d37da4dc82908ea30dbad6c63de21a23fd106bdd793bf6d173
> Blocks: 4 Seconds: 60
> contract address: 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
> block number: 7583948
> block timestamp: 1663067520
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49857684405
> gas used: 930321 (0xe3211)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00004651605 ETH

deployed erc721 minimal at 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x19d8a3a033c229d7230dadea4e67e8a2f5f474a45f12e176dd50cf2f1afefd1e
> Blocks: 0 Seconds: 28
> contract address: 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
> block number: 7583949
> block timestamp: 1663067556
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49855902885
> gas used: 356304 (0x56fd0)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.0000178152 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x16c47ecd4d25567334624ade4f2b1642a873ea9e9a1032902fdb3886644982eb
> Blocks: 2 Seconds: 32
> contract address: 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771
> block number: 7583951
> block timestamp: 1663067592
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4984929471
> gas used: 1321635 (0x142aa3)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00006608175 ETH

deployed factory721 minimal at 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00032115925 ETH

# 13_update_ERC721.js

old impl 721 = 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
new impl 721 = 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf

> Saving migration to chain.

---

> Total cost: 0 ETH

# 14_initial_CryptoPunks.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 15_upgrade_royalties_registry.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 16_update_ERC1155_deploy_factory.js

old impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
new impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x6875fef4d8cba15a712b248b6e4ddb75ebc5f0ce5b7985793c67f2a04bbd1f80
> Blocks: 1 Seconds: 20
> contract address: 0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D
> block number: 7583975
> block timestamp: 1663067892
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49841275635
> gas used: 1321635 (0x142aa3)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00006608175 ETH

deployed factory1155 at 0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00006608175 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x3175350193a7f681f870e8c2df41b839b76cb270588b06bc43595e9b64b63a3d
> Blocks: 1 Seconds: 28
> contract address: 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA
> block number: 7583983
> block timestamp: 1663068000
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49839757105
> gas used: 275151 (0x432cf)
> gas price: 0.05 gwei
> value sent: 0 ETH
> total cost: 0.00001375755 ETH

asset matcher for collections deployed at 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00001375755 ETH

# Summary

> Total deployments: 6
> Final cost: 0.00040099855 ETH

➜ deploy git:(deploy/binance) ✗
