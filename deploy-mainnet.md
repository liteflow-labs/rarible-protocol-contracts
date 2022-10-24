➜  deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network mainnet

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9

Compiling your contracts...
===========================
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
    function isValidSignature(bytes32 _hash, bytes calldata _signature) virtual external view returns (bytes4 magicValue);
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
    function _burned(uint256 tokenId) internal returns (bool) {
    ^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'mainnet'
> Network id:      1
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x893d5fcc5f6b19f551f41c1409d4546816af2f69472eb00542c7f3e759f79f7f
   > Blocks: 0            Seconds: 8
   > contract address:    0x2d1472930194dcA9E625Eb501e6528564CA37547
   > block number:        15817441
   > block timestamp:     1666608179
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.443161238058672386
   > gas used:            155006 (0x25d7e)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.002170084 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.002170084 ETH


2_initial_RoyaltiesRegistry.js
==============================

   Deploying 'RoyaltiesRegistry'
   -----------------------------
   > transaction hash:    0xa2ac6ffc08f7b91764b15b6e7d00a99c4a7a3c75df0ad4b521301d20c95c60ae
   > Blocks: 0            Seconds: 4
   > contract address:    0xc4A4A255450Dd5E3EC951805701125984b71b007
   > block number:        15817444
   > block timestamp:     1666608215
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.420508790058672386
   > gas used:            1572377 (0x17fe19)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.022013278 ETH


   Deploying 'ProxyAdmin'
   ----------------------
   > transaction hash:    0x9701bde0cfc40fc2e0c7953d87d9d255af5d98cef80eb5e4b9d464365b5058ad
   > Blocks: 1            Seconds: 16
   > contract address:    0x7983a0D466b62Eec1F55F7051168B2d1543FaFE2
   > block number:        15817446
   > block timestamp:     1666608239
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.413732510058672386
   > gas used:            484020 (0x762b4)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.00677628 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xb1178df31e0b4b2fb531034cb25d0c8b2799f5d2b6a6adb07c75a382c9944957
   > Blocks: 1            Seconds: 8
   > contract address:    0xE3c11fB8436Fa418900B06547fC27d1c9A71f877
   > block number:        15817447
   > block timestamp:     1666608251
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.404741500058672386
   > gas used:            642215 (0x9cca7)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.00899101 ETH

deployed royaltiesRegistry at 0xE3c11fB8436Fa418900B06547fC27d1c9A71f877

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.037780568 ETH


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
   > transaction hash:    0x3cd3b29e58f94e9c115057067cf6aea8c0517810e17eda0023408e2ec1ab15a3
   > Blocks: 1            Seconds: 16
   > contract address:    0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85
   > block number:        15817452
   > block timestamp:     1666608311
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.394457212058672386
   > gas used:            648927 (0x9e6df)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.009084978 ETH

deployed transferProxy at 0x917a509Ac87b17AaFD241D9C0Cd030F89C44AE85

   Deploying 'ERC20TransferProxy'
   ------------------------------
   > transaction hash:    0x88a351dc314fe7813554740124137781dc14af075290666cd29f9bd5886e1630
   > Blocks: 18           Seconds: 212
   > contract address:    0xbB71e9498617bA0026601f87876e59BE96fc3314
   > block number:        15817471
   > block timestamp:     1666608539
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.385510736058672386
   > gas used:            570395 (0x8b41b)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.00798553 ETH

deployed erc20TransferProxy at 0xbB71e9498617bA0026601f87876e59BE96fc3314

   Deploying 'ERC721LazyMintTransferProxy'
   ---------------------------------------
   > transaction hash:    0xcb2f0bb93650ec28112c4f7ce6ccc79d28a87962b53bcacb34579209b4bf1a34
   > Blocks: 1            Seconds: 16
   > contract address:    0xaf452717A901AF5D3B87e68544dba9402CCd5895
   > block number:        15817480
   > block timestamp:     1666608647
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.372663664058672386
   > gas used:            849009 (0xcf471)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.011886126 ETH

deployed erc721LazyProxy at 0xaf452717A901AF5D3B87e68544dba9402CCd5895

   Deploying 'ERC1155LazyMintTransferProxy'
   ----------------------------------------
   > transaction hash:    0x25339221135df6626019cf75da6b9a53eb21f0c05aa0eabdfa1a33f259e6f0c6
   > Blocks: 0            Seconds: 8
   > contract address:    0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA
   > block number:        15817483
   > block timestamp:     1666608683
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.359983136058672386
   > gas used:            837104 (0xcc5f0)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.011719456 ETH

deployed erc1155LazyProxy at 0x5D93fBE4Bfd38CcdB24Ad04A94eF21fa8427B3bA

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04067609 ETH


6_tokens_and_factories.js
=========================

   Deploying 'ERC721Rarible'
   -------------------------
   > transaction hash:    0xf6566b6d651183604fd553655fcc0e59337f5c77a276548246c39b74cf3aba6c
   > Blocks: 2            Seconds: 16
   > contract address:    0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2
   > block number:        15817488
   > block timestamp:     1666608743
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.302449730058672386
   > gas used:            4012326 (0x3d3926)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.056172564 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0x1ae095f02ba251a30ad83afaec7e914f64459634e683d8ed3901f7a10b0f3b19
   > Blocks: 0            Seconds: 4
   > contract address:    0x31D56e268357937407EA179ce72e93B2d9c5612E
   > block number:        15817489
   > block timestamp:     1666608755
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.289145250058672386
   > gas used:            950320 (0xe8030)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.01330448 ETH

deployed erc721 at 0x31D56e268357937407EA179ce72e93B2d9c5612E

   Deploying 'ERC1155Rarible'
   --------------------------
   > transaction hash:    0x0860c3a19b1407be687ef37ddc6f460e99e96851f99d185ca34745ce49b70483
   > Blocks: 1            Seconds: 4
   > contract address:    0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566
   > block number:        15817490
   > block timestamp:     1666608767
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.224978392058672386
   > gas used:            4583347 (0x45efb3)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.064166858 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0x97363712736f5984eba5f94c3b083ae6c160b6a61e66c83a64e3824e2a6a7364
   > Blocks: 2            Seconds: 16
   > contract address:    0x9ea8329a72B1388A7cDa3fe7DDD99f97a6794c85
   > block number:        15817492
   > block timestamp:     1666608791
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.211911758058672386
   > gas used:            933331 (0xe3dd3)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.013066634 ETH

deployed erc1155 at 0x9ea8329a72B1388A7cDa3fe7DDD99f97a6794c85

   Deploying 'ERC721RaribleBeacon'
   -------------------------------
   > transaction hash:    0x0b3c0994f98d681a3129d0517545c16547131521301f84b16046c66e6ebaa368
   > Blocks: 2            Seconds: 20
   > contract address:    0xDE7064d5C8ab39E1CF149177F13C0AB803dA03d2
   > block number:        15817494
   > block timestamp:     1666608815
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.206923670058672386
   > gas used:            356292 (0x56fc4)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.004988088 ETH


   Deploying 'ERC1155RaribleBeacon'
   --------------------------------
   > transaction hash:    0x32a62943d982e4e23c710c99a2d98ee2e65616be62610060843e5145ad2966d6
   > Blocks: 2            Seconds: 16
   > contract address:    0x6CfA6462CfF088F611c8FF468984633406cdE029
   > block number:        15817496
   > block timestamp:     1666608839
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.201935414058672386
   > gas used:            356304 (0x56fd0)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.004988256 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.15668688 ETH


7_initial_ExchangeV2.js
=======================

   Deploying 'ExchangeV2'
   ----------------------
   > transaction hash:    0xdb022184b117205748bf41e9b9d16d4a9faec8dd98234db4080209590963bfba
   > Blocks: 1            Seconds: 8
   > contract address:    0xf4DDD8Cc14caf1895e8980c5dBB3114A450FB3E1
   > block number:        15817498
   > block timestamp:     1666608863
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.147018328058672386
   > gas used:            3894094 (0x3b6b4e)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.054517316 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xdc8539223ae7ca73e0ee46dd554f2d57c4c88175f512ec011843632bf900eddd
   > Blocks: 2            Seconds: 16
   > contract address:    0x332A1cAE13Ffd298d4a477e8d910d67a854fEB9D
   > block number:        15817500
   > block timestamp:     1666608887
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.135764078058672386
   > gas used:            803875 (0xc4423)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.01125425 ETH

deployed exchangeV2 at 0x332A1cAE13Ffd298d4a477e8d910d67a854fEB9D

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.065771566 ETH


8_add_operator_proxies.js
=========================

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


9_deploy_legacy.js
==================
{
  communityWallet: '0x3Ae9Bf5331e076b55B61933206f797F4375D11D9',
  deploy_CryptoPunks: false,
  address_CryptoPunks: '0x0000000000000000000000000000000000000000'
}

   > Saving migration to chain.
   -------------------------------------
   > Total cost:                   0 ETH


10_update_tokens.js
===================
old impl 721 = 0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2
new impl 721 = 0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2
old impl 1155 = 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566
new impl 1155 = 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566

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
   > transaction hash:    0xf4d2bfeb12bdf9a83685266a5e1a2e6302ef3ea5ede933183639b607af8ba6cc
   > Blocks: 0            Seconds: 4
   > contract address:    0xa5f97D30165371b91C5ab0974767C56E5aE96eF9
   > block number:        15817522
   > block timestamp:     1666609151
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.073871814058672386
   > gas used:            3814925 (0x3a360d)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.05340895 ETH


   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------

Error:  *** Deployment Failed ***

"TransparentUpgradeableProxy" could not deploy due to insufficient funds
   * Account:  0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   * Balance:  73871814058672386 wei
   * Message:  insufficient funds for gas * price + value
   * Try:
      + Using an adequately funded account
      + If you are using a local Geth node, verify that your node is synced.

    at /Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:365:1
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at Object.deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/utils/deploy.ts:9:48)
    at deployProxy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/@openzeppelin/truffle-upgrades/src/deploy-proxy.ts:63:9)
    at module.exports (/Users/nico/Development/Rarible/rarible-protocol-contracts/deploy/migrations/12_deploy_ERC721Minimal_tokens_factory.js:24:23)
    at Migration._deploy (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:75:1)
    at Migration._load (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:56:1)
    at Migration.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
    at Object.runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
    at runMigrations (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
    at Object.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
    at Command.run (/Users/nico/Development/Rarible/rarible-protocol-contracts/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)
Truffle v5.4.22 (core: 5.4.22)
Node v16.13.0
npm ERR! Lifecycle script `truffle` failed with error:
npm ERR! Error: command failed
npm ERR!   in workspace: @rarible/deploy@0.0.2
npm ERR!   at location: /Users/nico/Development/Rarible/rarible-protocol-contracts/deploy
➜  deploy git:(deploy/binance) ✗ npm run truffle -- migrate --network mainnet

> @rarible/deploy@0.0.2 truffle
> truffle

Loading etherscan key from /Users/nico/.ethereum/etherscan.json
loaded etherscan api key
creating provider for address: 0x3Ae9Bf5331e076b55B61933206f797F4375D11D9

Compiling your contracts...
===========================
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
    function isValidSignature(bytes32 _hash, bytes calldata _signature) virtual external view returns (bytes4 magicValue);
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
    function _burned(uint256 tokenId) internal returns (bool) {
    ^ (Relevant source part starts here and spans across multiple lines).

> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'mainnet'
> Network id:      1
> Block gas limit: 30000000 (0x1c9c380)


12_deploy_ERC721Minimal_tokens_factory.js
=========================================

   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xa89605e852840260f11b3b9a469da2106ff49254715d68a1ace04813ad2e26eb
   > Blocks: 1            Seconds: 12
   > contract address:    0x98005cc6892e712C899f3A496870269DD9B718f1
   > block number:        15817555
   > block timestamp:     1666609547
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.423483462058672386
   > gas used:            930333 (0xe321d)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.013024662 ETH

deployed erc721 minimal at 0x98005cc6892e712C899f3A496870269DD9B718f1

   Deploying 'ERC721RaribleMinimalBeacon'
   --------------------------------------
   > transaction hash:    0x05c142ad9b70c4d2e8f5f3e342573e383fe989b3ff4d746450013dbf0d098db8
   > Blocks: 1            Seconds: 5
   > contract address:    0x3AB204bb32731F05589cDEd8D3399FB1c7CeCbC7
   > block number:        15817556
   > block timestamp:     1666609559
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.418495206058672386
   > gas used:            356304 (0x56fd0)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.004988256 ETH


   Deploying 'ERC721RaribleFactoryC2'
   ----------------------------------
   > transaction hash:    0x01ee03f51e8a55244002123ad21b8a973deff11dab6733486286dbcd5ff5477f
   > Blocks: 2            Seconds: 20
   > contract address:    0x363cEf6ab850371800cd2CffcAeF9F27104DB976
   > block number:        15817558
   > block timestamp:     1666609583
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.399992148058672386
   > gas used:            1321647 (0x142aaf)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.018503058 ETH

deployed factory721 minimal at 0x363cEf6ab850371800cd2CffcAeF9F27104DB976

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.036515976 ETH


13_update_ERC721.js
===================
old impl 721 = 0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2
new impl 721 = 0xF8b1a2e298358C0A9a8d797Fac41dBC5026Cd5d2

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
old impl 1155 = 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566
new impl 1155 = 0xCF9ce1B0031c64F77BA15C3CBA68a5E848d92566

   Deploying 'ERC1155RaribleFactoryC2'
   -----------------------------------
   > transaction hash:    0x530a871f11b0a3bb1b3c2a2d13dacd04fef1842db075c255baaa3d6bbdde4d49
   > Blocks: 1            Seconds: 8
   > contract address:    0x499aB47958AA4ec14402DD49F1f15135211142B2
   > block number:        15817572
   > block timestamp:     1666609751
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.377538570058672386
   > gas used:            1321647 (0x142aaf)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.018503058 ETH

deployed factory1155 at 0x499aB47958AA4ec14402DD49F1f15135211142B2

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.018503058 ETH


17_collection_matcher.js
========================

   Deploying 'AssetMatcherCollection'
   ----------------------------------
   > transaction hash:    0xb387e9c728bcbe1d86e529ce31b715beb1ce8c8308b522f9cd39e959a71cbda5
   > Blocks: 1            Seconds: 16
   > contract address:    0xe04401462C3504A042520026585f75D57654f495
   > block number:        15817575
   > block timestamp:     1666609787
   > account:             0x3Ae9Bf5331e076b55B61933206f797F4375D11D9
   > balance:             0.373286686058672386
   > gas used:            275151 (0x432cf)
   > gas price:           14 gwei
   > value sent:          0 ETH
   > total cost:          0.003852114 ETH

asset matcher for collections deployed at 0xe04401462C3504A042520026585f75D57654f495

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.003852114 ETH


Summary
=======
> Total deployments:   5
> Final cost:          0.058871148 ETH


➜  deploy git:(deploy/binance) ✗