➜ deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network polygon

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x4FD791220e007415f016d931735cA655DA9759eF

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

> Network name: 'polygon'
> Network id: 137
> Block gas limit: 26864289 (0x199eaa1)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x67b427261c02046fac4ee00123d36141ae5272a62e7b2ad10a81e3b94f9cea30
> Blocks: 2 Seconds: 4
> contract address: 0xF2530Ded38678c3A67F559Eb07c9BA2596811810
> block number: 35464693
> block timestamp: 1668141036
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.76750627
> gas used: 155006 (0x25d7e)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.01085042 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01085042 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x913476a84b186f92d1674d9e818736e9c7abeb2f041e691cb979322eb1e924e2
> Blocks: 2 Seconds: 4
> contract address: 0x9694d5F4127F112B265594D37a23b175Bdb1B5E9
> block number: 35464703
> block timestamp: 1668141056
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.65424403
> gas used: 1572377 (0x17fe19)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.11006639 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0xdcccfe7f40e2abf4498f07ae2cee0119f6843160c542e48e586708db9ac6f4fa
> Blocks: 2 Seconds: 4
> contract address: 0xF40E00cE1B548685936B9e5500321046649E6f4C
> block number: 35464706
> block timestamp: 1668141066
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.62036263
> gas used: 484020 (0x762b4)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.0338814 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xa4159cf6cba9f084b82beb7279e32a6ed2a79e676899d9f14363ef478856a4cd
> Blocks: 2 Seconds: 4
> contract address: 0xfd0AC51E96Ac71279d74C2068370E30FF747990b
> block number: 35464711
> block timestamp: 1668141076
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.57540926
> gas used: 642191 (0x9cc8f)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.04495337 ETH

deployed royaltiesRegistry at 0xfd0AC51E96Ac71279d74C2068370E30FF747990b

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.18890116 ETH

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

> transaction hash: 0x57f3d8510c667a3812d2d5f1710f36947ea99ee9cfbef921e6b3d97a3c1c71ad
> Blocks: 2 Seconds: 4
> contract address: 0x509400d860b9D027fE22Fa95C86Ea94977eb8Edc
> block number: 35464725
> block timestamp: 1668141104
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.52398782
> gas used: 648927 (0x9e6df)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.04542489 ETH

deployed transferProxy at 0x509400d860b9D027fE22Fa95C86Ea94977eb8Edc

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xd12aff8124159a08fd0b812709b7fe7d4c84c808e1079d21c7d01a7cdf23ee3b
> Blocks: 3 Seconds: 4
> contract address: 0xc6587178Faa593e7664d9Da38587820e9010d9Bd
> block number: 35464732
> block timestamp: 1668141118
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.47925544
> gas used: 570395 (0x8b41b)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.03992765 ETH

deployed erc20TransferProxy at 0xc6587178Faa593e7664d9Da38587820e9010d9Bd

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xaa5912b336ccb38c78106e932f4a1e26befcf6f69901ac6770ee14bf18aeb322
> Blocks: 3 Seconds: 4
> contract address: 0xb5D35CAfdd6d7c547f69d3EeBd270f744000AF90
> block number: 35464739
> block timestamp: 1668141132
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.41502008
> gas used: 849009 (0xcf471)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.05943063 ETH

deployed erc721LazyProxy at 0xb5D35CAfdd6d7c547f69d3EeBd270f744000AF90

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x91b510bc7adc1e0181b457c0f33c9634abfc78b19cbd2bc7adf6826b624a7472
> Blocks: 2 Seconds: 4
> contract address: 0xB0b04C126ED6DE4C3594761B20d62aE5fdde2d42
> block number: 35464747
> block timestamp: 1668141148
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.35161744
> gas used: 837104 (0xcc5f0)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.05859728 ETH

