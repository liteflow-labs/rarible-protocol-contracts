➜ deploy git:(master) ✗ npm run truffle -- migrate --network lightlink_pegasus

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network lightlink_pegasus

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

> Network name: 'lightlink_pegasus'
> Network id: 1891
> Block gas limit: 15000000 (0xe4e1c0)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x4d9b1020d439b1624546e6fda737fadd36b85a828bd1531f2629418b7b891d55
> Blocks: 0 Seconds: 0
> contract address: 0x79C08f83Fca5e4C1C023762598783EbDda4CEAf6
> block number: 20564048
> block timestamp: 1683723844
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.954727406
> gas used: 155006 (0x25d7e)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000155006 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000155006 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x845b17a851cc97d919f9a26236e8520c9798ee77f815f4b11f13a349b03a12c2
> Blocks: 0 Seconds: 0
> contract address: 0xe512Be3198381Dc0667B8d796A7487ee80570F8e
> block number: 20564060
> block timestamp: 1683723850
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.953109374
> gas used: 1572377 (0x17fe19)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001572377 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x52f86daad4b2ceaec051652d64a1a1a2f0553f1ccaee0c3db5372d92eafc2fe4
> Blocks: 0 Seconds: 0
> contract address: 0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3
> block number: 20564067
> block timestamp: 1683723854
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.952625354
> gas used: 484020 (0x762b4)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.00048402 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xa77ee65f3aa81a99b50a0fe445853d45e9abcbb737f486fa2889eb93888fb9dd
> Blocks: 0 Seconds: 0
> contract address: 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249
> block number: 20564073
> block timestamp: 1683723857
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.951983139
> gas used: 642215 (0x9cca7)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000642215 ETH

deployed royaltiesRegistry at 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.002698612 ETH

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

> transaction hash: 0xc6b2a8a00da96a4ee7e6478f1befefaa8555996293f16e19b7711a7b3f1eac2b
> Blocks: 0 Seconds: 0
> contract address: 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
> block number: 20564094
> block timestamp: 1683723867
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.951248547
> gas used: 648927 (0x9e6df)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000648927 ETH

deployed transferProxy at 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x6d3dee2e66ce95242e7a46b88af6432bf6c66f90809419991fc1e5a6c40077ba
> Blocks: 0 Seconds: 0
> contract address: 0x956A6fb23fbFE317f2970C336581783b4e14699B
> block number: 20564103
> block timestamp: 1683723872
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.950609513
> gas used: 570395 (0x8b41b)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000570395 ETH

deployed erc20TransferProxy at 0x956A6fb23fbFE317f2970C336581783b4e14699B

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xc8e4d2e16d77fa0e60f3d46413b32df480b01e525f8c15c33624cc017b21f5b2
> Blocks: 0 Seconds: 0
> contract address: 0xDdaD5c397B999EdAa37ED42af9d1829F800898Bb
> block number: 20564113
> block timestamp: 1683723877
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.949691865
> gas used: 849009 (0xcf471)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000849009 ETH

deployed erc721LazyProxy at 0xDdaD5c397B999EdAa37ED42af9d1829F800898Bb

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x4f07442bbd3d00deac96f50e08d1b9dec4666a1df2b9e485146c56c4ee4e4583
> Blocks: 0 Seconds: 0
> contract address: 0x4FD89c8a08Fbe2e2e1689002cD89Cce1aDF165b0
> block number: 20564122
> block timestamp: 1683723881
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.948786113
> gas used: 837104 (0xcc5f0)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000837104 ETH

deployed erc1155LazyProxy at 0x4FD89c8a08Fbe2e2e1689002cD89Cce1aDF165b0

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.002905435 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x89637bbcdcb57dba0f7b184a1084669935a826a74ef40e5db912c6eb8f3012c2
> Blocks: 0 Seconds: 0
> contract address: 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65
> block number: 20564139
> block timestamp: 1683723890
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.944676584
> gas used: 4012326 (0x3d3926)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.004012326 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x86248fa264a7e043d092d8d727a12a9f0bdc99b0d93cd63cc7a3e3a90d4b83ba
> Blocks: 0 Seconds: 0
> contract address: 0xce1221169f4D24132e024FDb90F7dfcF367f3fD7
> block number: 20564146
> block timestamp: 1683723893
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.943726264
> gas used: 950320 (0xe8030)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.00095032 ETH

deployed erc721 at 0xce1221169f4D24132e024FDb90F7dfcF367f3fD7

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xa9880c9c6b23de861fe5cd3493e313fee1d76e04d73e263478fd3393713d07c8
> Blocks: 0 Seconds: 0
> contract address: 0xD58bdfB858483DbE0314916cB4154b20Aa4CbBd5
> block number: 20564155
> block timestamp: 1683723898
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.939142917
> gas used: 4583347 (0x45efb3)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.004583347 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x26c10d6da82abba0dd4f805536fe3d830d6c86b40bac9ce8e10ee0f38630dba3
> Blocks: 0 Seconds: 0
> contract address: 0x65A135B59095f0ef8b3E499b0faeeCBfA773eDa3
> block number: 20564163
> block timestamp: 1683723902
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.938209586
> gas used: 933331 (0xe3dd3)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000933331 ETH

