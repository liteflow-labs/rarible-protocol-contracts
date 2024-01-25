➜ deploy git:(master) ✗ npm run truffle -- migrate --network arbitrum_sepolia

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network arbitrum_sepolia

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

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

> Network name: 'arbitrum_sepolia'
> Network id: 421614
> Block gas limit: 1125899906842624 (0x4000000000000)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x16d51693414d0e1331aeca16841370e33038e42abda82e1058f5e91be902c5fd
> Blocks: 0 Seconds: 0
> contract address: 0x4d89a53AC48A00ea3D31aA8a3Dd5898d4FacD23E
> block number: 8758805
> block timestamp: 1705892579
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4999844994
> gas used: 155006 (0x25d7e)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000155006 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0000155006 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x2dfa4244be1980db16b9e03420e7037c213b882c98c36a0a98604a83b01de993
> Blocks: 0 Seconds: 0
> contract address: 0xfff4E2b15B3897849842301C8cDA001193c04f57
> block number: 8758863
> block timestamp: 1705892593
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4998226962
> gas used: 1572377 (0x17fe19)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001572377 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x5fb8f4e095932770fa25e524ff707ff6d69142fac8096252ad07a6d26d05a6df
> Blocks: 0 Seconds: 0
> contract address: 0x838F12cfcD51944fe70d2a9474C24e0D5Cfc33C5
> block number: 8758882
> block timestamp: 1705892601
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4997742942
> gas used: 484020 (0x762b4)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.000048402 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb673eeaf05af4685a5a5b09f4d91aa8eb5214aa251b6d23a8ec5e91b7a7b495f
> Blocks: 0 Seconds: 0
> contract address: 0x2Bf8458E4B32C76912fccAea829B5A403570588B
> block number: 8758911
> block timestamp: 1705892609
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4997100739
> gas used: 642203 (0x9cc9b)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000642203 ETH

deployed royaltiesRegistry at 0x2Bf8458E4B32C76912fccAea829B5A403570588B

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00026986 ETH

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

> transaction hash: 0x8999856e1b0c5aa978a4d7f9226b3bde8323f241bcd049c9a646b0b01c5b0209
> Blocks: 0 Seconds: 0
> contract address: 0x9C2fb677C316799A41f4Ff6cA414E38EdBbdBB4f
> block number: 8758987
> block timestamp: 1705892628
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4996366147
> gas used: 648927 (0x9e6df)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000648927 ETH

deployed transferProxy at 0x9C2fb677C316799A41f4Ff6cA414E38EdBbdBB4f

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xe41b97c9c62a9521601dccee4265615b76ad3f8716aca161620958b7e81e26ef
> Blocks: 0 Seconds: 0
> contract address: 0xb77F7CE833A62cd55641A281513D0C3EC5F1d715
> block number: 8759025
> block timestamp: 1705892638
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4995727113
> gas used: 570395 (0x8b41b)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000570395 ETH

deployed erc20TransferProxy at 0xb77F7CE833A62cd55641A281513D0C3EC5F1d715

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xafc61728c38835ddc13ca99a8bb6c6ca085027d6770272f7e9ec16eeb403d254
> Blocks: 0 Seconds: 0
> contract address: 0x2D5fDAd68BDeDc567F083eb1f995B9Fe6Eb61000
> block number: 8759061
> block timestamp: 1705892647
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4994809465
> gas used: 849009 (0xcf471)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000849009 ETH

deployed erc721LazyProxy at 0x2D5fDAd68BDeDc567F083eb1f995B9Fe6Eb61000

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x8320f103d7de1db7f8fc36b554f75b438ad88aba02a18310bc0e376c1dff1189
> Blocks: 0 Seconds: 0
> contract address: 0xd30cf6be924910B1D80B642aD7E7080B4cb89E8E
> block number: 8759097
> block timestamp: 1705892657
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4993903713
> gas used: 837104 (0xcc5f0)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000837104 ETH

