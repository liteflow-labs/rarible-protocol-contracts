➜ deploy git:(master) ✗ npm run truffle -- migrate --network base_sepolia

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network base_sepolia

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

> Network name: 'base_sepolia'
> Network id: 84532
> Block gas limit: 45000000 (0x2aea540)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x5f2094783c62b27a448398defbc88d4766d518e07354a6d8dff704e4e3538431
> Blocks: 3 Seconds: 4
> contract address: 0x38FA332750b6808bC2C8e6fD478Bf6ef1d5b64D6
> block number: 15085700
> block timestamp: 1725939688
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.841026051803330382
> gas used: 155034 (0x25d9a)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000000155074463874 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000000155074463874 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0xd7b09eda8dd68dc0bd82c29db98ba81803ea9e65ef62a9a60fb1abd77206e59e
> Blocks: 2 Seconds: 4
> contract address: 0x25f89dD6c78e34ecdDF1F6432778Ce8B7abCaAab
> block number: 15085709
> block timestamp: 1725939706
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840933869076051401
> gas used: 1572819 (0x17ffd3)
> gas price: 0.00100026 gwei
> value sent: 0 ETH
> total cost: 0.00000157322793294 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x81dd667c8541936936dc9437bec1d48f4067fafd2039ff95d82e27847cc7b5f6
> Blocks: 2 Seconds: 4
> contract address: 0xeDD9Df626aEa4bEb3c527e2fD24C9bCa16937E29
> block number: 15085714
> block timestamp: 1725939716
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840902661230438401
> gas used: 484144 (0x76330)
> gas price: 0.001000258 gwei
> value sent: 0 ETH
> total cost: 0.000000484268909152 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x1ddcac31e320c10a57701d934477bacb4a20f787542df4d9092697cb270f845f
> Blocks: 3 Seconds: 5
> contract address: 0x46E969bc4332c0eEF34dEf88494f197912cf7852
> block number: 15085719
> block timestamp: 1725939726
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840842901729912782
> gas used: 642469 (0x9cda5)
> gas price: 0.001000258 gwei
> value sent: 0 ETH
> total cost: 0.000000642634757002 ETH

deployed royaltiesRegistry at 0x46E969bc4332c0eEF34dEf88494f197912cf7852

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000002700131599094 ETH

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

> transaction hash: 0x3a7014c36571d90683cbc72f37d21a5efbcb23ab1fc13eb9f716fdb616236d97
> Blocks: 2 Seconds: 4
> contract address: 0x91CB2B86741cc24c9E8CCbfF2326E8dB500145a0
> block number: 15085732
> block timestamp: 1725939752
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840797598938683487
> gas used: 649103 (0x9e78f)
> gas price: 0.001000258 gwei
> value sent: 0 ETH
> total cost: 0.000000649270468574 ETH

deployed transferProxy at 0x91CB2B86741cc24c9E8CCbfF2326E8dB500145a0

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x22377ac767e8f44e6be6451b2814d3055f3c530fbfcd3daf8f70ce873415e125
> Blocks: 2 Seconds: 4
> contract address: 0x07938bFf8fF7e9F28C28023C5b2Eb45ac8A875ff
> block number: 15085740
> block timestamp: 1725939768
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840763912512564019
> gas used: 570547 (0x8b4b3)
> gas price: 0.001000258 gwei
> value sent: 0 ETH
> total cost: 0.000000570694201126 ETH

deployed erc20TransferProxy at 0x07938bFf8fF7e9F28C28023C5b2Eb45ac8A875ff

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x83fc6a4e748314f5d5086da58757c2693b07ce846a27fb8f50a84f9805126523
> Blocks: 3 Seconds: 4
> contract address: 0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3
> block number: 15085748
> block timestamp: 1725939784
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840702565983161986
> gas used: 849243 (0xcf55b)
> gas price: 0.001000259 gwei
> value sent: 0 ETH
> total cost: 0.000000849462953937 ETH

