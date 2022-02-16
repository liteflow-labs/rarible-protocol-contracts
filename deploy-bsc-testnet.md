Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

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

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0x47b86877e7148fcb0c95fc5a3db69252ffcf039518a8037f28818d0fac80fff0
> Blocks: 1 Seconds: 4
> contract address: 0x2E8B827d19a690E450A317bb4c32fD7a4b9562c3
> block number: 16718401
> block timestamp: 1644755726
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.88329266
> gas used: 648927 (0x9e6df)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01297854 ETH

deployed transferProxy at 0x2E8B827d19a690E450A317bb4c32fD7a4b9562c3

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x349a8822dbcfcb08f0776b5024bc6c8e23ab3ee76d2a5d291975a24c696679de
> Blocks: 1 Seconds: 4
> contract address: 0x8e1057548527cfe50efa2576BbB64273F30bC40D
> block number: 16718408
> block timestamp: 1644755747
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.87042598
> gas used: 570395 (0x8b41b)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.0114079 ETH

deployed erc20TransferProxy at 0x8e1057548527cfe50efa2576BbB64273F30bC40D

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x68df40e26cf03ba4da125a7a433c969f564de7f3aca44122973218fbdd2d9ada
> Blocks: 1 Seconds: 5
> contract address: 0x1866f5CAB953dc02b76cC15091B12689bd8186F6
> block number: 16718414
> block timestamp: 1644755765
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.85198702
> gas used: 849009 (0xcf471)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01698018 ETH

deployed erc721LazyProxy at 0x1866f5CAB953dc02b76cC15091B12689bd8186F6

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0xd566f3c80f3bdf5e1dd1195a4c537465fa232da788dfdbf85268abefb4672175
> Blocks: 1 Seconds: 4
> contract address: 0xAa7BAe6EeEDc96Bf049f593F2A4a2531f6675c96
> block number: 16718420
> block timestamp: 1644755783
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.83378598
> gas used: 837104 (0xcc5f0)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01674208 ETH

deployed erc1155LazyProxy at 0xAa7BAe6EeEDc96Bf049f593F2A4a2531f6675c96

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0581087 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0xc9e8359d4aa0ab9caca4d6bae044b38b60065539e5d59085a0471363fd3b5a9c
> Blocks: 2 Seconds: 4
> contract address: 0x338f76eea4142ee019F849fC685d9f7E60B5952C
> block number: 16718429
> block timestamp: 1644755810
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.7515354
> gas used: 4012326 (0x3d3926)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.08024652 ETH

Deploying 'TransparentUpgradeableProxy'

---

Error: **_ Deployment Failed _**

"TransparentUpgradeableProxy" -- Too Many Requests
{
"originalError": {}
}.

    at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:365:1
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Object.deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy.ts:9:48)
    at deployProxy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/deploy-proxy.ts:63:9)
    at module.exports (/Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/migrations/6_tokens_and_factories.js:23:23)
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
➜ deploy git:(master) ✗ npm run truffle -- migrate --network binance_testnet

> @rarible/deploy@0.0.2 truffle
> truffle "migrate" "--network" "binance_testnet"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

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

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 6_tokens_and_factories.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x3083de3a8d4fa022677801dce36723e094255958578470da4448de85dc13253e
> Blocks: 3 Seconds: 8
> contract address: 0xf0eD48aed3F7AD0a5A94BEEA26E03c5a52b8C229
> block number: 16718445
> block timestamp: 1644755858
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.732667
> gas used: 943420 (0xe653c)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.0188684 ETH

deployed erc721 at 0xf0eD48aed3F7AD0a5A94BEEA26E03c5a52b8C229

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xee5d73325b70ed36a247c78b798c610ca7ea2e9af0b888f1c4c0fe03337a8823
> Blocks: 1 Seconds: 4
> contract address: 0xF177b506D23e87671643803367e24b450Fe525D0
> block number: 16718449
> block timestamp: 1644755870
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.64100006
> gas used: 4583347 (0x45efb3)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.09166694 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x623974f56b4267f87032e494985b234ab52187efcc4ef042ca88618cb57f7f17
> Blocks: 0 Seconds: 0
> contract address: 0x46cc0b2A632fD53950c4303aE8928F3ea30D632c
> block number: 16718453
> block timestamp: 1644755882
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.62244144
> gas used: 927931 (0xe28bb)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01855862 ETH