deployed erc1155LazyProxy at 0xd30cf6be924910B1D80B642aD7E7080B4cb89E8E

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0002905435 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x8b41113e2475042bdc80c7685d0ce9f0561cc510d622d65f471ff0b7ec7cc692
> Blocks: 0 Seconds: 0
> contract address: 0xaC5160784Cc5f1EC454477831b5f23A6f2f7A657
> block number: 8759165
> block timestamp: 1705892675
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4989794184
> gas used: 4012326 (0x3d3926)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0004012326 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x93599773f8ff0adbe7a130c142de8cbf3988540c54dc33692178fc7be8641fe7
> Blocks: 0 Seconds: 0
> contract address: 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
> block number: 8759199
> block timestamp: 1705892684
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4988843876
> gas used: 950308 (0xe8024)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000950308 ETH

deployed erc721 at 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf

Deploying 'ERC1155Rarible'

---

> transaction hash: 0x0e88c73449cbbb823dff713e0e109baaf5c855c1f54675b30df8119c60c89bc6
> Blocks: 0 Seconds: 0
> contract address: 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
> block number: 8759229
> block timestamp: 1705892692
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4984260529
> gas used: 4583347 (0x45efb3)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0004583347 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xa895f5202e211608e5ed2d9874eae2981a84d894cf6534262402ea4d032c75ed
> Blocks: 0 Seconds: 0
> contract address: 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
> block number: 8759260
> block timestamp: 1705892701
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4983327198
> gas used: 933331 (0xe3dd3)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000933331 ETH

deployed erc1155 at 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xea128a3825bbfff253d03dd2a537b2c2ff14bedbd6fc2d0ceadedf3313aebc78
> Blocks: 0 Seconds: 0
> contract address: 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
> block number: 8759289
> block timestamp: 1705892709
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4982970906
> gas used: 356292 (0x56fc4)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000356292 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x6ebf9e63500e17e510d0ec0143bc1da7258c3a192ebbc9aeb8f662e68ac09e70
> Blocks: 0 Seconds: 0
> contract address: 0xb5FD9dDD34D783a07c866B37a8D7F25385b19210
> block number: 8759314
> block timestamp: 1705892717
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4982614602
> gas used: 356304 (0x56fd0)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000356304 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0011191908 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x4437a2901ee45a9bd2f3bd6c009e9b333fb739225a3772cc9cf5e0d0b375d670
> Blocks: 0 Seconds: 0
> contract address: 0xd3E7fbfb540eFF317b46e63958B6d3131A6612f8
> block number: 8759360
> block timestamp: 1705892729
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4978691953
> gas used: 3894094 (0x3b6b4e)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003894094 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xdbaa87bccaf419ccff2f72912af45c443a3f79b9f6302ce4103433f4d4912ce2
> Blocks: 0 Seconds: 0
> contract address: 0x295125F9A15E450F404625278222afdDD88bA08F
> block number: 8759390
> block timestamp: 1705892740
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4977888066
> gas used: 803887 (0xc442f)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000803887 ETH

deployed exchangeV2 at 0x295125F9A15E450F404625278222afdDD88bA08F

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0004697981 ETH

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

old impl 721 = 0xaC5160784Cc5f1EC454477831b5f23A6f2f7A657
new impl 721 = 0xaC5160784Cc5f1EC454477831b5f23A6f2f7A657
old impl 1155 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
new impl 1155 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35

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

> transaction hash: 0x4b78d6c3c59a6698a8eed9395be684a4e76e5204246232304e4a07a028a69d43
> Blocks: 0 Seconds: 0
> contract address: 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F
> block number: 8759653
> block timestamp: 1705892821
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4973467202
> gas used: 3814925 (0x3a360d)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0003814925 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x99631a35fef3cba27756037d2de4f5a6555b0382fdd2e07fa919759c0dfcb41d
> Blocks: 0 Seconds: 0
> contract address: 0xC74A89214fe516F10d59989CbACa838EA6DAfcA8
> block number: 8759684
> block timestamp: 1705892829
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4972536881
> gas used: 930321 (0xe3211)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000930321 ETH

