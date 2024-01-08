Last login: Thu Jan 4 09:55:09 on ttys003
➜ ~ cd Development/Liteflow/rarible-protocol-contracts
➜ rarible-protocol-contracts git:(master) ✗ code .
➜ rarible-protocol-contracts git:(master) ✗ cd deploy
➜ deploy git:(master) ✗ npm run truffle -- migrate --network neonevm_devnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm_devnet

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

> Network name: 'neonevm_devnet'
> Network id: 245022926
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 1_initial_migration.js

tx DeferredChain {
\_accept: [Function (anonymous)],
\_reject: [Function (anonymous)],
chain: Promise { <pending> },
\_done: [Function (anonymous)],
\_error: [Function (anonymous)],
await: Promise { <pending> },
started: false
}

Deploying 'Migrations'

---

> transaction hash: 0x82b1b4a58739195c24667d57124387b65bb82b15997628282869b1b191d437f4
> Blocks: 34 Seconds: 13
> contract address: 0x238c0917a3D9FD0D23Ba5CF5be72A5594B4C982E
> block number: 270987354
> block timestamp: 1704682978
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 97.50874938307780376
> gas used: 19324000 (0x126dc60)
> gas price: 71.999075753 gwei
> value sent: 0 ETH
> total cost: 1.391310139850972 ETH

await tx undefined

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 1.391310139850972 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x5351665a163a125e8cd11e5b2156a7bc6f77e7106b20b4846848a869d120eccf
> Blocks: 27 Seconds: 11
> contract address: 0x838F12cfcD51944fe70d2a9474C24e0D5Cfc33C5
> block number: 270987448
> block timestamp: 1704683013
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 92.77341625021147568
> gas used: 65759360 (0x3eb6880)
> gas price: 71.999075753 gwei
> value sent: 0 ETH
> total cost: 4.73461314210879808 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x1b90161cdafa4bb8e55beddc000f66691d24fc6f9f264d60e645ea41df10d2c0
> Blocks: 23 Seconds: 9
> contract address: 0x2Bf8458E4B32C76912fccAea829B5A403570588B
> block number: 270987555
> block timestamp: 1704683053
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 90.62234018342151636
> gas used: 29876440 (0x1c7e0d8)
> gas price: 71.999075753 gwei
> value sent: 0 ETH
> total cost: 2.15107606678995932 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4c47da54344260f4ef0b08d8884e8fd3ae748f5b173a848c46ce3af74780ccea
> Blocks: 34 Seconds: 13
> contract address: 0xB2e59Cca2cC32A52827224A117fde827084b15ab
> block number: 270987616
> block timestamp: 1704683076
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 88.17689157547087136
> gas used: 33965000 (0x20643c8)
> gas price: 71.999075753 gwei
> value sent: 0 ETH
> total cost: 2.445448607950645 ETH

deployed royaltiesRegistry at 0xB2e59Cca2cC32A52827224A117fde827084b15ab

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 9.3311378168494024 ETH

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

> transaction hash: 0xe6ee13edb908a02775b864e5b42fbdb936e414a525c924d4ed8efa0b9eac45a3
> ⠏ Blocks: 240 Seconds: 89^C%
> ➜ deploy git:(master) ✗ npm run truffle -- migrate --network neonevm_devnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm_devnet

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

> Network name: 'neonevm_devnet'
> Network id: 245022926
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0x7f71b2c33907e0ba62ca2a3dcd86159b21e7210eb788f665ee0974e247d7b4a6
> Blocks: 34 Seconds: 15
> contract address: 0x54D424Eb644e9ba1AfAdC71232D900c15a6fe30A
> block number: 270988644
> block timestamp: 1704683457
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 86.7285935450259116
> gas used: 35999280 (0x2254e30)
> gas price: 40.171305042 gwei
> value sent: 0 ETH
> total cost: 1.44613805817236976 ETH