deployed erc1155LazyProxy at 0xB0b04C126ED6DE4C3594761B20d62aE5fdde2d42

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.20338045 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x13e40d5a7c5f8bbe7235ba959debe0c33e04ec930b66bbe64ad6d258d308b1b7
> Blocks: 3 Seconds: 4
> contract address: 0x8Bec9873AdE4d646590fbaB1863d46F4170Dd47e
> block number: 35464760
> block timestamp: 1668141174
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 475.06395041
> gas used: 4012326 (0x3d3926)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.28086282 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xf5bf363960e28e4a57f89bf73c2734e4547e859c56e927528f8f517fba726b8d
> Blocks: 3 Seconds: 4
> contract address: 0x4e17628eFb1A66Bf56876ada7487Ea7434392733
> block number: 35464766
> block timestamp: 1668141186
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.99743137
> gas used: 950272 (0xe8000)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.06651904 ETH

deployed erc721 at 0x4e17628eFb1A66Bf56876ada7487Ea7434392733

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xe348565b64724c38bcb592f04340a81a17df8a21258c0cb117a450b537741f77
> Blocks: 2 Seconds: 4
> contract address: 0x1Eeca25E1a119F77e19B06bC2e76fEDDF165De2f
> block number: 35464770
> block timestamp: 1668141198
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.67659708
> gas used: 4583347 (0x45efb3)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.32083429 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xe8458baf33522e42d467ef3f3d1eecfbeac02d4ae77b22d12633b7d561ff2a27
> Blocks: 4 Seconds: 8
> contract address: 0x80375F2b342793A438B65E3dAAeBe8BA2f68A5B6
> block number: 35464778
> block timestamp: 1668141214
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.61126643
> gas used: 933295 (0xe3daf)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.06533065 ETH

deployed erc1155 at 0x80375F2b342793A438B65E3dAAeBe8BA2f68A5B6

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x58840d9cd346c370f21b6178ec213074e7bd15bb64bb9c8f74442933d981a91d
> Blocks: 3 Seconds: 4
> contract address: 0xdAF662F9f5736b23D169b56A2B59C6dA8A8d2957
> block number: 35464784
> block timestamp: 1668141226
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.58632599
> gas used: 356292 (0x56fc4)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.02494044 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xe20fab1c7d551e9ca92f098e32e8e189c4faf292bb63d064b8108bb55cddfdec
> Blocks: 2 Seconds: 4
> contract address: 0xB47e026650d4e9B13b884CE3917095F8Fff0Ee8E
> block number: 35464790
> block timestamp: 1668141238
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.56138471
> gas used: 356304 (0x56fd0)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.02494128 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.78342852 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xe0e322c5da04b98139616929a70c85737f7493ec340fddee6db03aae1cb9cb5a
> Blocks: 2 Seconds: 4
> contract address: 0x2A218cA4B59DAbCd8D7671de67Ed59B10856B6cf
> block number: 35464800
> block timestamp: 1668141258
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.28679928
> gas used: 3894094 (0x3b6b4e)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.27258658 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb0a81706302ce19d4bc8143ff5b1d70a23eaf3345e5613c513519e1aadb7dded
> Blocks: 2 Seconds: 5
> contract address: 0x3129C7773bE4688B966e3A863c47ed0B7d25c6d3
> block number: 35464807
> block timestamp: 1668141272
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 474.23053055
> gas used: 803839 (0xc43ff)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.05626873 ETH

deployed exchangeV2 at 0x3129C7773bE4688B966e3A863c47ed0B7d25c6d3

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.32885531 ETH

# 8_add_operator_proxies.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 9_deploy_legacy.js

