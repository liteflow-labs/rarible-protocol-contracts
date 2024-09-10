➜ deploy git:(master) ✗ npm run truffle -- migrate --network base

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network base

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

> Network name: 'base'
> Network id: 8453
> Block gas limit: 120000000 (0x7270e00)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x6af941a0604b3f1fc885b4cec085f0531b6aceb826e9791d9771df8138553ba3
> Blocks: 2 Seconds: 4
> contract address: 0x5cc32A135663018bAB9976B379cc08F142423916
> block number: 19575994
> block timestamp: 1725941335
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000999327446194284
> gas used: 155034 (0x25d9a)
> gas price: 0.003079802 gwei
> value sent: 0 ETH
> total cost: 0.000000477474023268 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000000477474023268 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x8a3616ff1d5ba6deddc926448e16cdcd090177f92ca26d9c84c059892db84521
> Blocks: 2 Seconds: 4
> contract address: 0xA239862e02808DBd11470D3EC967E04FBA16238f
> block number: 19576005
> block timestamp: 1725941357
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000994104606551259
> gas used: 1572819 (0x17ffd3)
> gas price: 0.003082956 gwei
> value sent: 0 ETH
> total cost: 0.000004848931772964 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x9eba98a966886f28d4b57eea7206f976abb302f885129fe00744fa9112ab9a9a
> Blocks: 2 Seconds: 4
> contract address: 0x7E87A856F34E12659A11a6e80F4535B2Dcdf3F6F
> block number: 19576010
> block timestamp: 1725941367
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.00099254396457269
> gas used: 484144 (0x76330)
> gas price: 0.00308848 gwei
> value sent: 0 ETH
> total cost: 0.00000149526906112 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x8a72a34cc2ec371645f1db076ab008b048d1224416bfba930dc99ded0eb542a8
> Blocks: 2 Seconds: 4
> contract address: 0x2d1472930194dcA9E625Eb501e6528564CA37547
> block number: 19576015
> block timestamp: 1725941377
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000990423789825013
> gas used: 642469 (0x9cda5)
> gas price: 0.003096298 gwei
> value sent: 0 ETH
> total cost: 0.000001989275479762 ETH

deployed royaltiesRegistry at 0x2d1472930194dcA9E625Eb501e6528564CA37547

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000008333476313846 ETH

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

> transaction hash: 0x784bd0bf70e09875f3f6c82535ab461a0ef0691d31215bd55b2b49e728beeaa8
> Blocks: 2 Seconds: 4
> contract address: 0xE3c11fB8436Fa418900B06547fC27d1c9A71f877
> block number: 19576032
> block timestamp: 1725941411
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000988034452831488
> gas used: 649103 (0x9e78f)
> gas price: 0.003110328 gwei
> value sent: 0 ETH
> total cost: 0.000002018923235784 ETH

deployed transferProxy at 0xE3c11fB8436Fa418900B06547fC27d1c9A71f877

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x1ebc0b1263637e5912d82a07a53548d9060ccee1e8cb3dac226a23e8ce11978c
> Blocks: 2 Seconds: 4
> contract address: 0x3dEde2c135039740Ba44E93CD4d8c2739de7C1Bc
> block number: 19576040
> block timestamp: 1725941427
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000985962480073395
> gas used: 570547 (0x8b4b3)
> gas price: 0.003120876 gwei
> value sent: 0 ETH
> total cost: 0.000001780606439172 ETH

deployed erc20TransferProxy at 0x3dEde2c135039740Ba44E93CD4d8c2739de7C1Bc

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x1373e6c21a68d5fd02d1aee89b563c3bfab4655f7f060e5346c2e2dcc44e9bcb
> Blocks: 3 Seconds: 4
> contract address: 0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85
> block number: 19576048
> block timestamp: 1725941443
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000982957606346974
> gas used: 849243 (0xcf55b)
> gas price: 0.003131377 gwei
> value sent: 0 ETH
> total cost: 0.000002659299997611 ETH

