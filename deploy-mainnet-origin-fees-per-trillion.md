➜ deploy git:(feature/increase-fees-precision-2) ✗ npm run truffle -- migrate --network mainnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network mainnet

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9

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
> Compiling @rarible/exchange-v2/contracts/lib/PerTrillionLibrary.sol
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
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:146:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:149:14: Warning: Unused local variable.
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

> Network name: 'mainnet'
> Network id: 1
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x77f642d9c3c05fa07ae028684ac90070c45a32b7b11f5dcd4cf447baf6bfae4e
> Blocks: 2 Seconds: 20
> contract address: 0x214ec25d3Fb5A548260e22F866D25c8A56168466
> block number: 16581672
> block timestamp: 1675830467
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.322962898210203306
> gas used: 155006 (0x25d7e)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.00465018 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00465018 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0xd0426a08f3803b7014769c85e580be5a12b9b5f4d3cb045b2f2fc275155b1469
> Blocks: 1 Seconds: 9
> contract address: 0x9B9E24109CcA374A21F98Fbe00b84418b00770D2
> block number: 16581674
> block timestamp: 1675830491
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.274421938210203306
> gas used: 1572377 (0x17fe19)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.04717131 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0xbfb4bc9ab3692aad15b98563a5729b5768b94987b6c2e85d9117f97d8c32e857
> Blocks: 1 Seconds: 4
> contract address: 0xB1f1141122c45ec64B63d086514Eeb1Fd18eE248
> block number: 16581675
> block timestamp: 1675830503
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.259901338210203306
> gas used: 484020 (0x762b4)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.0145206 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xcdddb58b1398a17ca9d524ddd6c79f5d937388edba12f2078ea1b202ef4da9a5
> Blocks: 0 Seconds: 4
> contract address: 0x7Ab155f4C379F42A1964A9AF9BC9909ce182a7C6
> block number: 16581676
> block timestamp: 1675830515
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.240635248210203306
> gas used: 642203 (0x9cc9b)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01926609 ETH

deployed royaltiesRegistry at 0x7Ab155f4C379F42A1964A9AF9BC9909ce182a7C6

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.080958 ETH

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

> transaction hash: 0x4ed56a0c90dff84cb4eae81f8ead2ea137747191393095fed1a9cf13e0f1ca17
> Blocks: 1 Seconds: 8
> contract address: 0xD2558cd08B92b7D4813900F5169A7A8676797d21
> block number: 16581680
> block timestamp: 1675830563
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.218597488210203306
> gas used: 648927 (0x9e6df)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01946781 ETH

deployed transferProxy at 0xD2558cd08B92b7D4813900F5169A7A8676797d21

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xcf38fcf2ad6c0cf7adac239cdfb43230caecfecd615022bea3ba679d8b276f31
> Blocks: 1 Seconds: 8
> contract address: 0x9b193FD3ed2F55CB9c0f8BbD3E6924E93dEf5d83
> block number: 16581682
> block timestamp: 1675830587
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.199426468210203306
> gas used: 570395 (0x8b41b)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01711185 ETH

deployed erc20TransferProxy at 0x9b193FD3ed2F55CB9c0f8BbD3E6924E93dEf5d83

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x99f621eb42313719d8c073942db29dbe4859763afc1770285378346e8ec9f812
> Blocks: 1 Seconds: 8
> contract address: 0x79f06F9d2d8dDf8F7fFa82D0bcfC3219cEFb6a0c
> block number: 16581684
> block timestamp: 1675830611
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.171897028210203306
> gas used: 849009 (0xcf471)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02547027 ETH

deployed erc721LazyProxy at 0x79f06F9d2d8dDf8F7fFa82D0bcfC3219cEFb6a0c

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x8c1ffcaca751841cda004a4ae67bd95981ccf377a4be5406d6aabef9ff8ce29d
> Blocks: 0 Seconds: 8
> contract address: 0x3Aa7Cf9CB5778c51CB82e62768FE559D9bC09795
> block number: 16581686
> block timestamp: 1675830635
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.144724468210203306
> gas used: 837104 (0xcc5f0)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02511312 ETH

deployed erc1155LazyProxy at 0x3Aa7Cf9CB5778c51CB82e62768FE559D9bC09795

⠦ Saving migration to chain.
insufficient funds for gas \* price + value
Truffle v5.4.22 (core: 5.4.22)
Node v16.19.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜ deploy git:(feature/increase-fees-precision-2) ✗ npm run truffle -- migrate --network mainnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network mainnet

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
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:146:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:149:14: Warning: Unused local variable.
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

> Network name: 'mainnet'
> Network id: 1
> Block gas limit: 30000000 (0x1c9c380)

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0x5a1b973141fde1cebc09f8d8ce60f36d20163c40342f0527197c65c3d7d30f9b
> Blocks: 1 Seconds: 21
> contract address: 0x41037a6865A9C12b9D4A193EBd052224e9831773
> block number: 16581740
> block timestamp: 1675831283
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.714135088210203306
> gas used: 648927 (0x9e6df)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01946781 ETH

