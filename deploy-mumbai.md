➜  deploy git:(deploy/binance) ✗ rm -fr build
➜  deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network mumbai

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
unable to load etherscan key from config
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

Compiling your contracts...
===========================
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
    function isValidSignature(bytes32 _hash, bytes calldata _signature) virtual external view returns (bytes4 magicValue);
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
    function _burned(uint256 tokenId) internal returns (bool) {
    ^ (Relevant source part starts here and spans across multiple lines).

> Artifacts written to /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/build/contracts
> Compiled successfully using:
   - solc: 0.7.6+commit.7338295f.Emscripten.clang



Starting migrations...
======================
> Network name:    'mumbai'
> Network id:      80001
> Block gas limit: 20000000 (0x1312d00)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x31d9b4d6b780e7ac73db308529b15e782d4f399f09dcf92f76842b61c27826f6
   > Blocks: 3            Seconds: 12
   > contract address:    0x9339a7E4df2D828f6Df1546b395DF61c88C2D563
   > block number:        28081193
   > block timestamp:     1663071327
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999983698774
   > gas used:            155006 (0x25d7e)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000000310012 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000000310012 ETH


2_initial_RoyaltiesRegistry.js
==============================

   Deploying 'RoyaltiesRegistry'
   -----------------------------
   > transaction hash:    0xc8010a9fbfc97c37f121bfea6f4531515e1918b1b8f0f27ecf7d25d31de309b6
   > Blocks: 1            Seconds: 9
   > contract address:    0x4083e25a0f32418d32Ce699B257f566b56Ec7D16
   > block number:        28081198
   > block timestamp:     1663071352
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.1999999998046271
   > gas used:            1572377 (0x17fe19)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000003144754 ETH


   Deploying 'ProxyAdmin'
   ----------------------
   > transaction hash:    0x5cbc26d33284268b2cdb4a01d0d994eebfb976c11b2f5c727021f4c8511d763f
   > Blocks: 1            Seconds: 8
   > contract address:    0x1dC20cCF6f3a6Ecf90ADb28253cBB894A8439Dd4
   > block number:        28081201
   > block timestamp:     1663071367
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.1999999997949467
   > gas used:            484020 (0x762b4)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000096804 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xa076a22ad2e1bf40d9ef483b96ab28cfa78872fb002a1f7d8a16272ed236f331
   > Blocks: 2            Seconds: 8
   > contract address:    0xB2d32E3C3283C5dedCDA6C3539468A3848206D57
   > block number:        28081204
   > block timestamp:     1663071382
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.1999999997821024
   > gas used:            642215 (0x9cca7)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000128443 ETH

deployed royaltiesRegistry at 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000005397224 ETH


3_royalties_provider_v2legacy.js
================================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


4_royalties_provider_art_blocks.js
==================================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


5_initial_transfer_proxies.js
=============================

   Deploying 'TransferProxy'
   -------------------------
   > transaction hash:    0xd3c8071941d1076295623ba5922005f87eb47ecf573edbaf78936eaebd6f2082
   > Blocks: 3            Seconds: 12
   > contract address:    0xfa392Ef9BcfCf64CFCAA1311c6bb9b459A28eE70
   > block number:        28081213
   > block timestamp:     1663071427
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999976741056
   > gas used:            648927 (0x9e6df)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001297854 ETH

deployed transferProxy at 0xfa392Ef9BcfCf64CFCAA1311c6bb9b459A28eE70

   Deploying 'ERC20TransferProxy'
   ------------------------------
   > transaction hash:    0x1524a6e279e6c5779356c5b79a8c6902c3534de14a2840f446681cbecd48003a
   > Blocks: 2            Seconds: 8
   > contract address:    0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F
   > block number:        28081217
   > block timestamp:     1663071448
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999975462988
   > gas used:            570395 (0x8b41b)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000114079 ETH

deployed erc20TransferProxy at 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F

   Deploying 'ERC721LazyMintTransferProxy'
   ---------------------------------------
   > transaction hash:    0x4b71b4c0a51bc4ac86423db38137b117e51da43199d26ba32a0baae78501c7c0
   > Blocks: 3            Seconds: 12
   > contract address:    0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
   > block number:        28081222
   > block timestamp:     1663071473
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999973627692
   > gas used:            849009 (0xcf471)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001698018 ETH

deployed erc721LazyProxy at 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB

   Deploying 'ERC1155LazyMintTransferProxy'
   ----------------------------------------
   > transaction hash:    0xefb9b2a2a74ae4d4e97acef2e86106489cef47c7d36ed7fea85e87659a247c9f
   > Blocks: 1            Seconds: 4
   > contract address:    0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771
   > block number:        28081226
   > block timestamp:     1663071493
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999971816188
   > gas used:            837104 (0xcc5f0)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001674208 ETH

deployed erc1155LazyProxy at 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0000000000581087 ETH


6_tokens_and_factories.js
=========================

   Deploying 'ERC721Rarible'
   -------------------------
   > transaction hash:    0x0a1b7d6ea036f928797cb44422806815bc270e6222ff3ffb7a672b4652fced34
   > Blocks: 2            Seconds: 8
   > contract address:    0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
   > block number:        28081233
   > block timestamp:     1663071528
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.1999999996359713
   > gas used:            4012326 (0x3d3926)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000008024652 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xf94979d1d0e325d2b0ac2aab42c7f271c366634098854d9a6171a9ced4df0623
   > Blocks: 1            Seconds: 4
   > contract address:    0x94552C67b9823A64b95888AAb68fA17c503d6d10
   > block number:        28081236
   > block timestamp:     1663071543
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.1999999996169649
   > gas used:            950320 (0xe8030)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000190064 ETH

deployed erc721 at 0x94552C67b9823A64b95888AAb68fA17c503d6d10

   Deploying 'ERC1155Rarible'
   --------------------------
   > transaction hash:    0x5de2f69fa2436e46cb916084f6c6c9a1ebb5a2d2f9e7adb5c1dfd6cfd90d0b05
   > Blocks: 1            Seconds: 8
   > contract address:    0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
   > block number:        28081239
   > block timestamp:     1663071558
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999952529796
   > gas used:            4583347 (0x45efb3)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000009166694 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0x9760bea84b63df38e3fb0c00e761c6f5a0682eb3af131e2578b2e55f3e81a06c
   > Blocks: 2            Seconds: 8
   > contract address:    0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4
   > block number:        28081242
   > block timestamp:     1663071573
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999950663158
   > gas used:            933319 (0xe3dc7)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001866638 ETH

deployed erc1155 at 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4

   Deploying 'ERC721RaribleBeacon'
   -------------------------------
   > transaction hash:    0x652b17febf0fa9ad8942bb7a1993717b465ded476c9cfcabb0b2fefc52bcb93e
   > Blocks: 2            Seconds: 8
   > contract address:    0x9051D6ab0582bcE41fB17cadC707de49A0197501
   > block number:        28081245
   > block timestamp:     1663071588
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999949950574
   > gas used:            356292 (0x56fc4)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000000712584 ETH


   Deploying 'ERC1155RaribleBeacon'
   --------------------------------
   > transaction hash:    0x17aff53cd4ce9d92920cdb940bcd5ecb38cecfdab50e6d464895fda0912fc869
   > Blocks: 2            Seconds: 8
   > contract address:    0x823E4B495e0dc0790193B1D2da719182252A42A1
   > block number:        28081248
   > block timestamp:     1663071603
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999949237966
   > gas used:            356304 (0x56fd0)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000000712608 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000022383816 ETH


7_initial_ExchangeV2.js
=======================

   Deploying 'ExchangeV2'
   ----------------------
   > transaction hash:    0x68751b52c44e964160a210ff7ef9fb9733a143b2348a6f4bbcc5ee5b6291a404
   > Blocks: 3            Seconds: 12
   > contract address:    0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D
   > block number:        28081254
   > block timestamp:     1663071633
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999941392668
   > gas used:            3894094 (0x3b6b4e)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000007788188 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0x6e7864394f21e126c5af9b968676ad4c38c020bc68231b8d700a1af427030308
   > Blocks: 2            Seconds: 8
   > contract address:    0x7A4c9573c4c0609CDE08290B01B0e5365932292B
   > block number:        28081257
   > block timestamp:     1663071648
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999939784894
   > gas used:            803887 (0xc442f)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001607774 ETH

deployed exchangeV2 at 0x7A4c9573c4c0609CDE08290B01B0e5365932292B

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000009395962 ETH


8_add_operator_proxies.js
=========================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


9_deploy_legacy.js
==================
{
  communityWallet: '0x29bD48E4cB7562D660506Ff940365a76A8d407E3',
  deploy_CryptoPunks: false,
  address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


10_update_tokens.js
===================
old impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
new impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
old impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
new impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


11_update_exchangev2.js
=======================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


12_deploy_ERC721Minimal_tokens_factory.js
=========================================

   Deploying 'ERC721RaribleMinimal'
   --------------------------------
   > transaction hash:    0x29dbe6ba4a2a21e40632f79898a96d8ae854c0662e9dc7febd91fab592926622
   > Blocks: 2            Seconds: 8
   > contract address:    0x79C08f83Fca5e4C1C023762598783EbDda4CEAf6
   > block number:        28081360
   > block timestamp:     1663072165
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999930943166
   > gas used:            3814925 (0x3a360d)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000762985 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xd1a83ec4df83285637b557c9d2ab39d8b635754ea031f146d8d43aa68b9bbb0c
   > Blocks: 2            Seconds: 8
   > contract address:    0x07938bFf8fF7e9F28C28023C5b2Eb45ac8A875ff
   > block number:        28081363
   > block timestamp:     1663072180
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.199999999290825
   > gas used:            930333 (0xe321d)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000001860666 ETH

deployed erc721 minimal at 0x07938bFf8fF7e9F28C28023C5b2Eb45ac8A875ff

   Deploying 'ERC721RaribleMinimalBeacon'
   --------------------------------------
   > transaction hash:    0x3dd17f7ba8c6e581cc10d2317e3fc0670a705444ddec392b76d52caae7274f29
   > Blocks: 3            Seconds: 12
   > contract address:    0xe512Be3198381Dc0667B8d796A7487ee80570F8e
   > block number:        28081367
   > block timestamp:     1663072200
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999928369892
   > gas used:            356304 (0x56fd0)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000000712608 ETH


   Deploying 'ERC721RaribleFactoryC2'
   ----------------------------------
   > transaction hash:    0x9d7a7236ada2281fb42217de078c6573518d82c4d038f227819d26254c360a62
   > Blocks: 1            Seconds: 8
   > contract address:    0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3
   > block number:        28081370
   > block timestamp:     1663072215
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999925726598
   > gas used:            1321647 (0x142aaf)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000002643294 ETH

deployed factory721 minimal at 0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000012846418 ETH


13_update_ERC721.js
===================
old impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
new impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


14_initial_CryptoPunks.js
=========================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


15_upgrade_royalties_registry.js
================================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


16_update_ERC1155_deploy_factory.js
===================================
old impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
new impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836

   Deploying 'ERC1155RaribleFactoryC2'
   -----------------------------------
   > transaction hash:    0xdf5b77bd6fb83a28ddca9113f54e317d3311291ea687c777dd450a1c2cece5fb
   > Blocks: 1            Seconds: 8
   > contract address:    0xb27F7B0238Ba3f65E074c30883CcaF4C39010672
   > block number:        28081397
   > block timestamp:     1663072350
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999922518968
   > gas used:            1321635 (0x142aa3)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.0000000000264327 ETH

deployed factory1155 at 0xb27F7B0238Ba3f65E074c30883CcaF4C39010672

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0000000000264327 ETH


17_collection_matcher.js
========================

   Deploying 'AssetMatcherCollection'
   ----------------------------------
   > transaction hash:    0x9c4906730fca5ae3ce853dc5325ca8251d3b2891f5a08b5ce6125d863fe94a99
   > Blocks: 1            Seconds: 9
   > contract address:    0x8463dded0926e22A58787C7b961b2fCaccD43f9c
   > block number:        28081402
   > block timestamp:     1663072375
   > account:             0x29bD48E4cB7562D660506Ff940365a76A8d407E3
   > balance:             0.19999999921911556
   > gas used:            275151 (0x432cf)
   > gas price:           0.00000002 gwei
   > value sent:          0 ETH
   > total cost:          0.00000000000550302 ETH

asset matcher for collections deployed at 0x8463dded0926e22A58787C7b961b2fCaccD43f9c

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00000000000550302 ETH


Summary
=======
> Total deployments:   22
> Final cost:          0.00000000059337874 ETH


➜  deploy git:(deploy/binance) ✗