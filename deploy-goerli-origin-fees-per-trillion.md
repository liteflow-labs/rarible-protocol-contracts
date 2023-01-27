➜ deploy git:(feature/increase-fees-precision-2) ✗
Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

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

> Network name: 'goerli'
> Network id: 5
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0xa2f46c26ec0201c27398eddca980ed653e18efa5e4928cb2dbb15a38f79139a8
> Blocks: 1 Seconds: 8
> contract address: 0x487F9FdCae2cEb93Ef1b340E62294c83978c3630
> block number: 8383051
> block timestamp: 1674785052
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49830839524943183
> gas used: 155006 (0x25d7e)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000002480096 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000002480096 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb1ef00be61c7b066d2e58da86f1c1b92dcf6083613a3f042e8e47a5de81273d1
> Blocks: 1 Seconds: 4
> contract address: 0xA8C745dAF795956b85ED0DaCBEEDB747Fe10dF63
> block number: 8383053
> block timestamp: 1674785076
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49829738932943183
> gas used: 642215 (0x9cca7)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.00001027544 ETH

deployed royaltiesRegistry at 0xA8C745dAF795956b85ED0DaCBEEDB747Fe10dF63

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00001027544 ETH

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

> transaction hash: 0x26ea51f8922ddca0b2d5df9fe3f01769e9b908bde80f6e80906543ff24823e2c
> Blocks: 0 Seconds: 8
> contract address: 0xe512Be3198381Dc0667B8d796A7487ee80570F8e
> block number: 8383060
> block timestamp: 1674785196
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49828563585743183
> gas used: 648927 (0x9e6df)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000010382832 ETH

deployed transferProxy at 0xe512Be3198381Dc0667B8d796A7487ee80570F8e

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x85545da035726b286d25c73ffb17308a6fed9c68ee2bd4b3bd5ea1394ec188c2
> Blocks: 1 Seconds: 8
> contract address: 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249
> block number: 8383062
> block timestamp: 1674785220
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49827541131343183
> gas used: 570395 (0x8b41b)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.00000912632 ETH

deployed erc20TransferProxy at 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x48e00d0615d66ce388d4fa665fc0497d9c17b10b8fa2dc467eeca4f0c8cd0a75
> Blocks: 0 Seconds: 20
> contract address: 0x33aD75a68CA25391fD853Aeb80C3774b8117435e
> block number: 8383064
> block timestamp: 1674785256
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49826072894543183
> gas used: 849009 (0xcf471)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000013584144 ETH

deployed erc721LazyProxy at 0x33aD75a68CA25391fD853Aeb80C3774b8117435e

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x7e50cb875e61c789e3f9984ecca098bd875df31919c689e4c4b03dc63b691bc0
> Blocks: 0 Seconds: 8
> contract address: 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
> block number: 8383066
> block timestamp: 1674785280
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49824623691343183
> gas used: 837104 (0xcc5f0)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000013393664 ETH

deployed erc1155LazyProxy at 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00004648696 ETH

# 6_tokens_and_factories.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x1d4a985e70da81bb2d43ed585475816bad469b5429c0eb1ca2f5b3b86a7eb953
> Blocks: 1 Seconds: 16
> contract address: 0x2eFAa8e79f47d9c1348af88cB8FeA3A08870dB72
> block number: 8383071
> block timestamp: 1674785352
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49822947654543183
> gas used: 950320 (0xe8030)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.00001520512 ETH

deployed erc721 at 0x2eFAa8e79f47d9c1348af88cB8FeA3A08870dB72

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4b042999b092d3c251e976b9e66ed71c1c992828adadb6c8a0ff72f756c470c2
> Blocks: 1 Seconds: 4
> contract address: 0xDdaD5c397B999EdAa37ED42af9d1829F800898Bb
> block number: 8383072
> block timestamp: 1674785364
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49821454324943183
> gas used: 933331 (0xe3dd3)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000014933296 ETH