deployed transferProxy at 0x41037a6865A9C12b9D4A193EBd052224e9831773

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x399f73ff26132bfc5e63a7c66649535706d7de2d76f6b6ddb99d4d2fcee551da
> Blocks: 0 Seconds: 4
> contract address: 0x474A804964F15Da06154581b863Bc30E19069142
> block number: 16581742
> block timestamp: 1675831307
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.694964068210203306
> gas used: 570395 (0x8b41b)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01711185 ETH

deployed erc20TransferProxy at 0x474A804964F15Da06154581b863Bc30E19069142

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xb8dd7dc34c3ff31f0a0c7962a72a4c6801fe5a93a01d513b042eecded64f210b
> Blocks: 1 Seconds: 9
> contract address: 0x03BdA7A67335480DabaBEaaABD573A882F95bFc3
> block number: 16581744
> block timestamp: 1675831331
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.667434628210203306
> gas used: 849009 (0xcf471)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02547027 ETH

deployed erc721LazyProxy at 0x03BdA7A67335480DabaBEaaABD573A882F95bFc3

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x51bc4fdb37588923ff1351745e4ac36a11fbd02b79ec7cdf60d84bbb78c7c4f4
> Blocks: 1 Seconds: 8
> contract address: 0x9e02ddC3E980d6eBcE7dbFdAD66032e8Fd694B7B
> block number: 16581746
> block timestamp: 1675831355
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.640262068210203306
> gas used: 837104 (0xcc5f0)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02511312 ETH

deployed erc1155LazyProxy at 0x9e02ddC3E980d6eBcE7dbFdAD66032e8Fd694B7B

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.08716305 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x85f1c7c48525657fd15f328335ac792b22feb47bb9b0424d8c9aef11eae756a4
> Blocks: 1 Seconds: 4
> contract address: 0xD46cDe4F84f08dc369c945e3482ac907ad6061D2
> block number: 16581749
> block timestamp: 1675831391
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.516976198210203306
> gas used: 4012326 (0x3d3926)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.12036978 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x20a774f6260aa38de3738bc4d1a5225106c1c306d53b4e883b232f00414c62a8
> Blocks: 0 Seconds: 4
> contract address: 0xf965E2781FDA7C5dCdc1Cbe30a602Fbc9D9e4cc6
> block number: 16581750
> block timestamp: 1675831403
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.488466598210203306
> gas used: 950320 (0xe8030)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.0285096 ETH

deployed erc721 at 0xf965E2781FDA7C5dCdc1Cbe30a602Fbc9D9e4cc6

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xe53fd48aa3df43c970751e6be0f329da52f024a26f59d8e8a0762b652ba746ad
> Blocks: 0 Seconds: 4
> contract address: 0xf35922b57e452cB6014ecAdE152C26dec98e4e56
> block number: 16581751
> block timestamp: 1675831415
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.350966188210203306
> gas used: 4583347 (0x45efb3)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.13750041 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xfed38bd045e848ba9052a77e5913c7b762bd53da223aad26d33d83ede4a876b7
> Blocks: 0 Seconds: 4
> contract address: 0x2cCDFC84E3Aaae63d5bc1584381596F452eA5872
> block number: 16581752
> block timestamp: 1675831427
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.322966258210203306
> gas used: 933331 (0xe3dd3)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02799993 ETH

deployed erc1155 at 0x2cCDFC84E3Aaae63d5bc1584381596F452eA5872

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x26bee311255842fa4b6883e4076fd8f29d9a5306bd81462b188018bcbb40e979
> Blocks: 0 Seconds: 4
> contract address: 0xC79f925ACe23ec79b64a41dd994a9e784175F612
> block number: 16581753
> block timestamp: 1675831439
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.312277498210203306
> gas used: 356292 (0x56fc4)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01068876 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xa1e5f803af2fcbc369ffe591ffd46c85651dcb7a0cb97a8724ef08dca6d10137
> Blocks: 0 Seconds: 4
> contract address: 0x17682E941cA6bcD654b5137E130e84171933a3FB
> block number: 16581754
> block timestamp: 1675831451
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.301588378210203306
> gas used: 356304 (0x56fd0)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.01068912 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.3357576 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xfe6456f45388fde79ce60c8ae4f4e34bfdc8ff285356442ca0f795afc0aba758
> Blocks: 1 Seconds: 8
> contract address: 0x3ec37AC9808B71A4EEEf1664a5E9D162d60038f5
> block number: 16581758
> block timestamp: 1675831499
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.182918038210203306
> gas used: 3927123 (0x3bec53)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.11781369 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xc4eed8fed2c68f21e92f918ff54ee8da1e2e6397c9c64ee72db7dc925d737ceb
> Blocks: 4 Seconds: 40
> contract address: 0x8b620105aA73B9951889f46ca280Af7c781c1b29
> block number: 16581762
> block timestamp: 1675831547
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.158801788210203306
> gas used: 803875 (0xc4423)
> gas price: 30 gwei
> value sent: 0 ETH
> total cost: 0.02411625 ETH

deployed exchangeV2 at 0x8b620105aA73B9951889f46ca280Af7c781c1b29

