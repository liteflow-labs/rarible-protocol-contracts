➜ deploy git:(master) ✗ npm run truffle -- migrate --network ultron_testnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network ultron_testnet

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

> Network name: 'ultron_testnet'
> Network id: 1230
> Block gas limit: 281474976710655 (0xffffffffffff)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0x11a6ab535bec9f34745432888f9bdfa401f4e1e994e8d2672794ef126aee9562
> Blocks: 0 Seconds: 0
> contract address: 0x4d89a53AC48A00ea3D31aA8a3Dd5898d4FacD23E
> block number: 88485
> block timestamp: 1679390426
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.99984165454989
> gas used: 158335 (0x26a7f)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00015834545011 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00015834545011 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0xb38eb935cbcd0d43835416f59e5027accb6bed222489a97aba9591dc4fcc4b53
> Blocks: 0 Seconds: 0
> contract address: 0xfff4E2b15B3897849842301C8cDA001193c04f57
> block number: 88487
> block timestamp: 1679390437
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.997187870125361
> gas used: 2015139 (0x1ebfa3)
> gas price: 1.000285 gwei
> value sent: 0 ETH
> total cost: 0.002015713314615 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x8e4733f623bdbc91e384836ba3650d4bbbefc11b9a2b6eb2bccdf5b67463ea56
> Blocks: 0 Seconds: 0
> contract address: 0x838F12cfcD51944fe70d2a9474C24e0D5Cfc33C5
> block number: 88488
> block timestamp: 1679390444
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.996153353851793
> gas used: 1034448 (0xfc8d0)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.001034516273568 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x42ce7eaec32d767275fe8f803645ef1b4831d7a2283b4b4a4d3849c0483d4a52
> Blocks: 0 Seconds: 0
> contract address: 0x2Bf8458E4B32C76912fccAea829B5A403570588B
> block number: 88489
> block timestamp: 1679390451
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.994975654128741
> gas used: 1177622 (0x11f816)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.001177699723052 ETH

deployed royaltiesRegistry at 0x2Bf8458E4B32C76912fccAea829B5A403570588B

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.004227929311235 ETH

# 3_royalties_provider_v2legacy.js

⠹ Saving migration to chain.^C%
➜ deploy git:(master) ✗ code ~/.ethereum/ultron_testnet.json
➜ deploy git:(master) ✗ npm run truffle -- migrate --network ultron_testnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network ultron_testnet

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

> Network name: 'ultron_testnet'
> Network id: 1230
> Block gas limit: 281474976710655 (0xffffffffffff)

# 4_royalties_provider_art_blocks.js

⠧ Saving migration to chain.
transaction underpriced
Truffle v5.4.22 (core: 5.4.22)
Node v16.19.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR! in workspace: @rarible/deploy@0.0.2
npm ERR! at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜ deploy git:(master) ✗ npm run truffle -- migrate --network ultron_testnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network ultron_testnet

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

> Network name: 'ultron_testnet'
> Network id: 1230
> Block gas limit: 281474976710655 (0xffffffffffff)

# 4_royalties_provider_art_blocks.js

> Saving migration to chain.

---

> Total cost: 0 ETH

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0x2fe3190392fcfc892723d8205c8477fcb4b1a68fdda02707580216866fc7fad8
> Blocks: 0 Seconds: 0
> contract address: 0x9C2fb677C316799A41f4Ff6cA414E38EdBbdBB4f
> block number: 88493
> block timestamp: 1679390555
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.992367553757487
> gas used: 734034 (0xb3352)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000734082446244 ETH

^C%
➜ deploy git:(master) ✗ npm run truffle -- migrate --network ultron_testnet

> @rarible/deploy@0.0.2 truffle
> truffle migrate --network ultron_testnet

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

> Network name: 'ultron_testnet'
> Network id: 1230
> Block gas limit: 281474976710655 (0xffffffffffff)

# 5_initial_transfer_proxies.js

Deploying 'TransferProxy'

---

> transaction hash: 0xf6c22320753564c536f2ebad3792cde02368cfbee998a7edb1d380009ecca216
> Blocks: 0 Seconds: 0
> contract address: 0xb77F7CE833A62cd55641A281513D0C3EC5F1d715
> block number: 88495
> block timestamp: 1679390579
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.991547820658673
> gas used: 734034 (0xb3352)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000734082446244 ETH

