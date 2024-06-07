# Starting migrations...

> Network name: 'polygon_amoy'
> Network id: 80002
> Block gas limit: 29766209 (0x1c63241)

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x9b61a7a2e02b8abeaeaa516276095d09717c71b2f3b4d95ecccb0897cecda4ee
> Blocks: 3 Seconds: 5
> contract address: 0x2Bf8458E4B32C76912fccAea829B5A403570588B
> block number: 7970141
> block timestamp: 1717735410
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.120690145790781183
> gas used: 1572819 (0x17ffd3)
> gas price: 41.999999997 gwei
> value sent: 0 ETH
> total cost: 0.066058397995281543 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x639ffa624af922ae5bc9754fd3a166385d4e65fa96f1b30095a7b5a9a9060bf0
> Blocks: 2 Seconds: 4
> contract address: 0xB2e59Cca2cC32A52827224A117fde827084b15ab
> block number: 7970146
> block timestamp: 1717735422
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.100356097792233615
> gas used: 484144 (0x76330)
> gas price: 41.999999997 gwei
> value sent: 0 ETH
> total cost: 0.020334047998547568 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xcb31f1fd4c8c35b93c5197db175d8779c57723cf4fe26d70a745d33ab6c77e77
> Blocks: 2 Seconds: 4
> contract address: 0x664939C92725B6eE0b8c9Ec32c61D76C65981f3A
> block number: 7970152
> block timestamp: 1717735434
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.073372399794161022
> gas used: 642469 (0x9cda5)
> gas price: 41.999999997 gwei
> value sent: 0 ETH
> total cost: 0.026983697998072593 ETH

deployed royaltiesRegistry at 0x664939C92725B6eE0b8c9Ec32c61D76C65981f3A

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.113376143991901704 ETH

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

> transaction hash: 0x247a8771d59fbfcc32e8d70563c3483991156e21128aa6a14106d889912f7e5e
> Blocks: 2 Seconds: 4
> contract address: 0xd3E7fbfb540eFF317b46e63958B6d3131A6612f8
> block number: 7970823
> block timestamp: 1717736860
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.065296042997190595
> gas used: 649103 (0x9e78f)
> gas price: 5 gwei
> value sent: 0 ETH
> total cost: 0.003245515 ETH

deployed transferProxy at 0xd3E7fbfb540eFF317b46e63958B6d3131A6612f8

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xadd92c24935789cc7276efdfe8392e050ab0b8e811340721e8d75de551f1bd62
> Blocks: 2 Seconds: 4
> contract address: 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1
> block number: 7970831
> block timestamp: 1717736876
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.062100112997190595
> gas used: 570547 (0x8b4b3)
> gas price: 5 gwei
> value sent: 0 ETH
> total cost: 0.002852735 ETH

deployed erc20TransferProxy at 0x9391390D0A7ca1D4cB2B6c93E1cdA229d1577bB1

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x3f9a3ca21e78631c348cca90d3a193d06db8c095429515eb1d32c099443cf926
> Blocks: 2 Seconds: 4
> contract address: 0x297a2174bC6c73cBA3BFA42357c46Ba588F31dF8
> block number: 7970840
> block timestamp: 1717736896
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.057510702997190595
> gas used: 849243 (0xcf55b)
> gas price: 5 gwei
> value sent: 0 ETH
> total cost: 0.004246215 ETH

deployed erc721LazyProxy at 0x297a2174bC6c73cBA3BFA42357c46Ba588F31dF8

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x1acdd3e9e0a4b1e226c981bc772cda0fe09e73342c1af0816b152535f1a28535
> Blocks: 1 Seconds: 4
> contract address: 0x581A7F7e9fdE15B5720a5EA6b44A6335C16264Df
> block number: 7970849
> block timestamp: 1717736916
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.052980792997190595
> gas used: 837334 (0xcc6d6)
> gas price: 5 gwei
> value sent: 0 ETH
> total cost: 0.00418667 ETH

deployed erc1155LazyProxy at 0x581A7F7e9fdE15B5720a5EA6b44A6335C16264Df

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.014531135 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x4325cbece22bde8cdee87d3bd5f1a1cce9bdf2705b45ba10c63dcfc29127817e
> Blocks: 3 Seconds: 8
> contract address: 0xBd4F1BC22F590eB7B671840B15436229383e4b6E
> block number: 7970865
> block timestamp: 1717736950
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.032427407936988485
> gas used: 4013474 (0x3d3da2)
> gas price: 5.000000015 gwei
> value sent: 0 ETH
> total cost: 0.02006737006020211 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x99a8d40ef86ef7c4b741dc21f06e403ad05b2575e93f913f77c5611d2009fca9
> Blocks: 4 Seconds: 8
> contract address: 0x1dC20cCF6f3a6Ecf90ADb28253cBB894A8439Dd4
> block number: 7971161
> block timestamp: 1717737578
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.263575923562103085
> gas used: 950600 (0xe8148)
> gas price: 14.519999974 gwei
> value sent: 0 ETH
> total cost: 0.0138027119752844 ETH

deployed erc721 at 0x1dC20cCF6f3a6Ecf90ADb28253cBB894A8439Dd4

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xc64c7f1b8776942a589422e9ba85bf559bca2628c943a37a3990261eac4bb0f8
> Blocks: 3 Seconds: 8
> contract address: 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57
> block number: 7971168
> block timestamp: 1717737594
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.197006645961304271
> gas used: 4584661 (0x45f4d5)
> gas price: 14.519999974 gwei
> value sent: 0 ETH
> total cost: 0.066569277600798814 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xb6ed2f69f1a36079d96191783a1dd1402cfbba3e1ea2e87028434499eeb8e0e4
> Blocks: 3 Seconds: 4
> contract address: 0x8679496FBDDD29606d6C6B7a321F9f4ff871B360
> block number: 7971175
> block timestamp: 1717737608
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.183450614265578157
> gas used: 933611 (0xe3eeb)
> gas price: 14.519999974 gwei
> value sent: 0 ETH
> total cost: 0.013556031695726114 ETH