⠦ Saving migration to chain.
insufficient funds for gas \* price + value
Truffle v5.4.22 (core: 5.4.22)
Node v16.19.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜ deploy git:(feature/increase-fees-precision-2) ✗ npm run truffle -- migrate --network mainnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network mainnet

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
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:146:14: Warning: Unused local variable.
(address token, LibERC1155LazyMint.Mint1155Data memory data) = abi.decode(matchNft.data, (address, LibERC1155LazyMint.Mint1155Data));
^-----------^
,@rarible/exchange-v2/contracts/RaribleTransferManager.sol:149:14: Warning: Unused local variable.
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

> Network name: 'mainnet'
> Network id: 1
> Block gas limit: 30000000 (0x1c9c380)

# 7_initial_ExchangeV2.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xaf663fc3150d0e7dbc08987bb5f4b48b0ead6a4cce1bca719a43a33543fa5ad7
> Blocks: 3 Seconds: 28
> contract address: 0xAd011487E5ac744b788d6bB27A6d01c6d42db4A6
> block number: 16581828
> block timestamp: 1675832351
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.729019218210203306
> gas used: 803875 (0xc4423)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.02090075 ETH

deployed exchangeV2 at 0xAd011487E5ac744b788d6bB27A6d01c6d42db4A6

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.02090075 ETH

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

old impl 721 = 0xD46cDe4F84f08dc369c945e3482ac907ad6061D2
new impl 721 = 0xD46cDe4F84f08dc369c945e3482ac907ad6061D2
old impl 1155 = 0xf35922b57e452cB6014ecAdE152C26dec98e4e56
new impl 1155 = 0xf35922b57e452cB6014ecAdE152C26dec98e4e56

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

> transaction hash: 0x771eb75dee26db754b624b99b57df40fca6ab91fd1b23e0f97501ca1883f23a1
> Blocks: 0 Seconds: 4
> contract address: 0xB38e59c7971De907cb431532Ad2291C010DF35D8
> block number: 16581845
> block timestamp: 1675832555
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.614076754210203306
> gas used: 3814925 (0x3a360d)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.09918805 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x3b05a907f678dd78b63d3d6f401e90237da070e0d6d79a0d9f89d14c861e74c3
> Blocks: 1 Seconds: 4
> contract address: 0xeFBdD3BbB16Aa79F59802aD8f45D6d5819b558f3
> block number: 16581846
> block timestamp: 1675832567
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.589888096210203306
> gas used: 930333 (0xe321d)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.024188658 ETH

deployed erc721 minimal at 0xeFBdD3BbB16Aa79F59802aD8f45D6d5819b558f3

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x84ddf53648a8abbfee7bbab4f6c53c4cead042b1ab12b5840fcc8faded8d8ab6
> Blocks: 0 Seconds: 4
> contract address: 0x42aCC185E48e77bEe56D8D02c12c72b169E2Fd97
> block number: 16581847
> block timestamp: 1675832579
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.580624192210203306
> gas used: 356304 (0x56fd0)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.009263904 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x5e58875c1a89f452b89ee100d2a2f2bd94cceb6fd9dd2d31b487dea40ed6c8be
> Blocks: 1 Seconds: 8
> contract address: 0x7e649Af204BF705F315bA2eE41D27C56bAdb0dE6
> block number: 16581848
> block timestamp: 1675832591
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.546261370210203306
> gas used: 1321647 (0x142aaf)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.034362822 ETH

deployed factory721 minimal at 0x7e649Af204BF705F315bA2eE41D27C56bAdb0dE6

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.167003434 ETH

# 13_update_ERC721.js

old impl 721 = 0xD46cDe4F84f08dc369c945e3482ac907ad6061D2
new impl 721 = 0xD46cDe4F84f08dc369c945e3482ac907ad6061D2

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

old impl 1155 = 0xf35922b57e452cB6014ecAdE152C26dec98e4e56
new impl 1155 = 0xf35922b57e452cB6014ecAdE152C26dec98e4e56

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0xcf1981b01ecbfb83a9e523d318e0b8619a56e65f41fe7c101e531eed22d5f744
> Blocks: 1 Seconds: 8
> contract address: 0xd307395DEBE7b71D42A6256ebf1A428B7611417E
> block number: 16581858
> block timestamp: 1675832711
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.504562180210203306
> gas used: 1321647 (0x142aaf)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.034362822 ETH

deployed factory1155 at 0xd307395DEBE7b71D42A6256ebf1A428B7611417E

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.034362822 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x6290f57ebb174a01a464cbf20abb2a8b08e65b7eb8f781672c50a8686ecccda3
> Blocks: 1 Seconds: 8
> contract address: 0xc465398ce3A607831b15355b1b2448F25Ab8b558
> block number: 16581860
> block timestamp: 1675832735
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.496665824210203306
> gas used: 275151 (0x432cf)
> gas price: 26 gwei
> value sent: 0 ETH
> total cost: 0.007153926 ETH

asset matcher for collections deployed at 0xc465398ce3A607831b15355b1b2448F25Ab8b558

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.007153926 ETH

# Summary

> Total deployments: 7
> Final cost: 0.229420932 ETH

➜ deploy git:(feature/increase-fees-precision-2) ✗