deployed erc1155 at 0x46cc0b2A632fD53950c4303aE8928F3ea30D632c

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x492fa10ee25970ade804a82da0bdf0c4b6153f16cf0009df0b928fad025eb29c
> Blocks: 1 Seconds: 4
> contract address: 0x759bA9eCc1d2f62137d9450A52f2207E37AA82c6
> block number: 16718457
> block timestamp: 1644755894
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.6154056
> gas used: 351792 (0x55e30)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00703584 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x44f666278212e4e5c65d9949b8042135c60d6dfc2ae61c824b83b8bf2a4d500e
> Blocks: 1 Seconds: 4
> contract address: 0x3ff17DD8e0C3711Ef808d41dd80B8FdF24bdF695
> block number: 16718461
> block timestamp: 1644755906
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.60836952
> gas used: 351804 (0x55e3c)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00703608 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.14316588 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x7cb11e1b5c774187e24f65f6d936553ca7bfa9917ff89040c01487fe1c6fa111
> Blocks: 1 Seconds: 4
> contract address: 0x155c8c8636877E3E1607e5a20632eB085F9aFd66
> block number: 16718468
> block timestamp: 1644755927
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.52994254
> gas used: 3894094 (0x3b6b4e)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.07788188 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xd7a81dd529b2a88696c77f487a483ec3c3f5e9e791a9a6da69a9deb4dce499d7
> Blocks: 1 Seconds: 4
> contract address: 0x23642f6b345af0999A636d7d749a8D7A48355bDf
> block number: 16718472
> block timestamp: 1644755939
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.5140028
> gas used: 796987 (0xc293b)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01593974 ETH

deployed exchangeV2 at 0x23642f6b345af0999A636d7d749a8D7A48355bDf

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.09382162 ETH

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

Error: Too Many Requests
{
"originalError": {}
}
at Object.\_fireError (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:52:18
at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)
at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:390:28)
at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)
at Request.emit (node:events:390:28)
at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)
at Object.onceWrapper (node:events:509:28)
at IncomingMessage.emit (node:events:402:35)
at endReadableNT (node:internal/streams/readable:1343:12)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
➜ deploy git:(master) ✗ npm run truffle -- migrate --network binance_testnet --compile-none

> @rarible/deploy@0.0.2 truffle
> truffle "migrate" "--network" "binance_testnet" "--compile-none"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

# Compiling your contracts...

> Compilation skipped because --compile-none option was passed.

# Starting migrations...

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 9_deploy_legacy.js

{
communityWallet: '0x709D48037015f1B1332FB66efe7C90725E2f979D',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

⠸ Saving migration to chain.

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0x338f76eea4142ee019F849fC685d9f7E60B5952C
new impl 721 = 0x338f76eea4142ee019F849fC685d9f7E60B5952C
old impl 1155 = 0xF177b506D23e87671643803367e24b450Fe525D0
new impl 1155 = 0xF177b506D23e87671643803367e24b450Fe525D0

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

> transaction hash: 0xdb8089404234460424dd0407370fe955e2946f7e2adc248dd4653537a6a4624f
> Blocks: 1 Seconds: 4
> contract address: 0xe6633aB410b324B1d48De665A872DAfDd8D31543
> block number: 16718553
> block timestamp: 1644756182
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.42674328
> gas used: 3814925 (0x3a360d)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.0762985 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x12c1ace4e0637d82709f934ee9a5ae366c067a71520188eefd2b8c3aabada2ab
> Blocks: 1 Seconds: 4
> contract address: 0xB0809fa12564C2eDd98a3ba4fBF1046805053524
> block number: 16718557
> block timestamp: 1644756194
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.40826062
> gas used: 924133 (0xe19e5)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01848266 ETH

deployed erc721 minimal at 0xB0809fa12564C2eDd98a3ba4fBF1046805053524

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x48e2f88a7ed577b77aabc1c0ce7eadaf70189d2a79968494a89de9cfe18e8718
> Blocks: 2 Seconds: 4
> contract address: 0x8932c296e2d22E666caF0Da120e17Adc9827cBcF
> block number: 16718561
> block timestamp: 1644756206
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.40122454
> gas used: 351804 (0x55e3c)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00703608 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x224958b5c833b3587a725f44ea031e06e4f29dc06a38b646494575aea71485cc
> Blocks: 2 Seconds: 4
> contract address: 0x9DEa39f488768ae692AD8d652924842a30E99584
> block number: 16718565
> block timestamp: 1644756218
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.3748956
> gas used: 1316447 (0x14165f)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.02632894 ETH

deployed factory721 minimal at 0x9DEa39f488768ae692AD8d652924842a30E99584

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.12814618 ETH

# 13_update_ERC721.js

Error: Too Many Requests
{
"originalError": {}
}
at Object.\_fireError (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:52:18
at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)
at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:390:28)
at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)
at Request.emit (node:events:390:28)
at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)
at Object.onceWrapper (node:events:509:28)
at IncomingMessage.emit (node:events:402:35)
at endReadableNT (node:internal/streams/readable:1343:12)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
➜ deploy git:(master) ✗
➜ deploy git:(master) ✗ npm run truffle -- migrate --network binance_testnet