deployed erc721LazyProxy at 0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x326108675561e8b81cfc022ff3cd46eb14a62391bf47543090753449732911b8
> Blocks: 2 Seconds: 4
> contract address: 0x598B6ccB9422f4A1d8DEf600e8d15D4539a6CB24
> block number: 15085755
> block timestamp: 1725939798
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840644595392124084
> gas used: 837334 (0xcc6d6)
> gas price: 0.001000259 gwei
> value sent: 0 ETH
> total cost: 0.000000837550869506 ETH

deployed erc1155LazyProxy at 0x598B6ccB9422f4A1d8DEf600e8d15D4539a6CB24

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000002906978493143 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x2541c3877a4ad2b9190c98b3f12137d35876df2a4b00acada06bfc859fe923ce
> Blocks: 2 Seconds: 4
> contract address: 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
> block number: 15085767
> block timestamp: 1725939822
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840397056732267547
> gas used: 4013474 (0x3d3da2)
> gas price: 0.00100026 gwei
> value sent: 0 ETH
> total cost: 0.00000401451750324 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x3723fb921f7eacc81e13d16f6e960cc585c3d8c421aeca831588f39b16143f56
> Blocks: 3 Seconds: 4
> contract address: 0xAF16afA5535Ab3df68C4569b225EefFE4785D18B
> block number: 15085773
> block timestamp: 1725939834
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840336557637363157
> gas used: 950600 (0xe8148)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.0000009508481066 ETH

deployed erc721 at 0xAF16afA5535Ab3df68C4569b225EefFE4785D18B

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xc5fc7d81d4d2e9d1a9c45794b821c55988248f35749fa36c36008affccc2efd3
> Blocks: 2 Seconds: 4
> contract address: 0x956A6fb23fbFE317f2970C336581783b4e14699B
> block number: 15085778
> block timestamp: 1725939844
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840065442312004198
> gas used: 4584661 (0x45f4d5)
> gas price: 0.00100026 gwei
> value sent: 0 ETH
> total cost: 0.00000458585301186 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x8921911ed7bd716c8b0ba200f36e92d5c14073482bc0e031acc324fb101edf09
> Blocks: 2 Seconds: 4
> contract address: 0x2eFAa8e79f47d9c1348af88cB8FeA3A08870dB72
> block number: 15085784
> block timestamp: 1725939856
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.840004960222537069
> gas used: 933599 (0xe3edf)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000000933842669339 ETH

deployed erc1155 at 0x2eFAa8e79f47d9c1348af88cB8FeA3A08870dB72

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x1c499df41dffb25b25ab555389cf64f1cc8ce3064fc2c8e678b2d26d123e59d8
> Blocks: 2 Seconds: 4
> contract address: 0xDdaD5c397B999EdAa37ED42af9d1829F800898Bb
> block number: 15085789
> block timestamp: 1725939866
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839983551862104643
> gas used: 356388 (0x57024)
> gas price: 0.00100026 gwei
> value sent: 0 ETH
> total cost: 0.00000035648066088 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x8f99057f0ea8b7a0e9025f21cb72fecd944b5a2c93bf07277fc2881a2d8ccd28
> Blocks: 2 Seconds: 4
> contract address: 0xb27F7B0238Ba3f65E074c30883CcaF4C39010672
> block number: 15085794
> block timestamp: 1725939876
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.83996295768513476
> gas used: 356400 (0x57030)
> gas price: 0.001000262 gwei
> value sent: 0 ETH
> total cost: 0.0000003564933768 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000011198035328719 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xcd76369aa81411d1184af5791569ee4dab913ed0de6b17d8c6d0495c4d28b377
> Blocks: 2 Seconds: 4
> contract address: 0x8463dded0926e22A58787C7b961b2fCaccD43f9c
> block number: 15085802
> block timestamp: 1725939892
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839730883875588646
> gas used: 3895208 (0x3b6fa8)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000003896224649288 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xc700d7ad35fa1a5173bacf02a441c987b5438d8a883f98686fd120ce29167c26
> Blocks: 2 Seconds: 4
> contract address: 0xaF0DD2cF081dcF012876e45F314a68f3dEfCe0Da
> block number: 15085807
> block timestamp: 1725939902
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839673202391362502
> gas used: 804151 (0xc4537)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000000804360883411 ETH