deployed transferProxy at 0x54D424Eb644e9ba1AfAdC71232D900c15a6fe30A

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0x2cef2c26f40e38162a261f24c9940b5dcbb980dc6fd6ccdc38a2f23b6d88e450
> Blocks: 33 Seconds: 18
> contract address: 0x16Cf17dCa26c86C57bF3CaCA8424511D7Fb150b4
> block number: 270988736
> block timestamp: 1704683491
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 85.36941595446719152
> gas used: 33460840 (0x1fe9268)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 1.35877580856676008 ETH

deployed erc20TransferProxy at 0x16Cf17dCa26c86C57bF3CaCA8424511D7Fb150b4

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0xc155311d287829f9d6a611273572911cf9e744975dede07e7aa83280505fd0bb
> Blocks: 43 Seconds: 17
> contract address: 0xDb9C2d028E39C6cE789E58f509916BDe25DF4557
> block number: 270988822
> block timestamp: 1704683523
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 183.64552064937255416
> gas used: 42442280 (0x2879e28)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 1.72349359204421736 ETH

deployed erc721LazyProxy at 0xDb9C2d028E39C6cE789E58f509916BDe25DF4557

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x262e4e0598826d5faf8b5635577055e57b4445e4290ff5b8ffc52297a5f2cb79
> Blocks: 24 Seconds: 9
> contract address: 0xC1317150720f939374f7DdEd6F2bF71dfbc8DFF9
> block number: 270988911
> block timestamp: 1704683556
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 181.9373779870007904
> gas used: 42054480 (0x281b350)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 1.70774583261671376 ETH

deployed erc1155LazyProxy at 0xC1317150720f939374f7DdEd6F2bF71dfbc8DFF9

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 6.23615329140006096 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x5a568e241d8a8c10397b891433e7faeccd798e689c070856541ebfe466e4f6db
> Blocks: 35 Seconds: 13
> contract address: 0x58cbf9117d0872F3527a5B093891f3E6ddff1cbf
> block number: 270989178
> block timestamp: 1704683654
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 176.06943907850879208
> gas used: 144482360 (0x89ca038)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 5.86713111603395832 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x65986a7fe3b03e4f216a15d4782f4a83040a54e2849f8028a5d8d44bb38d0bdd
> Blocks: 87 Seconds: 33
> contract address: 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
> block number: 270989304
> block timestamp: 1704683701
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 174.19219407683385984
> gas used: 46228520 (0x2c16428)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 1.87724500167493224 ETH

deployed erc721 at 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35

Deploying 'ERC1155Rarible'

---

> transaction hash: 0x3312ab7e1eca38b1f556c61649c2a5efbd4fd7e2a2d76545f90770f502576f6d
> Blocks: 45 Seconds: 17
> contract address: 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
> block number: 270989369
> block timestamp: 1704683725
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 167.57753899271196168
> gas used: 162890680 (0x9b583b8)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 6.61465508412189816 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x340ebf4f913a580a3b4dd715c48cfb199b8d0738d7c596fc03c860d7a0965c7a
> Blocks: 77 Seconds: 29
> contract address: 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
> block number: 270989509
> block timestamp: 1704683777
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 165.69096715920281328
> gas used: 46458200 (0x2c4e558)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 1.8865718335091484 ETH