deployed erc721LazyProxy at 0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x2045748767bfc76a9f6b58a63146492c5ba3ce97119b9f064c44d622db12bee2
> Blocks: 2 Seconds: 4
> contract address: 0xbB71e9498617bA0026601f87876e59BE96fc3314
> block number: 19576056
> block timestamp: 1725941459
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000979990421921943
> gas used: 837334 (0xcc6d6)
> gas price: 0.003140892 gwei
> value sent: 0 ETH
> total cost: 0.000002629975661928 ETH

deployed erc1155LazyProxy at 0xbB71e9498617bA0026601f87876e59BE96fc3314

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000009088805334495 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x5e45d817d0bad0b152ee53c7b11a6b311f1ac0a26fb8446b70fa93ff66dd8139
> Blocks: 2 Seconds: 5
> contract address: 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
> block number: 19576069
> block timestamp: 1725941485
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000966472206574559
> gas used: 4013474 (0x3d3da2)
> gas price: 0.003153092 gwei
> value sent: 0 ETH
> total cost: 0.000012654852761608 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x7001cebe1c47aa9b5f48dc44703110884a9f0ae506e8ebd561e17e11683db672
> Blocks: 2 Seconds: 4
> contract address: 0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA
> block number: 19576075
> block timestamp: 1725941497
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000963346729826707
> gas used: 950600 (0xe8148)
> gas price: 0.003158472 gwei
> value sent: 0 ETH
> total cost: 0.0000030024434832 ETH

deployed erc721 at 0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA

Deploying 'ERC1155Rarible'

---

> transaction hash: 0x80a9217857fea9daa7fa59299caff9d8813d25284aa8e59c5cfb46a53edcb1af
> Blocks: 2 Seconds: 4
> contract address: 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F
> block number: 19576081
> block timestamp: 1725941509
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000948295662338998
> gas used: 4584661 (0x45f4d5)
> gas price: 0.00315627 gwei
> value sent: 0 ETH
> total cost: 0.00001447042797447 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4c2093b86a419319ed5190d1902f18c89c485a7d448bb37f8e06214840a2b53b
> Blocks: 2 Seconds: 4
> contract address: 0x18E185C08e714e6E4306309B135225B43A77ab22
> block number: 19576087
> block timestamp: 1725941521
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000945208066729926
> gas used: 933599 (0xe3edf)
> gas price: 0.003163883 gwei
> value sent: 0 ETH
> total cost: 0.000002953798004917 ETH

deployed erc1155 at 0x18E185C08e714e6E4306309B135225B43A77ab22

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xd0db0c71c40be7c1ccb71de9257c5b7dcb091d4a6d163fcdcc34b5befc189cc7
> Blocks: 2 Seconds: 4
> contract address: 0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2
> block number: 19576093
> block timestamp: 1725941533
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.00094403505603044
> gas used: 356388 (0x57024)
> gas price: 0.003162418 gwei
> value sent: 0 ETH
> total cost: 0.000001127047826184 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x89fb7e0891cdddc4e38b0c4fddf8103fdc3410aa4e853ea253477f899b3d1e46
> Blocks: 2 Seconds: 4
> contract address: 0x31D56e268357937407EA179ce72e93B2d9c5612E
> block number: 19576099
> block timestamp: 1725941545
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000942867266284379
> gas used: 356400 (0x57030)
> gas price: 0.003161629 gwei
> value sent: 0 ETH
> total cost: 0.0000011268045756 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000035335374625979 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x674dead26f7a8ff0649ef323863bd5d54856c815571e74062f55e1cc72d74104
> Blocks: 2 Seconds: 4
> contract address: 0x9ea8329a72B1388A7cDa3fe7DDD99f97a6794c85
> block number: 19576109
> block timestamp: 1725941565
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000930007178625889
> gas used: 3895208 (0x3b6fa8)
> gas price: 0.003158072 gwei
> value sent: 0 ETH
> total cost: 0.000012301347318976 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x9d4e8efad401e6d9a8e4e856049700371e2362d4ae61284c1cfad1810e72e0fa
> Blocks: 3 Seconds: 4
> contract address: 0xDE7064d5C8ab39E1CF149177F13C0AB803dA03d2
> block number: 19576115
> block timestamp: 1725941577
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000927340640413568
> gas used: 804151 (0xc4537)
> gas price: 0.003156048 gwei
> value sent: 0 ETH
> total cost: 0.000002537939155248 ETH

