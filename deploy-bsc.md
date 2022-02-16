➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

# Compiling your contracts...

> Compiling ./contracts/AssetMatchersImport.sol
> Compiling ./contracts/ExchangeV2Import.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/RoyaltiesRegistryImport.sol
> Compiling ./contracts/TokensImport.sol
> Compiling ./contracts/TransferProxiesImport.sol
> Compiling @openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/drafts/EIP712Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/introspection/ERC165Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/introspection/IERC165Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/math/MathUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/proxy/Initializable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155ReceiverUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155MetadataURIUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155ReceiverUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC1155/IERC1155Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC721/IERC721EnumerableUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC721/IERC721MetadataUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC721/IERC721ReceiverUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/EnumerableMapUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/EnumerableSetUpgradeable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol
> Compiling @openzeppelin/contracts/access/Ownable.sol
> Compiling @openzeppelin/contracts/proxy/BeaconProxy.sol
> Compiling @openzeppelin/contracts/proxy/IBeacon.sol
> Compiling @openzeppelin/contracts/proxy/Proxy.sol
> Compiling @openzeppelin/contracts/proxy/UpgradeableBeacon.sol
> Compiling @openzeppelin/contracts/utils/Address.sol
> Compiling @openzeppelin/contracts/utils/Context.sol
> Compiling @rarible/custom-matchers/contracts/AssetMatcherCollection.sol
> Compiling @rarible/exchange-interfaces/contracts/IAssetMatcher.sol
> Compiling @rarible/exchange-interfaces/contracts/ICryptoPunksMarket.sol
> Compiling @rarible/exchange-interfaces/contracts/IERC20TransferProxy.sol
> Compiling @rarible/exchange-interfaces/contracts/INftTransferProxy.sol
> Compiling @rarible/exchange-interfaces/contracts/ITransferProxy.sol
> Compiling @rarible/exchange-v2/contracts/AssetMatcher.sol
> Compiling @rarible/exchange-v2/contracts/ExchangeV2.sol
> Compiling @rarible/exchange-v2/contracts/ExchangeV2Core.sol
> Compiling @rarible/exchange-v2/contracts/ITransferExecutor.sol
> Compiling @rarible/exchange-v2/contracts/ITransferManager.sol
> Compiling @rarible/exchange-v2/contracts/LibFeeSide.sol
> Compiling @rarible/exchange-v2/contracts/LibFill.sol
> Compiling @rarible/exchange-v2/contracts/LibOrder.sol
> Compiling @rarible/exchange-v2/contracts/LibOrderData.sol
> Compiling @rarible/exchange-v2/contracts/LibOrderDataV1.sol
> Compiling @rarible/exchange-v2/contracts/LibOrderDataV2.sol
> Compiling @rarible/exchange-v2/contracts/OrderValidator.sol
> Compiling @rarible/exchange-v2/contracts/RaribleTransferManager.sol
> Compiling @rarible/exchange-v2/contracts/TransferExecutor.sol
> Compiling @rarible/exchange-v2/contracts/interfaces/IERC1271.sol
> Compiling @rarible/exchange-v2/contracts/lib/BpLibrary.sol
> Compiling @rarible/exchange-v2/contracts/lib/LibMath.sol
> Compiling @rarible/exchange-v2/contracts/lib/LibTransfer.sol
> Compiling @rarible/lazy-mint/contracts/erc-1155/IERC1155LazyMint.sol
> Compiling @rarible/lazy-mint/contracts/erc-1155/LibERC1155LazyMint.sol
> Compiling @rarible/lazy-mint/contracts/erc-721/IERC721LazyMint.sol
> Compiling @rarible/lazy-mint/contracts/erc-721/LibERC721LazyMint.sol
> Compiling @rarible/lib-asset/contracts/LibAsset.sol
> Compiling @rarible/libraries/contracts/LibSignature.sol
> Compiling @rarible/royalties-registry/contracts/RoyaltiesRegistry.sol
> Compiling @rarible/royalties-registry/contracts/providers/RoyaltiesProviderArtBlocks.sol
> Compiling @rarible/royalties-registry/contracts/providers/RoyaltiesProviderV2Legacy.sol
> Compiling @rarible/royalties-registry/contracts/providers/RoyaltyArtBlocks.sol
> Compiling @rarible/royalties-registry/contracts/providers/RoyaltyV2Legacy.sol
> Compiling @rarible/royalties-upgradeable/contracts/RoyaltiesV2Upgradeable.sol
> Compiling @rarible/royalties/contracts/IERC2981.sol
> Compiling @rarible/royalties/contracts/IRoyaltiesProvider.sol
> Compiling @rarible/royalties/contracts/LibPart.sol
> Compiling @rarible/royalties/contracts/LibRoyalties2981.sol
> Compiling @rarible/royalties/contracts/LibRoyaltiesV1.sol
> Compiling @rarible/royalties/contracts/LibRoyaltiesV2.sol
> Compiling @rarible/royalties/contracts/RoyaltiesV1.sol
> Compiling @rarible/royalties/contracts/RoyaltiesV2.sol
> Compiling @rarible/royalties/contracts/impl/AbstractRoyalties.sol
> Compiling @rarible/royalties/contracts/impl/RoyaltiesV2Impl.sol
> Compiling @rarible/tokens-minimal/contracts/erc-721/ERC721UpgradeableMinimal.sol
> Compiling @rarible/tokens/contracts/HasContractURI.sol
> Compiling @rarible/tokens/contracts/LibURI.sol
> Compiling @rarible/tokens/contracts/Mint721Validator.sol
> Compiling @rarible/tokens/contracts/beacons/ERC1155RaribleBeacon.sol
> Compiling @rarible/tokens/contracts/beacons/ERC721RaribleBeacon.sol
> Compiling @rarible/tokens/contracts/beacons/ERC721RaribleMinimalBeacon.sol
> Compiling @rarible/tokens/contracts/create-2/ERC1155RaribleFactoryC2.sol
> Compiling @rarible/tokens/contracts/create-2/ERC721RaribleFactoryC2.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155Base.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155BurnableUpgradeable.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155DefaultApproval.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155Lazy.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155Rarible.sol
> Compiling @rarible/tokens/contracts/erc-1155/ERC1155Upgradeable.sol
> Compiling @rarible/tokens/contracts/erc-1155/Mint1155Validator.sol
> Compiling @rarible/tokens/contracts/erc-1271/ERC1271.sol
> Compiling @rarible/tokens/contracts/erc-1271/ERC1271Validator.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721BaseMinimal.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721BurnableUpgradeableMinimal.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721DefaultApprovalMinimal.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721LazyMinimal.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721RaribleMinimal.sol
> Compiling @rarible/tokens/contracts/erc-721-minimal/ERC721URI.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721Base.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721BurnableUpgradeable.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721DefaultApproval.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721Lazy.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721Rarible.sol
> Compiling @rarible/tokens/contracts/erc-721/ERC721Upgradeable.sol
> Compiling @rarible/transfer-proxy/contracts/lazy-mint/erc1155/ERC1155LazyMintTransferProxy.sol
> Compiling @rarible/transfer-proxy/contracts/lazy-mint/erc721/ERC721LazyMintTransferProxy.sol
> Compiling @rarible/transfer-proxy/contracts/proxy/ERC20TransferProxy.sol
> Compiling @rarible/transfer-proxy/contracts/proxy/TransferProxy.sol
> Compiling @rarible/transfer-proxy/contracts/punk/PunkTransferProxy.sol
> Compiling @rarible/transfer-proxy/contracts/roles/OperatorRole.sol
> Compilation warnings encountered:

    @rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:33:9: Warning: This declaration shadows an existing declaration.
        string memory _tokenURI = _tokenURIs[tokenId];
        ^---------------------^