deployed exchangeV2 at 0xaF0DD2cF081dcF012876e45F314a68f3dEfCe0Da

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000004700585532699 ETH

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

old impl 721 = 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
new impl 721 = 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
old impl 1155 = 0x956A6fb23fbFE317f2970C336581783b4e14699B
new impl 1155 = 0x956A6fb23fbFE317f2970C336581783b4e14699B

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

> transaction hash: 0xb03a9557d1604a45de6e7fd2f947d469f6135b39ffbd96780bde75af17945b55
> Blocks: 2 Seconds: 4
> contract address: 0x843aB0841a78FFd264aeA8cBBAE1D4222b23DEb1
> block number: 15085869
> block timestamp: 1725940026
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.83935939016067116
> gas used: 3816017 (0x3a3a51)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000003817012980437 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4481521ba8e79536d1b9e31ac91170e1c860fa9c72bd0abbfcd399d5c769b6ac
> Blocks: 2 Seconds: 4
> contract address: 0x05E6D034e1Fc6cb3C6E0A36B6f19bcE819786234
> block number: 15085874
> block timestamp: 1725940036
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839291514969249462
> gas used: 930613 (0xe3335)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000000930855889993 ETH

deployed erc721 minimal at 0x05E6D034e1Fc6cb3C6E0A36B6f19bcE819786234

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x555598cba661f3f2f16edc8516bce98c7cf716772c19a733154d477f4432d3ff
> Blocks: 2 Seconds: 4
> contract address: 0x6E8bdD4B64DfB16fd611c20D230A33FcCFa48b34
> block number: 15085879
> block timestamp: 1725940046
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839267485244140714
> gas used: 356400 (0x57030)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.0000003564930204 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x2250f71141b4c045b92be9d7092abb29d586e1e57f751dec2028e00cfbd4aba1
> Blocks: 2 Seconds: 4
> contract address: 0x7B7aE00a388D3147Ccdf27C37317a80A00b080E7
> block number: 15085884
> block timestamp: 1725940056
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839172431677003442
> gas used: 1322013 (0x142c1d)
> gas price: 0.001000261 gwei
> value sent: 0 ETH
> total cost: 0.000001322358045393 ETH

deployed factory721 minimal at 0x7B7aE00a388D3147Ccdf27C37317a80A00b080E7

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000006426719936223 ETH

# 13_update_ERC721.js

old impl 721 = 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C
new impl 721 = 0x95f6EE87a1BFF46D412eBFe6028ebF64a0b10B0C

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

old impl 1155 = 0x956A6fb23fbFE317f2970C336581783b4e14699B
new impl 1155 = 0x956A6fb23fbFE317f2970C336581783b4e14699B

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x459e9cdb616c1662c4ebe060f7dfd33249eb05dbf182e87dc7d66108219b65c4
> Blocks: 2 Seconds: 4
> contract address: 0x99079f610a8CD19C7A05a761B0d4a73A67ee1eD3
> block number: 15085922
> block timestamp: 1725940132
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.839054616827105714
> gas used: 1322001 (0x142c11)
> gas price: 0.001000256 gwei
> value sent: 0 ETH
> total cost: 0.000001322339432256 ETH

deployed factory1155 at 0x99079f610a8CD19C7A05a761B0d4a73A67ee1eD3

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000001322339432256 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x2376d0886d646de7d5ce2c20e42a2ad4b1281d2a3e59eb51bf2db2f4b9522935
> Blocks: 2 Seconds: 4
> contract address: 0x79780B6d60BE56467FEfd13c38B1A22D37CCED7A
> block number: 15085929
> block timestamp: 1725940146
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.83902994967012074
> gas used: 275219 (0x43313)
> gas price: 0.001000256 gwei
> value sent: 0 ETH
> total cost: 0.000000275289456064 ETH

asset matcher for collections deployed at 0x79780B6d60BE56467FEfd13c38B1A22D37CCED7A

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000000275289456064 ETH

# Summary

> Total deployments: 22
> Final cost: 0.000029685154242072 ETH

➜ deploy git:(master) ✗
