Last login: Mon Jan 15 17:01:28 on console
➜ ~ cd Development/Liteflow/rarible-protocol-contracts
➜ rarible-protocol-contracts git:(feature/neon-evm) ✗ code .
➜ rarible-protocol-contracts git:(feature/neon-evm) ✗ cd deploy
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6

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

> Network name: 'neonevm'
> Network id: 245022934
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xb1e73eb3d07c310ca3c014387dd49aeb4676728023b85b9062fa28030d6a0c98
> Blocks: 145 Seconds: 65
> contract address: 0x6812D7020f956868435b65e2442Fd81166A2AC43
> block number: 242081655
> block timestamp: 1705373789
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 107.15920646970992616
> gas used: 139545760 (0x8514ca0)
> gas price: 142.114791351 gwei
> value sent: 0 ETH
> total cost: 19.83151656631672176 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4684a9f191f0c631dedf72503e013671a540a70b553b6b27b1cf51a9193458d6
> Blocks: 75 Seconds: 33
> contract address: 0x33B0e9706ecc77c02129a6d03cBDb15Bc048810f
> block number: 242081778
> block timestamp: 1705373842
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 101.23930114415094036
> gas used: 41655800 (0x27b9df8)
> gas price: 142.114791351 gwei
> value sent: 0 ETH
> total cost: 5.9199053255589858 ETH

deployed exchangeV2 at 0x33B0e9706ecc77c02129a6d03cBDb15Bc048810f

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 25.75142189187570756 ETH

# 8_add_operator_proxies.js

/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:816
var e = new Error('ESOCKETTIMEDOUT')
^
Error: PollingBlockTracker - encountered an error while attempting to update latest block:
Error: ESOCKETTIMEDOUT
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:816:19)
at Object.onceWrapper (node:events:628:28)
at ClientRequest.emit (node:events:514:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:840:9)
at Object.onceWrapper (node:events:628:28)
at TLSSocket.emit (node:events:526:35)
at TLSSocket.Socket.\_onTimeout (node:net:589:8)
at listOnTimeout (node:internal/timers:573:17)
at processTimers (node:internal/timers:514:7)
at PollingBlockTracker.\_performSync (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/eth-block-tracker/src/polling.js:51:24)
at processTicksAndRejections (node:internal/process/task_queues:95:5)
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Liteflow/rarible-protocol-contracts/deploy
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6

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

> Network name: 'neonevm'
> Network id: 245022934
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 9_deploy_legacy.js

{
communityWallet: '0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0xbdC8DFa81582dc8bA3319DBEfF446E7B12d45B7a
new impl 721 = 0xbdC8DFa81582dc8bA3319DBEfF446E7B12d45B7a
old impl 1155 = 0x62D4EBBE0168b9a2c7296cd34E5e8839F11354B1
new impl 1155 = 0x62D4EBBE0168b9a2c7296cd34E5e8839F11354B1

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

> transaction hash: 0x1e16c81a82023ee8da01d644e1513b7b50728717732b2bcf06e9cac402d0cddd
> ⠹ Blocks: 87 Seconds: 37
> /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:816

          var e = new Error('ESOCKETTIMEDOUT')
                  ^

Error: PollingBlockTracker - encountered an error while attempting to update latest block:
Error: ESOCKETTIMEDOUT
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:816:19)
at Object.onceWrapper (node:events:628:28)
at ClientRequest.emit (node:events:514:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:840:9)
at Object.onceWrapper (node:events:628:28)
at TLSSocket.emit (node:events:526:35)
at TLSSocket.Socket.\_onTimeout (node:net:589:8)
at listOnTimeout (node:internal/timers:573:17)
at processTimers (node:internal/timers:514:7)
at PollingBlockTracker.\_performSync (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/eth-block-tracker/src/polling.js:51:24)
at processTicksAndRejections (node:internal/process/task_queues:95:5)
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Liteflow/rarible-protocol-contracts/deploy
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6

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

> Network name: 'neonevm'
> Network id: 245022934
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 12_deploy_ERC721Minimal_tokens_factory.js

Deploying 'ERC721RaribleMinimal'

---

> transaction hash: 0xf8957f2c2c339b0ca652d33784d3c11c3eb13aeeff6fcad6c47ddc2a74df18a1
> Blocks: 204 Seconds: 81
> contract address: 0xDD0aa608dd9A71bb0dA089C96f2a15121394F053
> block number: 242084591
> block timestamp: 1705375123
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 60.88541014168869452
> gas used: 136998400 (0x82a6e00)
> gas price: 142.593760238 gwei
> value sent: 0 ETH
> total cost: 19.5351170025896192 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb259da257f88b1379ecce29305ec98cfd8e68f28e53221de63941a274cd1371d
> Blocks: 167 Seconds: 63
> contract address: 0xe84587b185236b3DB514a01d8678efDb510C7C04
> block number: 242084853
> block timestamp: 1705375235
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 54.04412131996316412
> gas used: 47954600 (0x2dbbaa8)
> gas price: 142.661784724 gwei
> value sent: 0 ETH
> total cost: 6.8412888217255304 ETH