deployed erc1155 at 0xDdaD5c397B999EdAa37ED42af9d1829F800898Bb

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x2facdecd02627452d87239e0e82d096bbd066876451a930a4b2fb4077a60b676
> Blocks: 0 Seconds: 32
> contract address: 0xb27F7B0238Ba3f65E074c30883CcaF4C39010672
> block number: 8383073
> block timestamp: 1674785400
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49820884257743183
> gas used: 356292 (0x56fc4)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000005700672 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x15b1fa12afddb7c36e8184a57fde4c9cb48f02098c2ad50d2a89a648e0fc7b2a
> Blocks: 1 Seconds: 4
> contract address: 0x4FD89c8a08Fbe2e2e1689002cD89Cce1aDF165b0
> block number: 8383074
> block timestamp: 1674785412
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49820314171343183
> gas used: 356304 (0x56fd0)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000005700864 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000041539952 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xe6691a121a12b09bfe6eb7c587415b370c8346d1f50127dc9da08b713e83c310
> Blocks: 1 Seconds: 24
> contract address: 0xaF0DD2cF081dcF012876e45F314a68f3dEfCe0Da
> block number: 8383078
> block timestamp: 1674785472
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49813985086543183
> gas used: 3927123 (0x3bec53)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000062833968 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xdddf7ab487e1bc1144613556c17ef9c1c083accfff28c3b59340b891afd6e635
> Blocks: 1 Seconds: 16
> contract address: 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65
> block number: 8383080
> block timestamp: 1674785496
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49812698867343183
> gas used: 803887 (0xc442f)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000012862192 ETH

deployed exchangeV2 at 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00007569616 ETH

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

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x835a1b288fc51858d54d2e83daef2481d7d4e41fe8c79fe0cb9385d01ea70745
> Blocks: 2 Seconds: 16
> contract address: 0x05E6D034e1Fc6cb3C6E0A36B6f19bcE819786234
> block number: 8383103
> block timestamp: 1674785844
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49810240812943183
> gas used: 930333 (0xe321d)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000014885328 ETH

deployed erc721 minimal at 0x05E6D034e1Fc6cb3C6E0A36B6f19bcE819786234

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x197f545ab126e0560f434a8c33d3a2ef9b55e08bb7f1785edf07e70776d012de
> Blocks: 2 Seconds: 20
> contract address: 0x6E8bdD4B64DfB16fd611c20D230A33FcCFa48b34
> block number: 8383105
> block timestamp: 1674785868
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49809670726543183
> gas used: 356304 (0x56fd0)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000005700864 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x3f712ef83f289e470f36821788efa36ef03afbde22e002b343083db62fcde9a2
> Blocks: 2 Seconds: 16
> contract address: 0x7B7aE00a388D3147Ccdf27C37317a80A00b080E7
> block number: 8383107
> block timestamp: 1674785892
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49807556091343183
> gas used: 1321647 (0x142aaf)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000021146352 ETH

deployed factory721 minimal at 0x7B7aE00a388D3147Ccdf27C37317a80A00b080E7

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000041732544 ETH

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

> transaction hash: 0xd2bba645e9611886764053642abaa6603bcb12f2be43c9f8af20be59c5ea0a08
> Blocks: 1 Seconds: 8
> contract address: 0x99079f610a8CD19C7A05a761B0d4a73A67ee1eD3
> block number: 8383119
> block timestamp: 1674786060
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49804989968143183
> gas used: 1321647 (0x142aaf)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000021146352 ETH

deployed factory1155 at 0x99079f610a8CD19C7A05a761B0d4a73A67ee1eD3

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000021146352 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x8e5da06b3ba098fefcfe89651ab100b3a16b64a774f0290d653363292e9931be
> Blocks: 1 Seconds: 20
> contract address: 0x79780B6d60BE56467FEfd13c38B1A22D37CCED7A
> block number: 8383122
> block timestamp: 1674786108
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49804504038543183
> gas used: 275151 (0x432cf)
> gas price: 0.016 gwei
> value sent: 0 ETH
> total cost: 0.000004402416 ETH

asset matcher for collections deployed at 0x79780B6d60BE56467FEfd13c38B1A22D37CCED7A

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000004402416 ETH

# Summary

> Total deployments: 17
> Final cost: 0.00024375992 ETH