deployed erc1155 at 0x8679496FBDDD29606d6C6B7a321F9f4ff871B360

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xd4a924eba247814acbc349a03f8a49443a5af7045795742b98ec0745667817f6
> Blocks: 2 Seconds: 4
> contract address: 0x929bCD62ccAc184d1495b19DA361D32eac89344B
> block number: 7971182
> block timestamp: 1717737622
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.178275860514844245
> gas used: 356388 (0x57024)
> gas price: 14.519999974 gwei
> value sent: 0 ETH
> total cost: 0.005174753750733912 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0x2ea2eade993d34bea26e78362df93cf9476cbafd34670fa5cbbfaafa3c1d5e03
> Blocks: 2 Seconds: 4
> contract address: 0xe71340449e5107fF45B9c5d8E27495682e59EE36
> block number: 7971187
> block timestamp: 1717737634
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.173100932524110645
> gas used: 356400 (0x57030)
> gas price: 14.519999974 gwei
> value sent: 0 ETH
> total cost: 0.0051749279907336 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.10427770301327684 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0x05119864e695c4523eeb2dca92acae8a5076c5e3b83f10aaa2e70302fc887d09
> Blocks: 4 Seconds: 8
> contract address: 0x51a2E579c67F6c02AbFd0A76A45b171A50C49dE0
> block number: 7971252
> block timestamp: 1717737772
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.166843501924853075
> gas used: 3895208 (0x3b6fa8)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.005842812 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xdea4401958d4cc1d9dbb82263d00c3257ccdaf1173c099b7d4dc843d79011701
> Blocks: 3 Seconds: 4
> contract address: 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F
> block number: 7971259
> block timestamp: 1717737786
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.165637275424853075
> gas used: 804151 (0xc4537)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0012062265 ETH

deployed exchangeV2 at 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0070490385 ETH

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

old impl 721 = 0xBd4F1BC22F590eB7B671840B15436229383e4b6E
new impl 721 = 0xBd4F1BC22F590eB7B671840B15436229383e4b6E
old impl 1155 = 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57
new impl 1155 = 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57

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

> transaction hash: 0x8f566c0953850961a0d128f9954317a8f9a5f9dc3512e3754a8ff8cf8386e583
> Blocks: 2 Seconds: 4
> contract address: 0x16B77188ad08c751Da26Ec95D2D6921454fe1b16
> block number: 7971395
> block timestamp: 1717738076
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.158833045924853075
> gas used: 3816017 (0x3a3a51)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0057240255 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x4eab29306590d8bfee391ee136382c7413a9eb52bb929d68915693a5e9843b48
> Blocks: 2 Seconds: 4
> contract address: 0x3c9389D80Ccc32745B37e9e62308640FEb68bb7F
> block number: 7971401
> block timestamp: 1717738088
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.157437126424853075
> gas used: 930613 (0xe3335)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0013959195 ETH

deployed erc721 minimal at 0x3c9389D80Ccc32745B37e9e62308640FEb68bb7F

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x7e22504b3e7b1bb74e7f04dd46a5eaedc6596d9f5ca9421f88751850a09bccbc
> Blocks: 2 Seconds: 4
> contract address: 0x38FA332750b6808bC2C8e6fD478Bf6ef1d5b64D6
> block number: 7971407
> block timestamp: 1717738100
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.156902526424853075
> gas used: 356400 (0x57030)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0005346 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0xd0637b06604c4deffe19247aa8c5f813796d65b1b35ff145a66a2fdbd316ea1d
> Blocks: 2 Seconds: 4
> contract address: 0x3fD6Ce8aD460eA25cE7eFBdb9B1344E7A0963D16
> block number: 7971411
> block timestamp: 1717738110
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.154919506924853075
> gas used: 1322013 (0x142c1d)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0019830195 ETH

deployed factory721 minimal at 0x3fD6Ce8aD460eA25cE7eFBdb9B1344E7A0963D16

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0096375645 ETH

# 13_update_ERC721.js

old impl 721 = 0xBd4F1BC22F590eB7B671840B15436229383e4b6E
new impl 721 = 0xBd4F1BC22F590eB7B671840B15436229383e4b6E

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

old impl 1155 = 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57
new impl 1155 = 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x3c1375216501333d19e5d912a912e3da013893543106e04367470f43f9b1f7ee
> Blocks: 2 Seconds: 4
> contract address: 0xe512Be3198381Dc0667B8d796A7487ee80570F8e
> block number: 7971453
> block timestamp: 1717738198
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.152513217424853075
> gas used: 1322013 (0x142c1d)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0019830195 ETH

deployed factory1155 at 0xe512Be3198381Dc0667B8d796A7487ee80570F8e

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0019830195 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0xedbc945e1dc686bc0082c904be0f325efcdccf3573035f465f970fa44c3f6156
> Blocks: 2 Seconds: 4
> contract address: 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249
> block number: 7971460
> block timestamp: 1717738214
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.152057556424853075
> gas used: 275219 (0x43313)
> gas price: 1.5 gwei
> value sent: 0 ETH
> total cost: 0.0004128285 ETH

asset matcher for collections deployed at 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.0004128285 ETH

# Summary

> Total deployments: 6
> Final cost: 0.0120334125 ETH

➜ deploy git:(master) ✗