deployed erc1155 at 0x65A135B59095f0ef8b3E499b0faeeCBfA773eDa3

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xc6aea85efb283769582d04507e876642ef771835c8ea81fc85c9b8dcb577ac56
> Blocks: 0 Seconds: 0
> contract address: 0x39D84239620ac1eE232eB05B173E79C6d87E8283
> block number: 20564170
> block timestamp: 1683723905
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.937853294
> gas used: 356292 (0x56fc4)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000356292 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x23828b1a91a97c00db2f0775dbc3f5b25df73eddf96eb6152b1c53effa5a8aa3
> Blocks: 0 Seconds: 0
> contract address: 0x4c55C5AD4f1CA8935Cb8f96F6A9eC530166f3cC2
> block number: 20564176
> block timestamp: 1683723909
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.93749699
> gas used: 356304 (0x56fd0)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000356304 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.01119192 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xe38961d2c0f52f89d0f930101797f10f8f4accd0a8230f08018af7e015e3e547
> Blocks: 0 Seconds: 0
> contract address: 0xa286ee17492eD8BcDaf5c4DC69cc0fEa028f0427
> block number: 20564189
> block timestamp: 1683723915
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.933574341
> gas used: 3894094 (0x3b6b4e)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.003894094 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x2e09356d946e9956158927e262a1661bf82d1d82352792448ca1b40f82fb00a0
> Blocks: 0 Seconds: 0
> contract address: 0xA20c1bf6C24A6BF490b37379BDB916f3E1A1b26F
> block number: 20564196
> block timestamp: 1683723919
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.932770454
> gas used: 803887 (0xc442f)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000803887 ETH

deployed exchangeV2 at 0xA20c1bf6C24A6BF490b37379BDB916f3E1A1b26F

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.004697981 ETH

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

old impl 721 = 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65
new impl 721 = 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65
old impl 1155 = 0xD58bdfB858483DbE0314916cB4154b20Aa4CbBd5
new impl 1155 = 0xD58bdfB858483DbE0314916cB4154b20Aa4CbBd5

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

> transaction hash: 0xdc626ac9e04a24eb4219f26403dcb7a70b0fe61b0195ac7e90145a49d4aaaf37
> Blocks: 0 Seconds: 0
> contract address: 0xe6f23ECC9F317074c3F87c8674389Fd8ED2c08cA
> block number: 20564282
> block timestamp: 1683723962
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.928349578
> gas used: 3814925 (0x3a360d)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.003814925 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x973f1edc69637361672ad21b698d2ab621b06175aa25b991768633e00f497fe0
> Blocks: 0 Seconds: 0
> contract address: 0x6551Ce1e018FE2a5FF761FAeEc6F6aD47Ac2fDFa
> block number: 20564289
> block timestamp: 1683723965
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.927419245
> gas used: 930333 (0xe321d)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000930333 ETH

deployed erc721 minimal at 0x6551Ce1e018FE2a5FF761FAeEc6F6aD47Ac2fDFa

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x33c8f897e78adde3d7d36478832d42bbd6d115a1fed9010467989947f266771b
> Blocks: 0 Seconds: 0
> contract address: 0xC251bC036c05e98cd7887B3dc2b63d4cc2A252fa
> block number: 20564296
> block timestamp: 1683723969
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.927062941
> gas used: 356304 (0x56fd0)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000356304 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0xe40c2ae95d5970c86f6f7e9eb4ab56d40fe686e3321acd02e54f6f1d81ea0476
> Blocks: 0 Seconds: 0
> contract address: 0x73A171FB8D46866395D71dFE772659243d2d2fc0
> block number: 20564301
> block timestamp: 1683723971
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.925741294
> gas used: 1321647 (0x142aaf)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001321647 ETH

deployed factory721 minimal at 0x73A171FB8D46866395D71dFE772659243d2d2fc0

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.006423209 ETH

# 13_update_ERC721.js

old impl 721 = 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65
new impl 721 = 0xBa2A7315cAE5cD81F942aF50c1D09b98df1d3C65

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

old impl 1155 = 0xD58bdfB858483DbE0314916cB4154b20Aa4CbBd5
new impl 1155 = 0xD58bdfB858483DbE0314916cB4154b20Aa4CbBd5

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0xdbf70e45f7912985f991768ba107cba22d2abe9127b1452d990cf79e91fb004d
> Blocks: 0 Seconds: 0
> contract address: 0x1344c65430f140782AaD579AAF1b7AafBc412922
> block number: 20564356
> block timestamp: 1683723999
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.924137467
> gas used: 1321647 (0x142aaf)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.001321647 ETH

deployed factory1155 at 0x1344c65430f140782AaD579AAF1b7AafBc412922

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.001321647 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xa7aa4d08299b14921ba55b1b5b3c41aa71f08a2da542d3982980176b0f9921f1
> Blocks: 0 Seconds: 0
> contract address: 0xf7a27F8F143b0cBE5E0C66341aEC55c27f473f3f
> block number: 20564367
> block timestamp: 1683724005
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 4.923833761
> gas used: 275151 (0x432cf)
> gas price: 1 gwei
> value sent: 0 ETH
> total cost: 0.000275151 ETH

asset matcher for collections deployed at 0xf7a27F8F143b0cBE5E0C66341aEC55c27f473f3f

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000275151 ETH

# Summary

> Total deployments: 22
> Final cost: 0.029668961 ETH

➜ deploy git:(master) ✗
