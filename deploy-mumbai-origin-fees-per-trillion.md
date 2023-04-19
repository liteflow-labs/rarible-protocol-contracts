➜ deploy git:(feature/increase-fees-precision-2) ✗ npm run truffle -- migrate --network mumbai

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network mumbai

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

> Network name: 'mumbai'
> Network id: 80001
> Block gas limit: 20000000 (0x1312d00)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x842012b49e02c0f3ad690949797027e91674e8def4b2bce9cc109c3a8fa65e88
> Blocks: 2 Seconds: 4
> contract address: 0xa8B637ec4C3c61628aDDE25737D03b6Ed4c2A3d2
> block number: 34518338
> block timestamp: 1681806217
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.195845496349098362
> gas used: 155006 (0x25d7e)
> gas price: 2.50000003 gwei
> value sent: 0 ETH
> total cost: 0.00038751500465018 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00038751500465018 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x9a39284c78fb4f601730d6c60de34f95577187a3711bd7ee2f8b7b6ed07a1d9b
> Blocks: 2 Seconds: 4
> contract address: 0xA20c1bf6C24A6BF490b37379BDB916f3E1A1b26F
> block number: 34518349
> block timestamp: 1681806239
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.194125821328507917
> gas used: 642215 (0x9cca7)
> gas price: 2.50000003 gwei
> value sent: 0 ETH
> total cost: 0.00160553751926645 ETH

deployed royaltiesRegistry at 0xA20c1bf6C24A6BF490b37379BDB916f3E1A1b26F

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00160553751926645 ETH

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

> transaction hash: 0x80ba234b44d81bf92f949585cd678b65352bc334801fbcada19ffef271d24db7
> Blocks: 2 Seconds: 4
> contract address: 0xb7bd89090d054741AF5e5B3243C90e7DaDf05692
> block number: 34518366
> block timestamp: 1681806275
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.192289341307176194
> gas used: 648927 (0x9e6df)
> gas price: 2.500000029 gwei
> value sent: 0 ETH
> total cost: 0.001622317518818883 ETH

deployed transferProxy at 0xb7bd89090d054741AF5e5B3243C90e7DaDf05692

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x91e799eb79f9a93be1a878d5e1b1c40968d42a3d6aa4252886cec4deca693f77
> Blocks: 2 Seconds: 4
> contract address: 0x0c927e43a204FA3A86E79e4b413300F9dBF05f97
> block number: 34518373
> block timestamp: 1681806291
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.190691756289922276
> gas used: 570395 (0x8b41b)
> gas price: 2.500000027 gwei
> value sent: 0 ETH
> total cost: 0.001425987515400665 ETH

deployed erc20TransferProxy at 0x0c927e43a204FA3A86E79e4b413300F9dBF05f97

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xac6d80a2fc5266821061036cc382e3ad5c1aae2f669730000c171615e21a7a1d
> Blocks: 2 Seconds: 4
> contract address: 0x843aB0841a78FFd264aeA8cBBAE1D4222b23DEb1
> block number: 34518381
> block timestamp: 1681806307
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.188397636265283058
> gas used: 849009 (0xcf471)
> gas price: 2.500000027 gwei
> value sent: 0 ETH
> total cost: 0.002122522522923243 ETH

deployed erc721LazyProxy at 0x843aB0841a78FFd264aeA8cBBAE1D4222b23DEb1

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x6c2d0fae43ff9156cad6640812fa1277b45126ad4f5948c5b32b4e115ee5fd61
> Blocks: 2 Seconds: 4
> contract address: 0x6E8bdD4B64DfB16fd611c20D230A33FcCFa48b34
> block number: 34518390
> block timestamp: 1681806327
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.185906818240827754
> gas used: 837104 (0xcc5f0)
> gas price: 2.750000027 gwei
> value sent: 0 ETH
> total cost: 0.002302036022601808 ETH

deployed erc1155LazyProxy at 0x6E8bdD4B64DfB16fd611c20D230A33FcCFa48b34

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.007472863579744599 ETH

# 6_tokens_and_factories.js

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x700ab9ec8044a8b9d4bd7bf08f55f97af96ea74ca566de9b91ec9db7b5220641
> Blocks: 2 Seconds: 5
> contract address: 0x307D2AE9472f311d0a413F048DA1B4Ed2F19333c
> block number: 34518404
> block timestamp: 1681806357
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.183263709964542476
> gas used: 950320 (0xe8030)
> gas price: 2.500000025 gwei
> value sent: 0 ETH
> total cost: 0.002375800023758 ETH

deployed erc721 at 0x307D2AE9472f311d0a413F048DA1B4Ed2F19333c

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xbca61ae2726cecbe32cb5c0fb27d847fb9e01c9a3c643c3abcea06affe67a9ec
> Blocks: 3 Seconds: 4
> contract address: 0xD97Ed445D402be72DBF1352eEB3B2acC795E10e2
> block number: 34518411
> block timestamp: 1681806371
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.18069704969027587
> gas used: 933331 (0xe3dd3)
> gas price: 2.750000026 gwei
> value sent: 0 ETH
> total cost: 0.002566660274266606 ETH

