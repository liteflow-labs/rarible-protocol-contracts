➜ deploy git:(feature/arbitrum-deployment) ✗ npm run truffle -- migrate --network arbitrum_one

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network arbitrum_one

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9

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

> Network name: 'arbitrum_one'
> Network id: 42161
> Block gas limit: 1125899906842624 (0x4000000000000)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x3683771603b446ed34d6e8db75627aa3b7673056f21da940c7c9e07119ead977
> Blocks: 0 Seconds: 0
> contract address: 0xaD51b52307579dF6B2476C073f460996391A83c4
> block number: 173582609
> block timestamp: 1706071029
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0099293363
> gas used: 706637 (0xac84d)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000706637 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0000706637 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x89694567c459a84d4dd2b7f5b4cdd355de06ce9b348bd9c780da8b9d6828cb5c
> Blocks: 17 Seconds: 4
> contract address: 0x5cc32A135663018bAB9976B379cc08F142423916
> block number: 173582661
> block timestamp: 1706071042
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0093269867
> gas used: 5821781 (0x58d555)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0005821781 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x9c49c1809985942e1698e7e956565875c322b32e0a3855c6072b3891c704e920
> Blocks: 18 Seconds: 4
> contract address: 0xd7da35C6aa60282A0b183F3b681aDD566Ec42583
> block number: 173582703
> block timestamp: 1706071052
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0091261004
> gas used: 2008863 (0x1ea71f)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0002008863 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x5e8803d72db0c931f40ff1a22375223296460e46d5c15429471880446a1dbf20
> Blocks: 18 Seconds: 4
> contract address: 0xA239862e02808DBd11470D3EC967E04FBA16238f
> block number: 173582741
> block timestamp: 1706071062
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0088008023
> gas used: 3252981 (0x31a2f5)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003252981 ETH

deployed royaltiesRegistry at 0xA239862e02808DBd11470D3EC967E04FBA16238f

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0011083625 ETH

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

> transaction hash: 0x960be59cac7fa4e237b2ba09adb5a87cfaaceb8cc66407f61398127416ac9735
> Blocks: 17 Seconds: 4
> contract address: 0xc4A4A255450Dd5E3EC951805701125984b71b007
> block number: 173582851
> block timestamp: 1706071089
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0085189371
> gas used: 2261555 (0x228233)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0002261555 ETH

deployed transferProxy at 0xc4A4A255450Dd5E3EC951805701125984b71b007

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x50fb25ed3b7afec026604b8e6e1d1699035f6999ba3151e8aad5af053893b914
> Blocks: 0 Seconds: 0
> contract address: 0xE3c11fB8436Fa418900B06547fC27d1c9A71f877
> block number: 173582896
> block timestamp: 1706071101
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0082975641
> gas used: 2022627 (0x1edce3)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0002022627 ETH

deployed erc20TransferProxy at 0xE3c11fB8436Fa418900B06547fC27d1c9A71f877

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x664c76792ca96f5cabce26999256ae0089a020baca620b9d17794afb95b428d8
> Blocks: 0 Seconds: 0
> contract address: 0x3dEde2c135039740Ba44E93CD4d8c2739de7C1Bc
> block number: 173582946
> block timestamp: 1706071114
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0079424468
> gas used: 3360070 (0x334546)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.000336007 ETH

deployed erc721LazyProxy at 0x3dEde2c135039740Ba44E93CD4d8c2739de7C1Bc

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x34992c896caebb3190cbeec98cb5fe0a9e0b678d5f802529579e98dcfbdad04b
> Blocks: 17 Seconds: 4
> contract address: 0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85
> block number: 173582987
> block timestamp: 1706071124
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.007591662
> gas used: 3316736 (0x329c00)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003316736 ETH

deployed erc1155LazyProxy at 0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0010960988 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x9cadeae6094b392adb7d88de56d26e6ecb4c63997a273b8b52cff4bc21f1b7b8
> Blocks: 17 Seconds: 4
> contract address: 0x8438B715fBDe397886e25ae5C724dab7764707Dc
> block number: 173583059
> block timestamp: 1706071142
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0061719497
> gas used: 13820312 (0xd2e198)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0013820312 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x9e0c625cfb1116e20f4302af64fc568ed089c5bc4867bfa431f0a6781b39f450
> Blocks: 17 Seconds: 4
> contract address: 0xaf452717A901AF5D3B87e68544dba9402CCd5895
> block number: 173583105
> block timestamp: 1706071153
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0058033779
> gas used: 3685718 (0x383d56)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003685718 ETH