deployed transferProxy at 0xb77F7CE833A62cd55641A281513D0C3EC5F1d715

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xdf4aa6050e472f2e81799aa1b5078831d2243e666f7b9276759d5b4e2e80a55a
> Blocks: 0 Seconds: 0
> contract address: 0x2D5fDAd68BDeDc567F083eb1f995B9Fe6Eb61000
> block number: 88497
> block timestamp: 1679390588
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.990798771224673
> gas used: 663355 (0xa1f3b)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00066339878143 ETH

deployed erc20TransferProxy at 0x2D5fDAd68BDeDc567F083eb1f995B9Fe6Eb61000

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x5dddaa2264274627c8526153b14792b25885a0789da1dfafbc64d87660f9601a
> Blocks: 0 Seconds: 0
> contract address: 0xd30cf6be924910B1D80B642aD7E7080B4cb89E8E
> block number: 88499
> block timestamp: 1679390597
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.989798952240975
> gas used: 914108 (0xdf2bc)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000914168331128 ETH

deployed erc721LazyProxy at 0xd30cf6be924910B1D80B642aD7E7080B4cb89E8E

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x8615f4263346f192ffc0481d663fa48d2194ba35555793d76420e01612b015f5
> Blocks: 0 Seconds: 0
> contract address: 0xcFadAc4cf078Fe559021EC5Afc553580E2E57469
> block number: 88501
> block timestamp: 1679390606
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.988809840963939
> gas used: 903393 (0xdc8e1)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000903452623938 ETH

deployed erc1155LazyProxy at 0xcFadAc4cf078Fe559021EC5Afc553580E2E57469

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00321510218274 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x6e3ef0042d56ea6f61ac72349c53bd3f11ffa9ec9f0dfcc4c55af5fc8b41622d
> Blocks: 0 Seconds: 0
> contract address: 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
> block number: 88504
> block timestamp: 1679390622
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.984583339033221
> gas used: 4112634 (0x3ec0fa)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.004112905433844 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x3008040aeb48fd1c9f47cbce9436f32674ac0ba741a7d0bbcf397c4aca5fa824
> Blocks: 0 Seconds: 0
> contract address: 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87
> block number: 88505
> block timestamp: 1679390630
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.983616270210891
> gas used: 967005 (0xec15d)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00096706882233 ETH

deployed erc721 at 0x127f03c14c08130dDAc83B8698F0FF2b4f41AE87

Deploying 'ERC1155Rarible'

---

> transaction hash: 0x7fd31db2be2ecc687a919829289110ada01b379df19744237924d7f5a18c92e6
> Blocks: 0 Seconds: 0
> contract address: 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
> block number: 88506
> block timestamp: 1679390638
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.978918030147511
> gas used: 4697930 (0x47af4a)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00469824006338 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xce035e5b71c3a5b83cd499803fec323754f0c9950240f5b07073c91af18e9c83
> Blocks: 0 Seconds: 0
> contract address: 0xb5FD9dDD34D783a07c866B37a8D7F25385b19210
> block number: 88507
> block timestamp: 1679390646
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.977966838372997
> gas used: 951129 (0xe8359)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000951191774514 ETH

deployed erc1155 at 0xb5FD9dDD34D783a07c866B37a8D7F25385b19210

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xe1fef97f33c47f36b930c50b0a4a156b9770f50075edb176cb8d51dea78773be
> Blocks: 0 Seconds: 0
> contract address: 0xc6920feb44D4fA10dE7097d608632fB47394A4a2
> block number: 88508
> block timestamp: 1679390653
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.977550198876605
> gas used: 416612 (0x65b64)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000416639496392 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xecd1b20020380daf83960e6922f1c8724c4546ab0f6711ae66bc6786369e1341
> Blocks: 0 Seconds: 0
> contract address: 0xd3E7fbfb540eFF317b46e63958B6d3131A6612f8
> block number: 88509
> block timestamp: 1679390660
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.977133548379487
> gas used: 416623 (0x65b6f)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000416650497118 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.011562696087578 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xeb063b056a5abdd6b538aea3927dbb750843525673ed59d33d0243b447ba3430
> Blocks: 0 Seconds: 0
> contract address: 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1
> block number: 88511
> block timestamp: 1679390673
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.973113901100275
> gas used: 3991446 (0x3ce796)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.003991709435436 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x76c315b0cd0ab0c567533a6c2da3b78c13a2996dc1d7e6d218c57fafde5a9ab3
> Blocks: 0 Seconds: 0
> contract address: 0x365Ef9Fa96C8BBb46c02E9fF59b413eA975223Ca
> block number: 88512
> block timestamp: 1679390680
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.972296948184941
> gas used: 816899 (0xc7703)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000816952915334 ETH