> @rarible/deploy@0.0.2 truffle
> truffle "migrate" "--network" "binance_testnet"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

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

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 29999542 (0x1c9c1b6)

# 13_update_ERC721.js

old impl 721 = 0x338f76eea4142ee019F849fC685d9f7E60B5952C
new impl 721 = 0x338f76eea4142ee019F849fC685d9f7E60B5952C

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

old impl 1155 = 0xF177b506D23e87671643803367e24b450Fe525D0
new impl 1155 = 0xF177b506D23e87671643803367e24b450Fe525D0

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x4bb15e754768ff99b82a7378abc2d34bea735e3d301ba26eba3ca6629e47d03d
> Blocks: 1 Seconds: 4
> contract address: 0xD7b40F58a572b501F2Cb6b78E07a8C1607340C87
> block number: 16718606
> block timestamp: 1644756341
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.34297078
> gas used: 1316447 (0x14165f)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.02632894 ETH

deployed factory1155 at 0xD7b40F58a572b501F2Cb6b78E07a8C1607340C87

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.02632894 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xf030010ed609bae6045ca30177aa5edfbac71d71bd6a4a95fc653f9c463b6bca
> ⠋ Blocks: 103 Seconds: 308^CUnhandledRejections detected
> Promise {
> <rejected> Error: Too Many Requests
> {

    "originalError": {}

}
at Object.\_fireError (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:52:18
at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)
at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:390:28)
at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)
at Request.emit (node:events:390:28)
at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)
at Object.onceWrapper (node:events:509:28)
at IncomingMessage.emit (node:events:402:35)
at endReadableNT (node:internal/streams/readable:1343:12)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
} Error: Too Many Requests
{
"originalError": {}
}
at Object.\_fireError (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:52:18
at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)
at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:390:28)
at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)
at Request.emit (node:events:390:28)
at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)
at Object.onceWrapper (node:events:509:28)
at IncomingMessage.emit (node:events:402:35)
at endReadableNT (node:internal/streams/readable:1343:12)
at processTicksAndRejections (node:internal/process/task_queues:83:21)
➜ deploy git:(master) ✗ npm run truffle -- migrate --network binance_testnet

> @rarible/deploy@0.0.2 truffle
> truffle "migrate" "--network" "binance_testnet"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

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

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x54b8385d767d02bf7888c26e6518b8d3e8ee027a1b77eb62cd269a2f7678683e
> Blocks: 3 Seconds: 8
> contract address: 0xBe85748CB1071fcb0b9Ee15028012F65636fF2Eb
> block number: 16718721
> block timestamp: 1644756686
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.33141964
> gas used: 275151 (0x432cf)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00550302 ETH

asset matcher for collections deployed at 0xBe85748CB1071fcb0b9Ee15028012F65636fF2Eb

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00550302 ETH

# Summary

> Total deployments: 1
> Final cost: 0.00550302 ETH

➜ deploy git:(master) ✗ cd ../erc20
➜ erc20 git:(master) ✗ npm run truffle -- migrate --network binance_testnet

> @rarible/tokens@0.7.0 truffle
> truffle "migrate" "--network" "binance_testnet"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7

# Compiling your contracts...

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'binance_testnet'
> Network id: 97
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x9c7253072d3f13dfe1d09614dbb2444267e08e199d2d65ad72f59478de0dc8ad
> Blocks: 3 Seconds: 8
> contract address: 0x7e925A6411101B5E210dF37011F93F9096cb7545
> block number: 16718777
> block timestamp: 1644756854
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.32683574
> gas used: 153706 (0x2586a)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.00307412 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00307412 ETH

# 2_initial_erc20.js

Deploying 'ERC20Test'

---

> transaction hash: 0x48883b30c7fb7faa746c315634ddf47ad71470dabfe30f9692983181840517fb
> Blocks: 1 Seconds: 4
> contract address: 0xb151157e40CD33727d3be904B872A192154eD20D
> block number: 16718783
> block timestamp: 1644756872
> account: 0x37Db46b5E1E3BD532958B277726A74818778Cdb7
> balance: 0.3097951
> gas used: 809777 (0xc5b31)
> gas price: 20 gwei
> value sent: 0 ETH
> total cost: 0.01619554 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01619554 ETH

# Summary

> Total deployments: 2
> Final cost: 0.01926966 ETH

➜ erc20 git:(master) ✗