deployed exchangeV2 at 0xDE7064d5C8ab39E1CF149177F13C0AB803dA03d2

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000014839286474224 ETH

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

old impl 721 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
new impl 721 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
old impl 1155 = 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F
new impl 1155 = 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F

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

> transaction hash: 0x652d349b527a5a386945dccb4e3e1188003c434c5e98b44b47921e89b9032811
> Blocks: 2 Seconds: 4
> contract address: 0x314B8e649590dD9153D5F7225d391cBF9aC51600
> block number: 19576181
> block timestamp: 1725941709
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000912589724550101
> gas used: 3816017 (0x3a3a51)
> gas price: 0.003200192 gwei
> value sent: 0 ETH
> total cost: 0.000012211987075264 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xc0912d2019e34f9eb1b553f93ebf3776588ed2e3d64e6c9f61d1ef05b46c1f23
> Blocks: 2 Seconds: 4
> contract address: 0x0e0B3f68E243128a564A664c470434dE6eb91359
> block number: 19576187
> block timestamp: 1725941721
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000909475165069176
> gas used: 930601 (0xe3329)
> gas price: 0.003203063 gwei
> value sent: 0 ETH
> total cost: 0.000002980773630863 ETH

deployed erc721 minimal at 0x0e0B3f68E243128a564A664c470434dE6eb91359

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0xa46d3b518fb23e30c61e0e64bcc0a0c81cafd65424c2d669e09ee9fd2cdf3533
> Blocks: 2 Seconds: 4
> contract address: 0x0F3D562cD068C3443E9302bb2d1f161F3E5e8696
> block number: 19576193
> block timestamp: 1725941733
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.00090828568530012
> gas used: 356388 (0x57024)
> gas price: 0.003210322 gwei
> value sent: 0 ETH
> total cost: 0.000001144120236936 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0xcbb1b7dcc53d7b4d2f927af5443e6276001822dc4e55b53eab6f7f863e63dcb8
> Blocks: 3 Seconds: 4
> contract address: 0xdDd6d7291Fb73E6aED8DACf43C2504423DDd94e3
> block number: 19576199
> block timestamp: 1725941745
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000903842568224864
> gas used: 1322013 (0x142c1d)
> gas price: 0.003214452 gwei
> value sent: 0 ETH
> total cost: 0.000004249547331876 ETH

deployed factory721 minimal at 0xdDd6d7291Fb73E6aED8DACf43C2504423DDd94e3

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000020586428274939 ETH

# 13_update_ERC721.js

old impl 721 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511
new impl 721 = 0xfF33638946F2D3fa4c1E1D27da73c8f3df861511

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

old impl 1155 = 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F
new impl 1155 = 0x68F8E7cb72c93Ee86f7f856E5C0b02c9A580046F

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x6693fbce8004d8e696b7c218e7fdc3450757948e2a7c5892bc0e6b6f8894114f
> Blocks: 2 Seconds: 4
> contract address: 0xeE8Ba404dEEeaCeE3CA671a33dbfB3e9430D7F8E
> block number: 19576241
> block timestamp: 1725941829
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000898457369727225
> gas used: 1322001 (0x142c11)
> gas price: 0.003209227 gwei
> value sent: 0 ETH
> total cost: 0.000004242601303227 ETH

deployed factory1155 at 0xeE8Ba404dEEeaCeE3CA671a33dbfB3e9430D7F8E

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000004242601303227 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xcb5ff5202a32a3e4294cab94298933e8f3e95dbd37a474f29698cf76653fb2d9
> Blocks: 2 Seconds: 4
> contract address: 0x4C526D323b0372926048407E0450148165F0040C
> block number: 19576249
> block timestamp: 1725941845
> account: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
> balance: 0.000897429233887782
> gas used: 275219 (0x43313)
> gas price: 0.003227498 gwei
> value sent: 0 ETH
> total cost: 0.000000888268772062 ETH

asset matcher for collections deployed at 0x4C526D323b0372926048407E0450148165F0040C

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000000888268772062 ETH

# Summary

> Total deployments: 22
> Final cost: 0.00009379171512204 ETH

➜ deploy git:(master) ✗