deployed exchangeV2 at 0x365Ef9Fa96C8BBb46c02E9fF59b413eA975223Ca

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00480866235077 ETH

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

old impl 721 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
new impl 721 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
old impl 1155 = 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
new impl 1155 = 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d

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

> transaction hash: 0xb105f47976581445cd729198268e8942af855ead2f6cdc8ed8c304e55d626a3d
> Blocks: 0 Seconds: 0
> contract address: 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
> block number: 88529
> block timestamp: 1679390762
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.967824344012547
> gas used: 3910298 (0x3baa9a)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.003910556079668 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x44c8c6821207617b1d16b4b600ede76bcf011af01d24724c380f5b94ff591bbc
> Blocks: 0 Seconds: 0
> contract address: 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2
> block number: 88530
> block timestamp: 1679390769
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.966877045494971
> gas used: 947236 (0xe7424)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000947298517576 ETH

deployed erc721 minimal at 0x84830C3013d9859bB4441eBaFc070f8aB383Afd2

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x17b10f00856ea515a4f25d288b27ddff1f81e13e6f357c622d7ae782fb8be380
> Blocks: 0 Seconds: 0
> contract address: 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771
> block number: 88531
> block timestamp: 1679390777
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.966460394997853
> gas used: 416623 (0x65b6f)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.000416650497118 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x8db3bf2451e5a5630ed97b554c67bc515c7c1df433ea6e16ab530eeb622d796b
> Blocks: 0 Seconds: 0
> contract address: 0x333A620dD6B1d72c6C81e5570BB8fa741FDd127F
> block number: 88532
> block timestamp: 1679390783
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.965025509301647
> gas used: 1434791 (0x15e4a7)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.001434885696206 ETH

deployed factory721 minimal at 0x333A620dD6B1d72c6C81e5570BB8fa741FDd127F

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.006709390790568 ETH

# 13_update_ERC721.js

old impl 721 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35
new impl 721 = 0xa1fD18dc2e384e4BDE63675eE5106788FeDbcB35

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

old impl 1155 = 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d
new impl 1155 = 0x171573Fd7B44C87CDDdD4684A9975184c9d1275d

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x4256cdb9e00092f90dacd77f42b5862740e38bb4a2df0261461479d11e45f23d
> Blocks: 0 Seconds: 0
> contract address: 0x7A4c9573c4c0609CDE08290B01B0e5365932292B
> block number: 88542
> block timestamp: 1679390837
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.963333995669115
> gas used: 1434802 (0x15e4b2)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.001434896696932 ETH

deployed factory1155 at 0x7A4c9573c4c0609CDE08290B01B0e5365932292B

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.001434896696932 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x5b4350fa8eb0088a856e910bbc51b6b0454751948f8e3741d0307b755ce24af6
> Blocks: 0 Seconds: 0
> contract address: 0x4fD011098061D42DCc180458400aeE3dCB20086E
> block number: 88544
> block timestamp: 1679390847
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.962958399881429
> gas used: 347635 (0x54df3)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00034765794391 ETH

asset matcher for collections deployed at 0x4fD011098061D42DCc180458400aeE3dCB20086E

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00034765794391 ETH

# Summary

> Total deployments: 18
> Final cost: 0.028078406052498 ETH

---