deployed erc721 at 0xaf452717A901AF5D3B87e68544dba9402CCd5895

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xc70211f41dca7e9df692de4b8620df9c412b1ae1c1d3c91228547dcae08cb3b0
> Blocks: 18 Seconds: 4
> contract address: 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
> block number: 173583150
> block timestamp: 1706071165
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0042623716
> gas used: 15410063 (0xeb238f)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0015410063 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xc81ef6dbd5862b6104229e2e998082ce6fcb152c78abd541fd873ba2fb095791
> Blocks: 18 Seconds: 4
> contract address: 0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA
> block number: 173583193
> block timestamp: 1706071175
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0038959322
> gas used: 3664394 (0x37ea0a)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003664394 ETH

deployed erc1155 at 0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x59246cfe42e1b9e38250af8578c29e67b9349c3d349fe263f0afba6b29a75d08
> Blocks: 0 Seconds: 0
> contract address: 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F
> block number: 173583234
> block timestamp: 1706071186
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0037490014
> gas used: 1469308 (0x166b7c)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001469308 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x9d344686fa9ef1d1d5a04dffaa89af2b2bd2bec3910bd1b373859f4125e05927
> Blocks: 0 Seconds: 0
> contract address: 0x18E185C08e714e6E4306309B135225B43A77ab22
> block number: 173583270
> block timestamp: 1706071195
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0036020694
> gas used: 1469320 (0x166b88)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.000146932 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0039519115 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x62e306f34e991c3ca630a1aee85401c648ad6a40c143dad4b072e602fabe6f40
> Blocks: 17 Seconds: 4
> contract address: 0x31D56e268357937407EA179ce72e93B2d9c5612E
> block number: 173583320
> block timestamp: 1706071207
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.002205922
> gas used: 13775775 (0xd2339f)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0013775775 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x971ef2ec203fb51f023d938a5a0cd353924df07ff92dae21ecb2bca6833790b5
> Blocks: 17 Seconds: 4
> contract address: 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566
> block number: 173583363
> block timestamp: 1706071218
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0018530772
> gas used: 3528448 (0x35d700)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003528448 ETH

deployed exchangeV2 at 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0017304223 ETH

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 9_deploy_legacy.js