@rarible/tokens/contracts/erc-1155/ERC1155BaseURI.sol:32:5: The shadowed declaration is here:
function _tokenURI(uint256 tokenId) internal view virtual returns (string memory) {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/access/Ownable.sol:26:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor () internal {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/BeaconProxy.sol:35:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address beacon, bytes memory data) public payable {
^ (Relevant source part starts here and spans across multiple lines).
,@openzeppelin/contracts/proxy/UpgradeableBeacon.sol:27:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
constructor(address implementation_) public {
^ (Relevant source part starts here and spans across multiple lines).
,@rarible/exchange-v2/contracts/interfaces/IERC1271.sol:16:5: Warning: Interface functions are implicitly "virtual"
function isValidSignature(bytes32 \_hash, bytes calldata \_signature) virtual external view returns (bytes4 magicValue);
^--------------------------------------------------------------------------------------------------------------------^
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

> Artifacts written to /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/build/contracts
> Compiled successfully using:

- solc: 0.7.6+commit.7338295f.Emscripten.clang

# Starting migrations...

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79257670 (0x4b96046)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x3d6e943510222f8d6030dc4bab342f55cb7c86ff3a5c6f7ee1fc6e8dbbe96516
> Blocks: 2 Seconds: 4
> contract address: 0xd3a6a8ca6F370Acf0B269949D0190845573c35D5
> block number: 15297003
> block timestamp: 1644986905
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.850212188
> gas used: 153706 (0x2586a)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.000922236 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000922236 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x56f32c42cfeeb07f358f4169a864578b3cdb5f3013142164b22f6e289c0493ee
> Blocks: 1 Seconds: 4
> contract address: 0x0deDD58C524eC08001B16025d168b95BDf95EbB6
> block number: 15297009
> block timestamp: 1644986923
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.840524396
> gas used: 1572377 (0x17fe19)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.009434262 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0xd89d4fa3f96c1455b6e86e4925db59be0c9100afa99d392b6a4eee400d9ec184
> Blocks: 1 Seconds: 4
> contract address: 0x75b8fDd67Fa4f1c4663bbFf9Ff82c6Ad9547F396
> block number: 15297013
> block timestamp: 1644986935
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.837628076
> gas used: 482720 (0x75da0)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.00289632 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x2129fe863692b0500c7be15fe798c365070652f1357c10a6ec72ea6fed0bb849
> Blocks: 1 Seconds: 4
> contract address: 0xd8d1969075ef849F2f01b6d9142aFFDa04fAf85A
> block number: 15297017
> block timestamp: 1644986947
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.833777186
> gas used: 641815 (0x9cb17)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.00385089 ETH

deployed royaltiesRegistry at 0xd8d1969075ef849F2f01b6d9142aFFDa04fAf85A

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.016181472 ETH

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

> transaction hash: 0xf01ab64be9855cd4f8f0f431c7a2cf61150990e6dd74f97f08a773bf8cd7d33f
> Blocks: 3 Seconds: 8
> contract address: 0xc96c8fE34ee5Cb83392CbD9d42599f150aE8B0a0
> block number: 15297030
> block timestamp: 1644986986
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.829393034
> gas used: 648927 (0x9e6df)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.003893562 ETH

Error: Unhandled error. ({
code: -32603,
message: 'Too Many Requests',
data: { originalError: {} },
stack: 'Error: Too Many Requests\n' +
' at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:51:23\n' +
' at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)\n' +
' at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)\n' +
' at Request.emit (node:events:390:28)\n' +
' at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)\n' +
' at Request.emit (node:events:390:28)\n' +
' at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)\n' +
' at Object.onceWrapper (node:events:509:28)\n' +
' at IncomingMessage.emit (node:events:402:35)\n' +
' at endReadableNT (node:internal/streams/readable:1343:12)\n' +
' at processTicksAndRejections (node:internal/process/task_queues:83:21)'
})
at new NodeError (node:internal/errors:371:5)
at Web3ProviderEngine.emit (node:events:379:17)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:57:14
at afterRequest (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:151:21)
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:176:21
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
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79985154 (0x4c47a02)

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0x876ac4c39a0b4abe83e78ffa9d173bfbf5a6729433427a65c7d6433164c4b374
> Blocks: 3 Seconds: 8
> contract address: 0x702b86f2E0Ffa74ad649FF0663cC6b7645854E99
> block number: 15297052
> block timestamp: 1644987052
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.825061838
> gas used: 648927 (0x9e6df)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.003893562 ETH

deployed transferProxy at 0x702b86f2E0Ffa74ad649FF0663cC6b7645854E99

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x991a1a9282614854510fd8413754fd58cac2a5c79bff41e889c548c6a57c53e1
> Blocks: 1 Seconds: 5
> contract address: 0xe180c0Ea8075374D5f42aCeb310162Bfc3eC361a
> block number: 15297058
> block timestamp: 1644987070
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.821201834
> gas used: 570395 (0x8b41b)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.00342237 ETH

deployed erc20TransferProxy at 0xe180c0Ea8075374D5f42aCeb310162Bfc3eC361a

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x803b5a1f299af98a3749f3b2b7acfd103246aff2417990d6565adbbc23006c0e
> Blocks: 6 Seconds: 8
> contract address: 0x6635d47C6580aCDbF6A9Bdfa4608bC49E96B6f88
> block number: 15297066
> block timestamp: 1644987094
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.815670146
> gas used: 849009 (0xcf471)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.005094054 ETH

deployed erc721LazyProxy at 0x6635d47C6580aCDbF6A9Bdfa4608bC49E96B6f88

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x7b0b2708cb8b4bd5ff351f76031dd61e638994fbcf1035ba3dfa6b3ef36a63d0
> Blocks: 1 Seconds: 4
> contract address: 0xF3df38503Da0699E7Fc43b2C35113fa988E802e2
> block number: 15297072
> block timestamp: 1644987112
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.810209834
> gas used: 837104 (0xcc5f0)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.005022624 ETH

deployed erc1155LazyProxy at 0xF3df38503Da0699E7Fc43b2C35113fa988E802e2

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01743261 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x50c46ddf3a94361d42d00887fe4e57a57bb4c729463a6f010dfcd975a770489c
> Blocks: 2 Seconds: 8
> contract address: 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02
> block number: 15297083
> block timestamp: 1644987145
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.78553466
> gas used: 4012326 (0x3d3926)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.024073956 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x5b5bb8fd7a90034cbfd295a924b9775d0af71fdd42ff053291e14b0a34184f62
> Blocks: 3 Seconds: 8
> contract address: 0x87fF45EE95Bbca2bE83b330A7E75457DF6575F81
> block number: 15297088
> block timestamp: 1644987160
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.77987414
> gas used: 943420 (0xe653c)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.00566052 ETH

deployed erc721 at 0x87fF45EE95Bbca2bE83b330A7E75457DF6575F81

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xe25c9791c32e1dd29a09607a49205626eb33832fa93ee77fdce17285d943e819
> Blocks: 1 Seconds: 4
> contract address: 0xd70DD387C47e1FeA7E750baAF3194cc5117Ba283
> block number: 15297092
> block timestamp: 1644987172
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.752374058
> gas used: 4583347 (0x45efb3)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.027500082 ETH

Error: Too Many Requests
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:51:23
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
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79297431 (0x4b9fb97)

# 6_tokens_and_factories.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xdadb423a5b5f217bdcd84c24ed515b4f92905ffc351cb73554bc4bb87cb1f933
> Blocks: 2 Seconds: 8
> contract address: 0xcA0803c820c699b46E5853538d77a8ccBc771825
> block number: 15297114
> block timestamp: 1644987238
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.746713538
> gas used: 943420 (0xe653c)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.00566052 ETH

deployed erc721 at 0xcA0803c820c699b46E5853538d77a8ccBc771825

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x24fa832b5602d4fab3ba82fb8f1f4c863f7341148038107f8115270db7238951
> Blocks: 3 Seconds: 8
> contract address: 0xc4058A0387691e012CCdB01881292026D223b8Bc
> block number: 15297120
> block timestamp: 1644987256
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.741145952
> gas used: 927931 (0xe28bb)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.005567586 ETH

deployed erc1155 at 0xc4058A0387691e012CCdB01881292026D223b8Bc

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xc579f135d12e67b7b22b6c0fdc0b979b683e4d7289bb8cadd216e90b078dfbd4
> Blocks: 2 Seconds: 4
> contract address: 0x543D22660b12D94FCd5E9d346dFEc34603b0e1e1
> block number: 15297124
> block timestamp: 1644987268
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.7390352
> gas used: 351792 (0x55e30)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.002110752 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xe3a305889635afc1671665daa1d9523847e03a1801ed1c1d678f095802cfa17c
> Blocks: 3 Seconds: 8
> contract address: 0x286A64ADb32e3F7b2367e7ec433D6c7855d3CBb0
> block number: 15297129
> block timestamp: 1644987283
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.736924376
> gas used: 351804 (0x55e3c)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.002110824 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.015449682 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xbaaefe9e67b1b792ed4325c996c2eddd0ad0fafab21c11a208058516d319deac
> Blocks: 1 Seconds: 4
> contract address: 0x7C925011b1EEDDE8BF97d97238FbDBe6C021d0b6
> block number: 15297137
> block timestamp: 1644987307
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.713396282
> gas used: 3894094 (0x3b6b4e)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.023364564 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x656c3af90b91539de6f2a2ea9736cd39f4283646a594d2275efb1743ecadf2bb
> Blocks: 1 Seconds: 4
> contract address: 0x382e12da36eEAf6616E90B5fDB706a77e10A9061
> block number: 15297141
> block timestamp: 1644987319
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.70861436
> gas used: 796987 (0xc293b)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.004781922 ETH

deployed exchangeV2 at 0x382e12da36eEAf6616E90B5fDB706a77e10A9061

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.028146486 ETH

# 8_add_operator_proxies.js

Error: Too Many Requests
at module.exports (/Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/migrations/8_add_operator_proxies.js:22:20)
at runNextTicks (node:internal/process/task_queues:61:5)
at listOnTimeout (node:internal/timers:526:9)
at processTimers (node:internal/timers:500:7)
at Migration.\_deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:75:1)
at Migration.\_load (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:56:1)
at Migration.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
at Object.runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
at Object.runFrom (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
at runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
at Command.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)
Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79651036 (0x4bf60dc)

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 9_deploy_legacy.js

{
communityWallet: '0x537B5E0D5e370C2Ce23a16280dF4f106A2Cfc4fA',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02
new impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02

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
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53
})()
^
Error: PollingBlockTracker - encountered an error while attempting to update latest block:
Error: Too Many Requests
at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:51:23
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
at PollingBlockTracker.\_performSync (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/eth-block-tracker/src/polling.js:51:24)
at processTicksAndRejections (node:internal/process/task_queues:96:5)
UnhandledRejections detected
Promise {
<rejected> {
code: -32603,
message: 'Too Many Requests',
data: { originalError: {} },
stack: 'Error: Too Many Requests\n' +
' at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:51:23\n' +
' at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)\n' +
' at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)\n' +
' at Request.emit (node:events:390:28)\n' +
' at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)\n' +
' at Request.emit (node:events:390:28)\n' +
' at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)\n' +
' at Object.onceWrapper (node:events:509:28)\n' +
' at IncomingMessage.emit (node:events:402:35)\n' +
' at endReadableNT (node:internal/streams/readable:1343:12)\n' +
' at processTicksAndRejections (node:internal/process/task_queues:83:21)'
}
} {
code: -32603,
message: 'Too Many Requests',
data: { originalError: {} },
stack: 'Error: Too Many Requests\n' +
' at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:51:23\n' +
' at Request.\_callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:53:11)\n' +
' at Request.self.callback (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:185:22)\n' +
' at Request.emit (node:events:390:28)\n' +
' at Request.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1154:10)\n' +
' at Request.emit (node:events:390:28)\n' +
' at IncomingMessage.<anonymous> (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/request/request.js:1076:12)\n' +
' at Object.onceWrapper (node:events:509:28)\n' +
' at IncomingMessage.emit (node:events:402:35)\n' +
' at endReadableNT (node:internal/streams/readable:1343:12)\n' +
' at processTicksAndRejections (node:internal/process/task_queues:83:21)'
}
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79828371 (0x4c21593)

# 10_update_tokens.js

old impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02
new impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02
old impl 1155 = 0xd70DD387C47e1FeA7E750baAF3194cc5117Ba283
new impl 1155 = 0xd70DD387C47e1FeA7E750baAF3194cc5117Ba283

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

> transaction hash: 0x28a4cc13b74dec3164b98c9ca62785cade586552a8c5281133bbdb51d3cc45eb
> Blocks: 1 Seconds: 4
> contract address: 0x52DC13dd22237D9Af0F8352626f401c835f788D4
> block number: 15297259
> block timestamp: 1644987673
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.681311672
> gas used: 3814925 (0x3a360d)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.02288955 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4f59cc52b8de0a93de6e4fed5f96a035bb0bbeab65bff6d5e1d990b8701cfeb8
> Blocks: 1 Seconds: 4
> contract address: 0x5D52AD544B39249283C7faC0D060FeaEBB585Ee7
> block number: 15297263
> block timestamp: 1644987685
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.675766874
> gas used: 924133 (0xe19e5)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.005544798 ETH

deployed erc721 minimal at 0x5D52AD544B39249283C7faC0D060FeaEBB585Ee7

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0xe06bc9ffe6f84471ba83df607712995a1a3606007fd466e5703cc48296f50b25
> Blocks: 2 Seconds: 8
> contract address: 0xbA313FA7C654F39912E7214419D581E42Fb82A78
> block number: 15297267
> block timestamp: 1644987697
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.67365605
> gas used: 351804 (0x55e3c)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.002110824 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0xddab129a23941eaee8d9fa92511bb33a77145cb254bf39299ab29531712afed9
> Blocks: 2 Seconds: 8
> contract address: 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58
> block number: 15297271
> block timestamp: 1644987709
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.665757368
> gas used: 1316447 (0x14165f)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.007898682 ETH

deployed factory721 minimal at 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.038443854 ETH

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
➜ deploy git:(deploy/binance) ✗ npm run truffle -- deploy --network binance

> @rarible/deploy@0.0.2 truffle
> truffle "deploy" "--network" "binance"

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457

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

> Network name: 'binance'
> Network id: 56
> Block gas limit: 79794466 (0x4c19122)

# 13_update_ERC721.js

old impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02
new impl 721 = 0x0e97C58aDb50f50D97336B3240833D2AEBEABe02

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

old impl 1155 = 0xd70DD387C47e1FeA7E750baAF3194cc5117Ba283
new impl 1155 = 0xd70DD387C47e1FeA7E750baAF3194cc5117Ba283

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x0070f09c83dcfc34982f11c646239dc04acf31ee50b0ec5b729928531c3dca76
> Blocks: 1 Seconds: 4
> contract address: 0x42741cECf928c5Daae0116B3745d0418C7a178E7
> block number: 15297313
> block timestamp: 1644987835
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.656357606
> gas used: 1316447 (0x14165f)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.007898682 ETH

deployed factory1155 at 0x42741cECf928c5Daae0116B3745d0418C7a178E7

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.007898682 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x4857b9138c6a30f9497a50d2a5d1d6710dc2c97980a04965739b412999901963
> Blocks: 1 Seconds: 4
> contract address: 0x8c36c36d327804d7d336B2f00c519a49f2AED9c7
> block number: 15297319
> block timestamp: 1644987853
> account: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> balance: 0.65454317
> gas used: 275151 (0x432cf)
> gas price: 6 gwei
> value sent: 0 ETH
> total cost: 0.001650906 ETH

asset matcher for collections deployed at 0x8c36c36d327804d7d336B2f00c519a49f2AED9c7

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.001650906 ETH

# Summary

> Total deployments: 2
> Final cost: 0.009549588 ETH

➜ deploy git:(deploy/binance) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network XXX --name "Weentar NFT" --symbol "WNTR-NFT" --baseURI ipfs:/

> @rarible/deploy@0.0.2 truffle
> truffle "exec" "./scripts/deploy-erc721.js" "--network" "XXX" "--name" "Weentar NFT" "--symbol" "WNTR-NFT" "--baseURI" "ipfs:/"

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> unable to load etherscan key from config
> Unknown network "XXX". See your Truffle configuration file for available networks.
> Truffle v5.4.22 (core: 5.4.22)
> Node v16.13.0
> ➜ deploy git:(deploy/binance) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network binance --name "Weentar NFT" --symbol "WNTR-NFT" --baseURI ipfs:/

> @rarible/deploy@0.0.2 truffle
> truffle "exec" "./scripts/deploy-erc721.js" "--network" "binance" "--name" "Weentar NFT" "--symbol" "WNTR-NFT" "--baseURI" "ipfs:/"

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> unable to load etherscan key from config
> creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> Using network 'binance'.

name: Weentar NFT
symbol: WNTR-NFT
baseURI: ipfs:/
using factory at 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58
salt 0x0b2a89fad322bf2ad379948952077a21925b2e2fe9cdc869f58f3775f2242c2b
Confirm info? type yes to confirm: ^C%
➜ deploy git:(deploy/binance) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network binance --name "Weentar NFT" --symbol "WNTR-NFT" --baseURI ipfs:/

> @rarible/deploy@0.0.2 truffle
> truffle "exec" "./scripts/deploy-erc721.js" "--network" "binance" "--name" "Weentar NFT" "--symbol" "WNTR-NFT" "--baseURI" "ipfs:/"

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> unable to load etherscan key from config
> creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> Using network 'binance'.

name: Weentar NFT
symbol: WNTR-NFT
baseURI: ipfs:/
using factory at 0x42153B8d08Bc01A4e70C6F1F8BE8053040751A58
salt 0xfa0c59d5b20695d54434b82a99b8301bc56b1f5e06dd168d32c5275746a1e632
Confirm info? type yes to confirm: yes
deploying...
tx: 0x7b5cd1e2acb7cca095040dd802a6876ebcb5d5e3512802337d8f07597dc3bdcd
token deployed at: 0x1d0703C3bD032562e5da5D2Abe721F146c7396E1

➜ deploy git:(deploy/binance) ✗ npm run truffle -- exec ./scripts/deploy-erc1155.js --network binance --name "Weentar NFTs" --symbol "WNTR-NFTS" --baseURI ipfs:/

> @rarible/deploy@0.0.2 truffle
> truffle "exec" "./scripts/deploy-erc1155.js" "--network" "binance" "--name" "Weentar NFTs" "--symbol" "WNTR-NFTS" "--baseURI" "ipfs:/"

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> unable to load etherscan key from config
> creating provider for address: 0xC02b01eeB9a05ecB73f0cde0FB4a287c2aF7d457
> Using network 'binance'.

name: Weentar NFTs
symbol: WNTR-NFTS
baseURI: ipfs:/
using factory at 0x42741cECf928c5Daae0116B3745d0418C7a178E7
salt 0xd61a2647a2ac67439c191c14c4b55c0ddc4ab2c2d47a4160e6bee4b9dce08a5b
Confirm info? type yes to confirm: yes
deploying...
tx: 0x26264b972f59027ccef145850144331b3a20f3a350531553e5cdb81a1e3baf86
token deployed at: 0x3537bD14254a04b0f940C976B4DD481Ff91251b5