deployed erc721 minimal at 0xe84587b185236b3DB514a01d8678efDb510C7C04

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0xd28978888b19dc4aadfd9dca49b84406b01d41a81c4613e39ebdb437f255e184
> Blocks: 73 Seconds: 25
> contract address: 0x49fd04ca28EE0F2fbe55A8fe19851FfA127D27AB
> block number: 242084993
> block timestamp: 1705375297
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 50.66467151793661212
> gas used: 23684000 (0x16963a0)
> gas price: 142.689148878 gwei
> value sent: 0 ETH
> total cost: 3.379449802026552 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0xa18055c0b49f6031a327c0f76515875b9fa069652e01be3a06f6553d54bc294f
> Blocks: 85 Seconds: 37
> contract address: 0xe62604c8A7b8b2c41e8F2Dfa46d51c96223dD860
> block number: 242085093
> block timestamp: 1705375342
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 43.03189293845685624
> gas used: 53546520 (0x3310e18)
> gas price: 142.544811119 gwei
> value sent: 0 ETH
> total cost: 7.63277857947975588 ETH

deployed factory721 minimal at 0xe62604c8A7b8b2c41e8F2Dfa46d51c96223dD860

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 37.38863420582145748 ETH

# 13_update_ERC721.js

old impl 721 = 0xbdC8DFa81582dc8bA3319DBEfF446E7B12d45B7a
new impl 721 = 0xbdC8DFa81582dc8bA3319DBEfF446E7B12d45B7a

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

old impl 1155 = 0x62D4EBBE0168b9a2c7296cd34E5e8839F11354B1
new impl 1155 = 0x62D4EBBE0168b9a2c7296cd34E5e8839F11354B1

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x1c63bef97560240846468e1f95e8250f0af3aa42f0a4a34804d95e7b9bdfef4a
> Blocks: 38 Seconds: 19
> contract address: 0xe14062aF398c4013eF4cA1bDEd9D054a16b3e6B4
> block number: 242085641
> block timestamp: 1705375583
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 35.38978230818408696
> gas used: 53546520 (0x3310e18)
> gas price: 142.479572414 gwei
> value sent: 0 ETH
> total cost: 7.62928527385769928 ETH

deployed factory1155 at 0xe14062aF398c4013eF4cA1bDEd9D054a16b3e6B4

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 7.62928527385769928 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x957bcba09c79ab41a82ed3365faf14f084ec4be25c517d5037609854da8b1bfd
> Blocks: 47 Seconds: 22
> contract address: 0x30668A464bDaC7fA3b18A8d2f02E213e58Be15b1
> block number: 242085787
> block timestamp: 1705375646
> account: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6
> balance: 32.13978794722341944
> gas used: 22807040 (0x15c0200)
> gas price: 142.437159288 gwei
> value sent: 0 ETH
> total cost: 3.24856998936778752 ETH

asset matcher for collections deployed at 0x30668A464bDaC7fA3b18A8d2f02E213e58Be15b1

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 3.24856998936778752 ETH

# Summary

> Total deployments: 6
> Final cost: 48.26648946904694428 ETH

UnhandledRejections detected
Promise {
<rejected> Error: ESOCKETTIMEDOUT
{
"originalError": {
"code": "ESOCKETTIMEDOUT",
"connect": false
}
}
at Object.\_fireError (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at Request.\_callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:36:21)
at self.callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:514:28)
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:819:16)
at Object.onceWrapper (node:events:628:28)
at ClientRequest.emit (node:events:514:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:840:9)
at Object.onceWrapper (node:events:628:28)
at TLSSocket.emit (node:events:526:35)
at TLSSocket.Socket.\_onTimeout (node:net:589:8)
at listOnTimeout (node:internal/timers:573:17)
at processTimers (node:internal/timers:514:7)
} Error: ESOCKETTIMEDOUT
{
"originalError": {
"code": "ESOCKETTIMEDOUT",
"connect": false
}
}
at Object.\_fireError (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-utils/lib/index.js:49:1)
at sendTxCallback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3-eth/node_modules/web3-core-method/lib/index.js:539:1)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/truffle/build/webpack:/node_modules/web3/node_modules/web3-core-requestmanager/lib/index.js:299:1
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at Request.\_callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:36:21)
at self.callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:514:28)
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:819:16)
at Object.onceWrapper (node:events:628:28)
at ClientRequest.emit (node:events:514:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:840:9)
at Object.onceWrapper (node:events:628:28)
at TLSSocket.emit (node:events:526:35)
at TLSSocket.Socket.\_onTimeout (node:net:589:8)
at listOnTimeout (node:internal/timers:573:17)
at processTimers (node:internal/timers:514:7)
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6

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

Network up to date.
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x628FC6c02D445c32FF1441b1D6Af1dd97A635CF6

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

Network up to date.
➜ deploy git:(feature/neon-evm) ✗

---

From deployment json file deploy/build/contracts/ERC20TransferProxy.json
deployed erc20TransferProxy at: 0x12832856858Ec1756df10807B9a8422F5bBB37ab

From deployment file deploy/build/contracts/TransferProxy.json
deployed transferProxy at: 0x59e1C8D19ef6d99fCCbdeF11B5E189fabF6B40fd