deployed erc1155 at 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0x0f6b255e53ee3022e97a25d9e1642c2a9531823c3f2403cb562246bf7438d737
> Blocks: 76 Seconds: 29
> contract address: 0xb5FD9dDD34D783a07c866B37a8D7F25385b19210
> block number: 270989603
> block timestamp: 1704683812
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 164.69453561301022176
> gas used: 24804560 (0x17a7cd0)
> gas price: 40.171305042 gwei
> value sent: 0 ETH
> total cost: 0.99643154619259152 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xcb1b32daefff29187cac16d823b0df2863c2c62606f6ae5aafbaa48dd80b60b3
> Blocks: 13 Seconds: 5
> contract address: 0xc6920feb44D4fA10dE7097d608632fB47394A4a2
> block number: 270989760
> block timestamp: 1704683872
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 163.69810406681763024
> gas used: 24804560 (0x17a7cd0)
> gas price: 40.171305042 gwei
> value sent: 0 ETH
> total cost: 0.99643154619259152 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 18.23846612772512016 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x052de28551d294846629ba31021e91262c4d31902314cc7f353f8e118bdb23b3
> Blocks: 56 Seconds: 21
> contract address: 0x295125F9A15E450F404625278222afdDD88bA08F
> block number: 270989962
> block timestamp: 1704683946
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 158.07622671348936768
> gas used: 140656320 (0x8623ec0)
> gas price: 39.966005608 gwei
> value sent: 0 ETH
> total cost: 5.62147127392064256 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4ff73e6ba7470b97698575fb9ea42cda3379417bac46230c69fc2b226a1b4f00
> Blocks: 35 Seconds: 13
> contract address: 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1
> block number: 270990085
> block timestamp: 1704683991
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 156.45598297430382544
> gas used: 40326440 (0x2675528)
> gas price: 40.178199196 gwei
> value sent: 0 ETH
> total cost: 1.62024373918554224 ETH

deployed exchangeV2 at 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 7.2417150131061848 ETH

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

Deploying 'ERC721RaribleMinimal'

---

> transaction hash: 0xefe90e9dc8885c584e8d56ccf8cc75e0607859ee6d9edfe5c23627c2402e76d3
> Blocks: 34 Seconds: 13
> contract address: 0xC74A89214fe516F10d59989CbACa838EA6DAfcA8
> block number: 270991337
> block timestamp: 1704684457
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 150.56626678825475976
> gas used: 138108960 (0x83b6020)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 5.60832046638142752 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x2414407920f26ac1b6d9a7c1464e5bbea34d4641f2a10f69f5f590fa38f854a5
> Blocks: 34 Seconds: 14
> contract address: 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
> block number: 270991436
> block timestamp: 1704684494
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 148.70888810315848984
> gas used: 46228520 (0x2c16428)
> gas price: 40.178199196 gwei
> value sent: 0 ETH
> total cost: 1.85737868509626992 ETH

deployed erc721 minimal at 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x3a83839f17bd81f570305ad47f36f5912d2d3926148b80cc3fabba2931e0d234
> Blocks: 34 Seconds: 13
> contract address: 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
> block number: 270991563
> block timestamp: 1704684540
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 147.71245655696589832
> gas used: 24804560 (0x17a7cd0)
> gas price: 40.171305042 gwei
> value sent: 0 ETH
> total cost: 0.99643154619259152 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x12a8c02400f3a0bfdd8b0bdd096373a795386549136a3a261566d367b42e51eb
> Blocks: 55 Seconds: 22
> contract address: 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771
> block number: 270991658
> block timestamp: 1704684576
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 145.49253901069438336
> gas used: 54667080 (0x3422748)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 2.21991754627151496 ETH

deployed factory721 minimal at 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 10.68204824394180392 ETH

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