➜ deploy git:(master) ✗ npm run truffle -- exec ./scripts/deploy-erc721.js --network ultron_testnet --name "Liteflow 721" --symbol "LTF721" --baseURI ipfs:/ --factoryAddress 0x333a620dd6b1d72c6c81e5570bb8fa741fdd127f

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc721.js --network ultron_testnet --name Liteflow 721 --symbol LTF721 --baseURI ipfs:/ --factoryAddress 0x333a620dd6b1d72c6c81e5570bb8fa741fdd127f

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> Using network 'ultron_testnet'.

name: Liteflow 721
symbol: LTF721
baseURI: ipfs:/
factoryAddress: 0x333a620dd6b1d72c6c81e5570bb8fa741fdd127f
using factory at 0x333A620dD6B1d72c6C81e5570BB8fa741FDd127F
salt 0x0f38573d3cba192b313d5e44b13acd04848781b7735d2d085d363e33c0a1013b
Confirm info? type yes to confirm: yes
deploying...
tx: 0x361d21763de8fb81f59083205a0c27056a9131653c8124befc38870fbe7a3c2e
token deployed at: 0x23C44d91F566ad85335898e488a9521046264c08
➜ deploy git:(master) ✗ npm run truffle -- exec ./scripts/deploy-erc1155.js --network ultron_testnet --name "Liteflow 1155" --symbol "LTF1155" --baseURI ipfs:/ --factoryAddress 0x7a4c9573c4c0609cde08290b01b0e5365932292b

> @rarible/deploy@0.0.2 truffle
> truffle exec ./scripts/deploy-erc1155.js --network ultron_testnet --name Liteflow 1155 --symbol LTF1155 --baseURI ipfs:/ --factoryAddress 0x7a4c9573c4c0609cde08290b01b0e5365932292b

> Warning: possible unsupported (undocumented in help) command line option(s): --name,--symbol,--baseURI,--factoryAddress
> Loading etherscan key from /Users/nico/.ethereum/etherscan.json
> loaded etherscan api key
> creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> Using network 'ultron_testnet'.

name: Liteflow 1155
symbol: LTF1155
baseURI: ipfs:/
factoryAddress: 0x7a4c9573c4c0609cde08290b01b0e5365932292b
using factory at 0x7A4c9573c4c0609CDE08290B01B0e5365932292B
salt 0x119c7a5720bc74f9e987f700376c78602bc6493d8f1bf9a7c069c59691e80e61
Confirm info? type yes to confirm: yes
deploying...
tx: 0x17d46a763477bc6b6c1e78fa08848395f4ee13b8b97eb4f40abae4b651eb6803
token deployed at: 0xBB2E3004f2fceb5F40C95Ac7d1313282241bE57B

---

➜ erc20 git:(master) ✗ npm run truffle -- deploy --network ultron_testnet

> @rarible/tokens@0.7.0 truffle
> truffle deploy --network ultron_testnet

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3

# Compiling your contracts...

> Everything is up to date, there is nothing to compile.

# Starting migrations...

> Network name: 'ultron_testnet'
> Network id: 1230
> Block gas limit: 281474976710655 (0xffffffffffff)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0xe06f3277d87975e6212c513f1cfc874829730e71c04889f7ab54ec731019c105
> Blocks: 0 Seconds: 0
> contract address: 0x3c9389D80Ccc32745B37e9e62308640FEb68bb7F
> block number: 88553
> block timestamp: 1679391175
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.961458039864203
> gas used: 158335 (0x26a7f)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00015834545011 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00015834545011 ETH

# 2_initial_erc20.js

Deploying 'ERC20Test'

---

> transaction hash: 0x4ca34ef99f04001ae12c6cc9ddb6ebbf95e0ccf9c21e5a7b75e8abf2f78f4b1f
> Blocks: 0 Seconds: 0
> contract address: 0x3fD6Ce8aD460eA25cE7eFBdb9B1344E7A0963D16
> block number: 88555
> block timestamp: 1679391185
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 9.960584301201257
> gas used: 830370 (0xcaba2)
> gas price: 1.000066 gwei
> value sent: 0 ETH
> total cost: 0.00083042480442 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00083042480442 ETH

# Summary

> Total deployments: 2
> Final cost: 0.00098877025453 ETH