deployed erc1155 at 0xD97Ed445D402be72DBF1352eEB3B2acC795E10e2

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x68dd7adfde7cbe8eb924416004d254a1b2b8edcd5cc5c56708960bc3bf388739
> Blocks: 2 Seconds: 4
> contract address: 0xd7ee0eADb283eFB6d6e628De5E31A284183f4EDf
> block number: 34518416
> block timestamp: 1681806383
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.179717246681012278
> gas used: 356292 (0x56fc4)
> gas price: 2.750000026 gwei
> value sent: 0 ETH
> total cost: 0.000979803009263592 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x44f397ba5611f4f4cf6d8aa61805d1be6f667ee87b16b742b5e83249ec89f294
> Blocks: 2 Seconds: 4
> contract address: 0x35F0d0c6876d8d832a485fEd5c847b97F930Dd0F
> block number: 34518422
> block timestamp: 1681806395
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.178345476268541638
> gas used: 356304 (0x56fd0)
> gas price: 3.850000035 gwei
> value sent: 0 ETH
> total cost: 0.00137177041247064 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.007294033719758838 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x6bd9a0d2e555ff1a0beaa3d91bbf9a8498c078a605d5994b42fd8a8b488b44a1
> Blocks: 3 Seconds: 8
> contract address: 0x6551Ce1e018FE2a5FF761FAeEc6F6aD47Ac2fDFa
> block number: 34518432
> block timestamp: 1681806417
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.162613744862598748
> gas used: 3927123 (0x3bec53)
> gas price: 3.977 gwei
> value sent: 0 ETH
> total cost: 0.015618168171 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x8151f158d754bca4aebc7f93d0aa6eefb8e3d452f58b878a17af8b72d899fd50
> Blocks: 2 Seconds: 4
> contract address: 0xC251bC036c05e98cd7887B3dc2b63d4cc2A252fa
> block number: 34518438
> block timestamp: 1681806429
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.159416733986794873
> gas used: 803875 (0xc4423)
> gas price: 3.977000001 gwei
> value sent: 0 ETH
> total cost: 0.003197010875803875 ETH

deployed exchangeV2 at 0xC251bC036c05e98cd7887B3dc2b63d4cc2A252fa

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.018815179046803875 ETH

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

old impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
new impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
old impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
new impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836

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

> transaction hash: 0xaa79ab4e99d33b19b3b1f73feda02ef022c5c186d60a3b4a9d114bcf59f9e965
> Blocks: 2 Seconds: 4
> contract address: 0x8f17059075B9D34BF376ec9fCC9B14E8651A3d5E
> block number: 34518505
> block timestamp: 1681806571
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.153306932517085502
> gas used: 930333 (0xe321d)
> gas price: 3.977000001 gwei
> value sent: 0 ETH
> total cost: 0.003699934341930333 ETH

deployed erc721 minimal at 0x8f17059075B9D34BF376ec9fCC9B14E8651A3d5E

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x9547f600a22e413c903daab318103ed7396fb59da68dd069910793c3e6ad8371
> Blocks: 2 Seconds: 4
> contract address: 0xFd6b5f64F18cB2c6e4e60d4F9FA84467ba227E8b
> block number: 34518511
> block timestamp: 1681806583
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.151889911508372894
> gas used: 356304 (0x56fd0)
> gas price: 3.977000002 gwei
> value sent: 0 ETH
> total cost: 0.001417021008712608 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x57b16a27dc4a2e2d670ff5b77c2e5e235a3cabc0e4ad07c70d58bb89406f0d3d
> Blocks: 2 Seconds: 4
> contract address: 0x1a7E0289f5d989ab03dB629FA86BDa87Be73b4B2
> block number: 34518515
> block timestamp: 1681806593
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.146791407087656306
> gas used: 1321647 (0x142aaf)
> gas price: 3.857690004 gwei
> value sent: 0 ETH
> total cost: 0.005098504420716588 ETH

deployed factory721 minimal at 0x1a7E0289f5d989ab03dB629FA86BDa87Be73b4B2

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.010215459771359529 ETH

# 13_update_ERC721.js

old impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181
new impl 721 = 0x605D8AA1CA5eEB30D1F9636603714a57eA8F0181

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

old impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
new impl 1155 = 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0xa651e8b5169f26fd88e7ecc303a5a94b6d4d505b5eb7c266db501979423c2561
> Blocks: 4 Seconds: 8
> contract address: 0x179bcF48a4c463Fc7C7e00A8550CFF1dd3800467
> block number: 34518561
> block timestamp: 1681806691
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.144893309635193123
> gas used: 1321647 (0x142aaf)
> gas price: 1.000000025 gwei
> value sent: 0 ETH
> total cost: 0.001321647033041175 ETH

deployed factory1155 at 0x179bcF48a4c463Fc7C7e00A8550CFF1dd3800467

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.001321647033041175 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x63f40e2df255ef885d80d560babe87b7e4d2381406fb0504ae6672cb5812c479
> Blocks: 6 Seconds: 13
> contract address: 0x9372b24aCb4a286cD6CbFD673D934Dd4eb0b9a0c
> block number: 34518573
> block timestamp: 1681806715
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.144589603627296767
> gas used: 275151 (0x432cf)
> gas price: 1.000000026 gwei
> value sent: 0 ETH
> total cost: 0.000275151007153926 ETH

asset matcher for collections deployed at 0x9372b24aCb4a286cD6CbFD673D934Dd4eb0b9a0c

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000275151007153926 ETH

# Summary

> Total deployments: 17
> Final cost: 0.047387386681778572 ETH

➜ deploy git:(feature/increase-fees-precision-2) ✗