Error: Unhandled error. ({
code: -32603,
message: 'ESOCKETTIMEDOUT',
data: { originalError: { code: 'ESOCKETTIMEDOUT', connect: false } },
stack: 'Error: ESOCKETTIMEDOUT\n' +
' at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:816:19)\n' +
' at Object.onceWrapper (node:events:627:28)\n' +
' at ClientRequest.emit (node:events:513:28)\n' +
' at TLSSocket.emitRequestTimeout (node:\_http_client:839:9)\n' +
' at Object.onceWrapper (node:events:627:28)\n' +
' at TLSSocket.emit (node:events:525:35)\n' +
' at TLSSocket.Socket.\_onTimeout (node:net:550:8)\n' +
' at listOnTimeout (node:internal/timers:559:17)\n' +
' at processTimers (node:internal/timers:502:7)'
})
at new NodeError (node:internal/errors:387:5)
at Web3ProviderEngine.emit (node:events:502:17)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:57:14
at afterRequest (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:151:21)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:176:21
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at Request.\_callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:36:21)
at self.callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:513:28)
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:819:16)
at Object.onceWrapper (node:events:627:28)
at ClientRequest.emit (node:events:513:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:839:9)
at Object.onceWrapper (node:events:627:28)
at TLSSocket.emit (node:events:525:35)
at TLSSocket.Socket.\_onTimeout (node:net:550:8)
UnhandledRejections detected
Promise {
<rejected> Error: ESOCKETTIMEDOUT
{
"originalError": {
"code": "ESOCKETTIMEDOUT",
"connect": false
}
}
at Object.\_fireError (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-utils/lib/index.js:49:17)
at sendTxCallback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-core-method/lib/index.js:539:30)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-core-requestmanager/lib/index.js:299:20
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at Request.\_callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:36:21)
at self.callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:513:28)
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:819:16)
at Object.onceWrapper (node:events:627:28)
at ClientRequest.emit (node:events:513:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:839:9)
at Object.onceWrapper (node:events:627:28)
at TLSSocket.emit (node:events:525:35)
at TLSSocket.Socket.\_onTimeout (node:net:550:8)
at listOnTimeout (node:internal/timers:559:17)
at processTimers (node:internal/timers:502:7)
} Error: ESOCKETTIMEDOUT
{
"originalError": {
"code": "ESOCKETTIMEDOUT",
"connect": false
}
}
at Object.\_fireError (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-utils/lib/index.js:49:17)
at sendTxCallback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-core-method/lib/index.js:539:30)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/web3-core-requestmanager/lib/index.js:299:20
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:238:9
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/once.js:12:16
at replenish (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:61:25)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/eachOfLimit.js:71:9
at eachLimit (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/eachLimit.js:43:36)
at /Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/async/internal/doLimit.js:9:16
at end (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/index.js:217:5)
at Request.\_callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/@trufflesuite/web3-provider-engine/subproviders/rpc.js:36:21)
at self.callback (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:185:22)
at Request.emit (node:events:513:28)
at ClientRequest.<anonymous> (/Users/nico/Development/Liteflow/rarible-protocol-contracts/node_modules/request/request.js:819:16)
at Object.onceWrapper (node:events:627:28)
at ClientRequest.emit (node:events:513:28)
at TLSSocket.emitRequestTimeout (node:\_http_client:839:9)
at Object.onceWrapper (node:events:627:28)
at TLSSocket.emit (node:events:525:35)
at TLSSocket.Socket.\_onTimeout (node:net:550:8)
at listOnTimeout (node:internal/timers:559:17)
at processTimers (node:internal/timers:502:7)
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Liteflow/rarible-protocol-contracts/deploy
➜ deploy git:(feature/neon-evm) ✗ npm run truffle -- migrate --network neonevm_devnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network neonevm_devnet

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

> Network name: 'neonevm_devnet'
> Network id: 245022926
> Block gas limit: 48000000000000 (0x2ba7def30000)

# 15_upgrade_royalties_registry.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 16_update_ERC1155_deploy_factory.js

old impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
new impl 1155 = 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0xba32db5dcc69515ae13d975848c699c6988175ac2581a6fcf13e1182fb2453bf
> Blocks: 87 Seconds: 33
> contract address: 0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D
> block number: 270993336
> block timestamp: 1704685199
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 143.2689925198986784
> gas used: 54667080 (0x3422748)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 2.21991754627151496 ETH

deployed factory1155 at 0x90Caf0CFBc25214cD021AC5FD4a2ea7Ba1436F1D

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 2.21991754627151496 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xd4513d987026ddb4054a45b4aefca0c444dcb2ff2c5df8712ae37e4e8930614c
> Blocks: 29 Seconds: 26
> contract address: 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA
> block number: 270993482
> block timestamp: 1704685253
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 142.2969358771142272
> gas used: 23927600 (0x16d1b30)
> gas price: 40.607940762 gwei
> value sent: 0 ETH
> total cost: 0.9716505633768312 ETH

asset matcher for collections deployed at 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.9716505633768312 ETH

# Summary

> Total deployments: 2
> Final cost: 3.19156810964834616 ETH

➜ deploy git:(feature/neon-evm) ✗
