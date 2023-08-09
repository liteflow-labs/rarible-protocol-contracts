➜ deploy git:(master) ✗ npm run truffle -- migrate --network lightlink_phoenix

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network lightlink_phoenix

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883

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

> Network name: 'lightlink_phoenix'
> Network id: 1890
> Block gas limit: 15000000 (0xe4e1c0)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x47ae5ade06a8f305c93abc516400f28cd63d468afc254617569f46337fc15b03
> Blocks: 0 Seconds: 0
> contract address: 0xf35a498B5c90A138c8ef8E45995f57A5D8501281
> block number: 33276928
> block timestamp: 1691485945
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.087652392
> gas used: 155034 (0x25d9a)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000155034 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000155034 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x1abd6670d9dacbf746e66b3ecac0fd5c2c0796e80c7472c1f6ac6ae74ba7ef57
> Blocks: 0 Seconds: 0
> contract address: 0x0c8abE852E0e724FC4fF2EBC92Ce1C93DdA40c51
> block number: 33276939
> block timestamp: 1691485950
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.086033918
> gas used: 1572819 (0x17ffd3)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001572819 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x0702a5c951734b765ecb4b1a8a9d32e26414ab8a792cd26b5782941a000ebfb1
> Blocks: 0 Seconds: 0
> contract address: 0xaA21b9C0d5F61ffdB22DCebDaD966d8907c1dEdF
> block number: 33276946
> block timestamp: 1691485954
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.085549774
> gas used: 484144 (0x76330)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000484144 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xe68cefcda38708a309af9d29fdfb8c4b5f747661c864cb95564766864694ad1a
> Blocks: 0 Seconds: 0
> contract address: 0xf14b45E1Af118d6f050373036C90713Ff4347e4e
> block number: 33276953
> block timestamp: 1691485957
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.084907305
> gas used: 642469 (0x9cda5)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000642469 ETH

deployed royaltiesRegistry at 0xf14b45E1Af118d6f050373036C90713Ff4347e4e

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.002699432 ETH

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

> transaction hash: 0x789cef3707d8883d2c9613b70c354c461af599c77208039df4d4d2e31b37ed66
> Blocks: 0 Seconds: 0
> contract address: 0x5CBd5F5d9eBfe87b17916910243bDf0d94dEF16F
> block number: 33276972
> block timestamp: 1691485967
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.084172537
> gas used: 649103 (0x9e78f)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000649103 ETH

deployed transferProxy at 0x5CBd5F5d9eBfe87b17916910243bDf0d94dEF16F

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x11607a7e3fd09e36104d6bf8cc1c29627b30bb9c736803cfc741777740ac69ae
> Blocks: 0 Seconds: 0
> contract address: 0x3423dc4a9b1a14a32b2a0D979393650Cc1645011
> block number: 33276981
> block timestamp: 1691485971
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.083533351
> gas used: 570547 (0x8b4b3)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000570547 ETH

deployed erc20TransferProxy at 0x3423dc4a9b1a14a32b2a0D979393650Cc1645011

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x585dffaa134db6d3a35985c454ef2a815097a8f81f0245a3c96f69a83edf414e
> Blocks: 0 Seconds: 0
> contract address: 0x7Ccac8343B6A9d39704a3ED3817998b837ef7b16
> block number: 33276991
> block timestamp: 1691485976
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.082615469
> gas used: 849243 (0xcf55b)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000849243 ETH

deployed erc721LazyProxy at 0x7Ccac8343B6A9d39704a3ED3817998b837ef7b16

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x286ee1cd42863ec385464112d13035a63ee7e8cf617ffce1dfce1192480e63a0
> Blocks: 0 Seconds: 0
> contract address: 0x35556b54C54Cb843e4bcC3D811BBa16b67e7685C
> block number: 33277000
> block timestamp: 1691485981
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.081709487
> gas used: 837334 (0xcc6d6)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000837334 ETH

deployed erc1155LazyProxy at 0x35556b54C54Cb843e4bcC3D811BBa16b67e7685C

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.002906227 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x0dbeea645d6962dec13f9eefae15bcc0263613706a44ff21ac0c453a10c12583
> Blocks: 0 Seconds: 0
> contract address: 0xD2888E3d12Fafb15581AdEaB05817b1d0A6a7040
> block number: 33277016
> block timestamp: 1691485989
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.07759881
> gas used: 4013474 (0x3d3da2)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.004013474 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x0875b2e901f7a2ebe9fdc969f4daf3b8f48f5fc88ec97376851747f8627ca28a
> Blocks: 0 Seconds: 0
> contract address: 0x65bd75131A7196276BfeD958c8Ba4DF1ace281df
> block number: 33277023
> block timestamp: 1691485993
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.07664821
> gas used: 950600 (0xe8148)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.0009506 ETH

deployed erc721 at 0x65bd75131A7196276BfeD958c8Ba4DF1ace281df

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xab98d965d33e18067516632cf1e82e0f2100126b9c39cb6c55b10ce7042770e7
> Blocks: 0 Seconds: 0
> contract address: 0x0471D68025808091F83924338B9135e6C48907BB
> block number: 33277030
> block timestamp: 1691485996
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.072063549
> gas used: 4584661 (0x45f4d5)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.004584661 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb3513447cba0495883ca87d8eda111cc152baf53e52fbab1aacdf816faf4bc99
> Blocks: 0 Seconds: 0
> contract address: 0x995A71D0F301caf13eCf0207e5E0E1cb8D83928e
> block number: 33277037
> block timestamp: 1691486000
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.071129938
> gas used: 933611 (0xe3eeb)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000933611 ETH