deployed erc721 minimal at 0xC74A89214fe516F10d59989CbACa838EA6DAfcA8

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0xee3d81729daa6734089c151fdbdf7172e677d515144e16f8f239dfc35b0ed06a
> Blocks: 16 Seconds: 4
> contract address: 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
> block number: 8759708
> block timestamp: 1705892837
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4972180577
> gas used: 356304 (0x56fd0)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000356304 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x90bd7f16720c209d26d43696ce8fab30af27badf78e40c3a3ad2915ae754c2e0
> Blocks: 11 Seconds: 4
> contract address: 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
> block number: 8759737
> block timestamp: 1705892847
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4970858942
> gas used: 1321635 (0x142aa3)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001321635 ETH

deployed factory721 minimal at 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0006423185 ETH

# 13_update_ERC721.js

old impl 721 = 0xaC5160784Cc5f1EC454477831b5f23A6f2f7A657
new impl 721 = 0xaC5160784Cc5f1EC454477831b5f23A6f2f7A657

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

old impl 1155 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
new impl 1155 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x576bc4d56398384afb8f9c656b4182379c1c2df8303b3dc889141a993b65567a
> Blocks: 0 Seconds: 0
> contract address: 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd
> block number: 8759907
> block timestamp: 1705892901
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4969255127
> gas used: 1321647 (0x142aaf)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0001321647 ETH

deployed factory1155 at 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0001321647 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x9d0045deccd5a0e222a848b7ebd3a1d30545690b4088f7533181ec9a3fe1c3cb
> Blocks: 0 Seconds: 0
> contract address: 0x7A4c9573c4c0609CDE08290B01B0e5365932292B
> block number: 8759940
> block timestamp: 1705892912
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.4968951421
> gas used: 275151 (0x432cf)
> gas price: 0.1 gwei
> value sent: 0 ETH
> total cost: 0.0000275151 ETH

asset matcher for collections deployed at 0x7A4c9573c4c0609CDE08290B01B0e5365932292B

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0000275151 ETH

# Summary

> Total deployments: 22
> Final cost: 0.0029668913 ETH

---

➜ deploy git:(master) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network arbitrum_sepolia --name "Liteflow ERC721" --symbol "LTF" --baseURI ipfs:/ --factoryAddress 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc721.js --network arbitrum_sepolia --name Liteflow ERC721 --symbol LTF --baseURI ipfs:/ --factoryAddress 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> Using network 'arbitrum_sepolia'.

name: Liteflow ERC721
symbol: LTF
baseURI: ipfs:/
factoryAddress: 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
using factory at 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
salt 0xfd79fbf5eac8672aea57542b1e08da1b64365942f5c28c8a939ee07b0d1172b6
Confirm info? type yes to confirm: yes
deploying...
tx: 0xca73a2b200546eb11eb4640936e75e68c6618efba93f5926f5926d2e818715c3
token deployed at: 0x07A1a67022C077EB14Cb13d81f0251787243e1e5
➜ deploy git:(master) ✗ npm run truffle -- exec ./scripts/deploy-erc1155.js --network arbitrum_sepolia --name "Liteflow ERC1155" --symbol "LTF" --baseURI ipfs:/ --factoryAddress 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc1155.js --network arbitrum_sepolia --name Liteflow ERC1155 --symbol LTF --baseURI ipfs:/ --factoryAddress 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> Using network 'arbitrum_sepolia'.

name: Liteflow ERC1155
symbol: LTF
baseURI: ipfs:/
factoryAddress: 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd
using factory at 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd
salt 0xd34e126b00ae40813d8c52f0edbab55814b025ae112bc0a58d4abf5ac4d9ad89
Confirm info? type yes to confirm: yes
deploying...
tx: 0xea4dd939d177b4163991a0795135d192e7af04654057e16194557365c6c3e5be
token deployed at: 0x09367518E69166b3f0eE015FB634d729880922C3