{
communityWallet: '0x4FD791220e007415f016d931735cA655DA9759eF',
deploy_CryptoPunks: false,
address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

> Saving migration to chain.

---

> Total cost: 0 ETH

# 10_update_tokens.js

old impl 721 = 0x8Bec9873AdE4d646590fbaB1863d46F4170Dd47e
new impl 721 = 0x8Bec9873AdE4d646590fbaB1863d46F4170Dd47e
old impl 1155 = 0x1Eeca25E1a119F77e19B06bC2e76fEDDF165De2f
new impl 1155 = 0x1Eeca25E1a119F77e19B06bC2e76fEDDF165De2f

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

> transaction hash: 0xd961eab2af4fa5bea901ac323ca30ff00d93f847651aa839d87d7cfcb60a73c5
> Blocks: 4 Seconds: 8
> contract address: 0xcf843f9D7E1c3D86F4Df328171dfe68EF6845F82
> block number: 35464875
> block timestamp: 1668141412
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.92107007
> gas used: 3814925 (0x3a360d)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.26704475 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xbcb0740c715c12ad6ed4be8720e5b14bc484ae18ab909d986864f02c69eb4d31
> Blocks: 13 Seconds: 24
> contract address: 0x9782365D8EB0e1B8D2f89e5584b1cfd3a987AaE1
> block number: 35464892
> block timestamp: 1668141446
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.85595012
> gas used: 930285 (0xe31ed)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.06511995 ETH

deployed erc721 minimal at 0x9782365D8EB0e1B8D2f89e5584b1cfd3a987AaE1

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x9f0aafc7d3678841208d9f224250723d2af29c45a905c06347bef3928feacf92
> Blocks: 0 Seconds: 4
> contract address: 0x37F0a39a99979eebf85815F797e218F0cb0f32e9
> block number: 35464896
> block timestamp: 1668141458
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.83100884
> gas used: 356304 (0x56fd0)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.02494128 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x16a04982ef2b26c7791bce7142663f37af841a7b6dc16ac025960e5023061f88
> Blocks: 3 Seconds: 4
> contract address: 0x0eFA5B00E25986cE6b1469eB89FFE24952Eb8C2D
> block number: 35464901
> block timestamp: 1668141468
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.73849523
> gas used: 1321623 (0x142a97)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.09251361 ETH

deployed factory721 minimal at 0x0eFA5B00E25986cE6b1469eB89FFE24952Eb8C2D

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.44961959 ETH

# 13_update_ERC721.js

old impl 721 = 0x8Bec9873AdE4d646590fbaB1863d46F4170Dd47e
new impl 721 = 0x8Bec9873AdE4d646590fbaB1863d46F4170Dd47e

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

old impl 1155 = 0x1Eeca25E1a119F77e19B06bC2e76fEDDF165De2f
new impl 1155 = 0x1Eeca25E1a119F77e19B06bC2e76fEDDF165De2f

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x0d6c6350140f9d21743886e822d3527cb7217892eb499e69012c4c6ae8fc17c2
> Blocks: 3 Seconds: 4
> contract address: 0xf6A72E573E909504F1667cF5aBd548d781A0b8B9
> block number: 35464945
> block timestamp: 1668141556
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.62622818
> gas used: 1321635 (0x142aa3)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.09251445 ETH

deployed factory1155 at 0xf6A72E573E909504F1667cF5aBd548d781A0b8B9

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.09251445 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x6ad027651aa3a4d3cddd0c95bcc5a06a8722b8ba1444aed327a63443d673f51c
> Blocks: 2 Seconds: 4
> contract address: 0x7F0218Ae99455800ef2B37c7156D2D481d7d1E40
> block number: 35464953
> block timestamp: 1668141572
> account: 0x4FD791220e007415f016d931735cA655DA9759eF
> balance: 473.60496876
> gas used: 275151 (0x432cf)
> gas price: 70 gwei
> value sent: 0 ETH
> total cost: 0.01926057 ETH

asset matcher for collections deployed at 0x7F0218Ae99455800ef2B37c7156D2D481d7d1E40

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01926057 ETH

# Summary

> Total deployments: 22
> Final cost: 2.07681047 ETH

➜ deploy git:(deploy/binance) ✗