deployed erc1155 at 0x995A71D0F301caf13eCf0207e5E0E1cb8D83928e

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x87cd4714f3bb14a5150a80366d6c920f2bc5ecd2b27cec612a6192a7f0d6bf4c
> Blocks: 0 Seconds: 0
> contract address: 0xF4920810DCA1C3e6601A9C48209639226eb1eF5d
> block number: 33277044
> block timestamp: 1691486003
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.07077355
> gas used: 356388 (0x57024)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000356388 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x14dc8185ff8c0a5279cc04a3a00edc32363099f8fab4588d76b751b3326cf13c
> Blocks: 0 Seconds: 0
> contract address: 0xf92AB8cff3a887550A0Bb947c792819F8A6f34D0
> block number: 33277050
> block timestamp: 1691486006
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.07041715
> gas used: 356400 (0x57030)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.0003564 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.011195134 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x382d7793a04a903adae5d86a62957eabbcaf84f4c926ea9d2731eb266dff7486
> Blocks: 0 Seconds: 0
> contract address: 0x4bFC95EBceed02640632C24287Be35d2549EE540
> block number: 33277063
> block timestamp: 1691486013
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.066493387
> gas used: 3895208 (0x3b6fa8)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.003895208 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb0584b242a96dbfb6490d108a99521d83c6acab68c04d67fac213bf52b045842
> Blocks: 0 Seconds: 0
> contract address: 0x15f22B4b1633205C4E1517356c5DbC876975edC3
> block number: 33277070
> block timestamp: 1691486016
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.065689236
> gas used: 804151 (0xc4537)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000804151 ETH

deployed exchangeV2 at 0x15f22B4b1633205C4E1517356c5DbC876975edC3

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.004699359 ETH

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

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

old impl 721 = 0xD2888E3d12Fafb15581AdEaB05817b1d0A6a7040
new impl 721 = 0xD2888E3d12Fafb15581AdEaB05817b1d0A6a7040
old impl 1155 = 0x0471D68025808091F83924338B9135e6C48907BB
new impl 1155 = 0x0471D68025808091F83924338B9135e6C48907BB

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

> transaction hash: 0xae5a0ce082e4c160fdce38d1688c48f115804df585c071f7a9a5ec66e50b6047
> Blocks: 0 Seconds: 0
> contract address: 0x90236954D827073167460A80b475d44Eae54563c
> block number: 33277153
> block timestamp: 1691486058
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.061267268
> gas used: 3816017 (0x3a3a51)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.003816017 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x0865ebb73c19f17725c61aa29b1f555a475837b48808da72be4c0feaeb1f4440
> Blocks: 0 Seconds: 0
> contract address: 0x4d8327761751d9c8d72f4c76225901D159638100
> block number: 33277160
> block timestamp: 1691486061
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.060336655
> gas used: 930613 (0xe3335)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000930613 ETH

deployed erc721 minimal at 0x4d8327761751d9c8d72f4c76225901D159638100

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x437f0d742cf5be71d1736c1147dc439100b675f95bb3bafc12f8c3454c7078d3
> Blocks: 0 Seconds: 0
> contract address: 0x8c6aF6cDB85c8bd413177B315Aeb29E6f8700dFc
> block number: 33277168
> block timestamp: 1691486065
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.059980255
> gas used: 356400 (0x57030)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.0003564 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x1d7593193f44ee73379f6462e54f55f817d0422183d19e274569699618cafb8d
> Blocks: 0 Seconds: 0
> contract address: 0x578623986a7C853330E4e223a34C28045d26D903
> block number: 33277174
> block timestamp: 1691486068
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.058658242
> gas used: 1322013 (0x142c1d)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001322013 ETH

deployed factory721 minimal at 0x578623986a7C853330E4e223a34C28045d26D903

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.006425043 ETH

# 13_update_ERC721.js

old impl 721 = 0xD2888E3d12Fafb15581AdEaB05817b1d0A6a7040
new impl 721 = 0xD2888E3d12Fafb15581AdEaB05817b1d0A6a7040

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

old impl 1155 = 0x0471D68025808091F83924338B9135e6C48907BB
new impl 1155 = 0x0471D68025808091F83924338B9135e6C48907BB

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0xbbee3ec48fa42e563c0ee8f74b1e56cc60bb53a91da00397d53dac8e2ef191bf
> Blocks: 0 Seconds: 0
> contract address: 0x528db40d057D9c5aD2D0e631E811Ab7c8d28Bc19
> block number: 33277227
> block timestamp: 1691486095
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.057054049
> gas used: 1322013 (0x142c1d)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001322013 ETH

deployed factory1155 at 0x528db40d057D9c5aD2D0e631E811Ab7c8d28Bc19

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.001322013 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xd59f68d728cd589f91cf6ce051c117256ca30506df752e2cb9d6312528797a55
> Blocks: 0 Seconds: 0
> contract address: 0xB09f6d5e5d51E5c2b7c873DC83d9FD52797fF1cf
> block number: 33277237
> block timestamp: 1691486100
> account: 0xb561FD7bC7Fa07f87921986Ed5510d722bb52883
> balance: 0.056750275
> gas used: 275219 (0x43313)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000275219 ETH

asset matcher for collections deployed at 0xB09f6d5e5d51E5c2b7c873DC83d9FD52797fF1cf

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000275219 ETH

# Summary

> Total deployments: 22
> Final cost: 0.029677461 ETH