{
communityWallet: '0x3Ae9Bf5331e076b55B61933206f797F4375D11D9',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0x8438B715fBDe397886e25ae5C724dab7764707Dc
new impl 721 = 0x8438B715fBDe397886e25ae5C724dab7764707Dc
old impl 1155 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
new impl 1155 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511

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

Error: **_ Deployment Failed _**

"ERC721RaribleMinimal" could not deploy due to insufficient funds

- Account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
- Balance: 1523169700000000 wei
- Message: insufficient funds for gas \* price + value: address 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9 have 1523169700000000 want 1767300700000000
- Try:

  - Using an adequately funded account
  - If you are using a local Geth node, verify that your node is synced.

    at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:365:1
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Object.deploy (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy.ts:9:48)
    at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy-impl.ts:43:24
    at Object.resumeOrDeploy (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/deployment.ts:42:22)
    at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/impl-store.ts:33:23
    at Manifest.lockedRun (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/manifest.ts:118:14)
    at fetchOrDeployGeneric (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/upgrades-core/src/impl-store.ts:25:24)
    at Object.deployImpl (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy-impl.ts:42:10)
    at deployProxy (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/deploy-proxy.ts:46:16)
    at module.exports (/Users/nico/Development/Liteflow/rarible-protocol-contracts/deploy/migrations/12_deploy_ERC721Minimal_tokens_factory.js:24:23)
    at Migration.\_deploy (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:75:1)
    at Migration.\_load (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:56:1)
    at Migration.run (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
    at Object.runMigrations (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.run (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
    at runMigrations (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
    at Object.run (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
    at Command.run (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)

Truffle v5.4.22 (core: 5.4.22)
Node v20.10.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Liteflow/rarible-protocol-contracts/deploy
➜ deploy git:(feature/arbitrum-deployment) ✗ npm run truffle -- migrate --network arbitrum_one

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network arbitrum_one

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9

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

> Network name: 'arbitrum_one'
> Network id: 42161
> Block gas limit: 1125899906842624 (0x4000000000000)

# 12_deploy_ERC721Minimal_tokens_factory.js

Deploying 'ERC721RaribleMinimal'

---

> transaction hash: 0x2d5cb8c2978e1b3bc6a14f515cc57dd61cc41c4db2626b8e89464ee4e7494274
> Blocks: 17 Seconds: 4
> contract address: 0x91Ff043d6E7d8086Bdd6a918a3EA6733BB246Dc7
> block number: 173585759
> block timestamp: 1706071816
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0202710679
> gas used: 12521018 (0xbf0e3a)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0012521018 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x164562956d6c93700bebd4d3c4b8c687070b6d087c9552903df54e2189f1db7d
> Blocks: 21 Seconds: 4
> contract address: 0xfd58547d49B1948B09662125b22dd9a48BAc6A16
> block number: 173585809
> block timestamp: 1706071829
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0199208393
> gas used: 3502286 (0x3570ce)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003502286 ETH

deployed erc721 minimal at 0xfd58547d49B1948B09662125b22dd9a48BAc6A16

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0xfaa0da27b2ee80ea4960c588f2e55b1b580ac1afd85db70dfd2c983502c5bf0e
> Blocks: 18 Seconds: 4
> contract address: 0x314B8e649590dD9153D5F7225d391cBF9aC51600
> block number: 173585859
> block timestamp: 1706071841
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0197801688
> gas used: 1406705 (0x1576f1)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001406705 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x3b7a4c09b41f60004fe58113334122ef37f4bc765906d99fad371997fa355ec4
> Blocks: 17 Seconds: 4
> contract address: 0x0e0B3f68E243128a564A664c470434dE6eb91359
> block number: 173585898
> block timestamp: 1706071851
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0193045343
> gas used: 4756345 (0x489379)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0004756345 ETH

deployed factory721 minimal at 0x0e0B3f68E243128a564A664c470434dE6eb91359

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0022186354 ETH

# 13_update_ERC721.js

old impl 721 = 0x8438B715fBDe397886e25ae5C724dab7764707Dc
new impl 721 = 0x8438B715fBDe397886e25ae5C724dab7764707Dc

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

old impl 1155 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
new impl 1155 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x43079f5137aacbb5519c42969efee7b62581e44824510d0ef0b100e9409b38d8
> Blocks: 16 Seconds: 4
> contract address: 0x98519E12c422e99F90589e940000a9D3AB615b9e
> block number: 173586153
> block timestamp: 1706071915
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0186579078
> gas used: 4752278 (0x488396)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0004752278 ETH

deployed factory1155 at 0x98519E12c422e99F90589e940000a9D3AB615b9e

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0004752278 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x9edaa1d4c87b3095532650f36d929e44002bb83b9206273644139ee2cfb2ae46
> Blocks: 17 Seconds: 4
> contract address: 0xeE8Ba404dEEeaCeE3CA671a33dbfB3e9430D7F8E
> block number: 173586201
> block timestamp: 1706071927
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.0185158684
> gas used: 1243967 (0x12fb3f)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001243967 ETH

asset matcher for collections deployed at 0xeE8Ba404dEEeaCeE3CA671a33dbfB3e9430D7F8E

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0001243967 ETH

# Summary

> Total deployments: 6
> Final cost: 0.0028182599 ETH

➜ deploy git:(feature/arbitrum-deployment) ✗

---

➜ deploy git:(feature/arbitrum-deployment) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network arbitrum_one --name "Liteflow ERC721" --symbol "LTF" --baseURI ipfs:/ --factoryAddress 0x0e0B3f68E243128a564A664c470434dE6eb91359

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc721.js --network arbitrum_one --name Liteflow ERC721 --symbol LTF --baseURI ipfs:/ --factoryAddress 0x0e0B3f68E243128a564A664c470434dE6eb91359

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> Using network 'arbitrum_one'.

name: Liteflow ERC721
symbol: LTF
baseURI: ipfs:/
factoryAddress: 0x0e0B3f68E243128a564A664c470434dE6eb91359
using factory at 0x0e0B3f68E243128a564A664c470434dE6eb91359
salt 0x1336f74999e27a6e56753cf9c2874459c3000e4e8c1fedc86f547248c880b98f
Confirm info? type yes to confirm: yes
deploying...
tx: 0x64c8809d03bbd3dbaf6b5ea871fba3aaea7329fd6430bcf04c1838f01bd0884b
token deployed at: 0xBc62F76BE8b4c34012586f3342644A1ECbfB4d0C

---

➜ deploy git:(feature/arbitrum-deployment) ✗ npm run truffle -- exec ./scripts/deploy-erc1155.js --network arbitrum_one --name "Liteflow ERC1155" --symbol "LTF" --baseURI ipfs:/ --factoryAddress 0x98519E12c422e99F90589e940000a9D3AB615b9e

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc1155.js --network arbitrum_one --name Liteflow ERC1155 --symbol LTF --baseURI ipfs:/ --factoryAddress 0x98519E12c422e99F90589e940000a9D3AB615b9e

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> Using network 'arbitrum_one'.

name: Liteflow ERC1155
symbol: LTF
baseURI: ipfs:/
factoryAddress: 0x98519E12c422e99F90589e940000a9D3AB615b9e
using factory at 0x98519E12c422e99F90589e940000a9D3AB615b9e
salt 0xe43ef462c61611e51d8b88c9f043f31f077fac6a303424252b3a241bbf3f43c7
Confirm info? type yes to confirm: yes
deploying...
tx: 0x795651548f71cc5b09318fb546aea8249d8e83a96802f493e1b32b4db411fc5b
token deployed at: 0xE1A8d2870C64958268BC16b84B97dDf60f3909E5
