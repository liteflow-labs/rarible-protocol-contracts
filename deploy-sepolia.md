# Starting migrations...

> Network name: 'sepolia'
> Network id: 11155111
> Block gas limit: 30000000 (0x1c9c380)

# 1_initial_migration.js

Deploying 'Migrations'

---

> transaction hash: 0xc2e84914980fc7375970c03952322a11d31e6ba4329d65aa925b49db089f2502
> Blocks: 2 Seconds: 16
> contract address: 0x9339a7E4df2D828f6Df1546b395DF61c88C2D563
> block number: 6055760
> block timestamp: 1717734720
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503237489665916783
> gas used: 155034 (0x25d9a)
> gas price: 0.000763799 gwei
> value sent: 0 ETH
> total cost: 0.000000118414814166 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000000118414814166 ETH

# 2_initial_RoyaltiesRegistry.js

Deploying 'RoyaltiesRegistry'

---

> transaction hash: 0x962faf6f50ab41cffe80cd92adb764b482933bdd467f7cdf951e67622fe28247
> Blocks: 0 Seconds: 4
> contract address: 0x4083e25a0f32418d32Ce699B257f566b56Ec7D16
> block number: 6055762
> block timestamp: 1717734744
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503236307832393793
> gas used: 1572819 (0x17ffd3)
> gas price: 0.00072999 gwei
> value sent: 0 ETH
> total cost: 0.00000114814214181 ETH

Deploying 'ProxyAdmin'

---

> transaction hash: 0x3b94878d24699370aa9cace96f37edab9733fe22728a8badc804ba99164c5f9b
> Blocks: 0 Seconds: 4
> contract address: 0x1dC20cCF6f3a6Ecf90ADb28253cBB894A8439Dd4
> block number: 6055763
> block timestamp: 1717734756
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503235943746907057
> gas used: 484144 (0x76330)
> gas price: 0.000752019 gwei
> value sent: 0 ETH
> total cost: 0.000000364085486736 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x1551884919e71d2e3241b1779fa7637c2438ac5c3017f0658920493b5aaa0f03
> Blocks: 0 Seconds: 4
> contract address: 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57
> block number: 6055764
> block timestamp: 1717734768
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503235424836902668
> gas used: 642469 (0x9cda5)
> gas price: 0.000807681 gwei
> value sent: 0 ETH
> total cost: 0.000000518910004389 ETH

deployed royaltiesRegistry at 0xB2d32E3C3283C5dedCDA6C3539468A3848206D57

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000002031137632935 ETH

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

> transaction hash: 0x7bf70a8ab3f17c9b300831844ef1b08f1452a614cf6f7f0278260f624160662c
> Blocks: 1 Seconds: 8
> contract address: 0xfa392Ef9BcfCf64CFCAA1311c6bb9b459A28eE70
> block number: 6055769
> block timestamp: 1717734828
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503234818589197107
> gas used: 649103 (0x9e78f)
> gas price: 0.000824687 gwei
> value sent: 0 ETH
> total cost: 0.000000535306805761 ETH

deployed transferProxy at 0xfa392Ef9BcfCf64CFCAA1311c6bb9b459A28eE70

Deploying 'ERC20TransferProxy'

---

> transaction hash: 0xd0d1beb5691fafb9c987664414593d6524fb84a0c216989bc61644389a6ed309
> Blocks: 0 Seconds: 8
> contract address: 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F
> block number: 6055773
> block timestamp: 1717734876
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503234287290012497
> gas used: 570547 (0x8b4b3)
> gas price: 0.000825687 gwei
> value sent: 0 ETH
> total cost: 0.000000471093240789 ETH

deployed erc20TransferProxy at 0xf0D1e5Fbab5541a5546CF30Ca0326483777FEF2F

Deploying 'ERC721LazyMintTransferProxy'

---

> transaction hash: 0x809c5c62a508f1fe9b8d3126d353ba8fb4967ce3fb47320e33ff4b648715b6a0
> Blocks: 1 Seconds: 20
> contract address: 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB
> block number: 6055776
> block timestamp: 1717734912
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.50323348135728195
> gas used: 849243 (0xcf55b)
> gas price: 0.0008788 gwei
> value sent: 0 ETH
> total cost: 0.0000007463147484 ETH

deployed erc721LazyProxy at 0x5d35FB950f21A0F8C3519a671251c4AEfcD406aB

Deploying 'ERC1155LazyMintTransferProxy'

---

> transaction hash: 0x30cfbed0164f570a404eae33c96bd78721bb8f83b75e17ce614b1f1f689e2011
> Blocks: 1 Seconds: 8
> contract address: 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771
> block number: 6055778
> block timestamp: 1717734936
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.503232643627873872
> gas used: 837334 (0xcc6d6)
> gas price: 0.000925777 gwei
> value sent: 0 ETH
> total cost: 0.000000775184558518 ETH

deployed erc1155LazyProxy at 0xafC43CCB1f3f2E36001E325C1D2F8F89B7eba771

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000002527899353468 ETH

# 6_tokens_and_factories.js

Deploying 'ERC721Rarible'

---

> transaction hash: 0x9810a75483ccbacb424d02341819db6d7ccfd580e4a43344f8b48e0f5802f611
> Blocks: 30 Seconds: 360
> contract address: 0x94552C67b9823A64b95888AAb68fA17c503d6d10
> block number: 6055851
> block timestamp: 1717735812
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499210697233774731
> gas used: 4013474 (0x3d3da2)
> gas price: 1.001186636 gwei
> value sent: 0 ETH
> total cost: 0.004018236532733464 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x5d8d4d71d6a22c7b4b40dcbd746244f18f51c65a89e5844e571312a1f436e1d4
> Blocks: 0 Seconds: 4
> contract address: 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836
> block number: 6055852
> block timestamp: 1717735824
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499209609706498931
> gas used: 950600 (0xe8148)
> gas price: 0.001144043 gwei
> value sent: 0 ETH
> total cost: 0.0000010875272758 ETH

deployed erc721 at 0x783fF4c33f5Df898c4E7cC4D92D4652d0550C836

Deploying 'ERC1155Rarible'

---

> transaction hash: 0xf513c4529b694a57f3469c365ae3db53f00261096063201a70e6485426b92f53
> Blocks: 4 Seconds: 52
> contract address: 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4
> block number: 6055857
> block timestamp: 1717735884
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499203997375397137
> gas used: 4584661 (0x45f4d5)
> gas price: 0.001224154 gwei
> value sent: 0 ETH
> total cost: 0.000005612331101794 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0x01fd4ccd19fc8b263628c9bb1423fc8775f23b26c0bee99b57dad0e9da295d1d
> Blocks: 0 Seconds: 4
> contract address: 0x9051D6ab0582bcE41fB17cadC707de49A0197501
> block number: 6055858
> block timestamp: 1717735896
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499202956959601151
> gas used: 933599 (0xe3edf)
> gas price: 0.001114414 gwei
> value sent: 0 ETH
> total cost: 0.000001040415795986 ETH

deployed erc1155 at 0x9051D6ab0582bcE41fB17cadC707de49A0197501

Deploying 'ERC721RaribleBeacon'

---

> transaction hash: 0xeae91fc88d5700d7a9c9b294e54fc311ab54092312fad31d3fff32be9c93dc8c
> Blocks: 0 Seconds: 4
> contract address: 0x823E4B495e0dc0790193B1D2da719182252A42A1
> block number: 6055859
> block timestamp: 1717735908
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499202533231019387
> gas used: 356388 (0x57024)
> gas price: 0.001188953 gwei
> value sent: 0 ETH
> total cost: 0.000000423728581764 ETH

Deploying 'ERC1155RaribleBeacon'

---

> transaction hash: 0xe745ca6c1cddf04b8a006f8b499f568b82c070bee49878b3c7d318a3ea944212
> Blocks: 2 Seconds: 28
> contract address: 0x936Aa1311CfB160Bf52006C9aff4642ac89ce3fd
> block number: 6055862
> block timestamp: 1717735944
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499202119096001387
> gas used: 356400 (0x57030)
> gas price: 0.001161995 gwei
> value sent: 0 ETH
> total cost: 0.000000414135018 ETH

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.004026814670506808 ETH

# 7_initial_ExchangeV2.js

Deploying 'ExchangeV2'

---

> transaction hash: 0xd924abe4d58d1274fbe8a4c713de400ea98a2e946be76b4e4d22dd81eb93b731
> Blocks: 2 Seconds: 28
> contract address: 0x7A4c9573c4c0609CDE08290B01B0e5365932292B
> block number: 6055866
> block timestamp: 1717735992
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.499197738047713502
> gas used: 3895208 (0x3b6fa8)
> gas price: 0.001116855 gwei
> value sent: 0 ETH
> total cost: 0.00000435038253084 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xdc4cf81fcf98fd3aae25df438a5f39dad82944e361306f5c04fa62c131c92a76
> Blocks: 2 Seconds: 16
> contract address: 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA
> block number: 6055868
> block timestamp: 1717736016
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.498393075798261289
> gas used: 804151 (0xc4537)
> gas price: 1.000635763 gwei
> value sent: 0 ETH
> total cost: 0.000804662249452213 ETH

deployed exchangeV2 at 0xd97d70128973dbF33E0EBD6e13f39CB09AB20dBA

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000809012631983053 ETH

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

old impl 721 = 0x94552C67b9823A64b95888AAb68fA17c503d6d10
new impl 721 = 0x94552C67b9823A64b95888AAb68fA17c503d6d10
old impl 1155 = 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4
new impl 1155 = 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4

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

> transaction hash: 0xeca37b4ce830f11716997c808feabf2959a42e457e840bdc058c6b6f72830d40
> Blocks: 0 Seconds: 4
> contract address: 0x07938bFf8fF7e9F28C28023C5b2Eb45ac8A875ff
> block number: 6055896
> block timestamp: 1717736352
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.498387791581126904
> gas used: 3816017 (0x3a3a51)
> gas price: 0.001177889 gwei
> value sent: 0 ETH
> total cost: 0.000004494844448113 ETH

Deploying 'TransparentUpgradeableProxy'

---

> transaction hash: 0xabd759d70344328a97b0dbf5508bb9e28722fc390aa0142267e1fbceff405435
> Blocks: 1 Seconds: 16
> contract address: 0xe512Be3198381Dc0667B8d796A7487ee80570F8e
> block number: 6055898
> block timestamp: 1717736376
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49838668581000927
> gas used: 930613 (0xe3335)
> gas price: 0.001188218 gwei
> value sent: 0 ETH
> total cost: 0.000001105771117634 ETH

deployed erc721 minimal at 0xe512Be3198381Dc0667B8d796A7487ee80570F8e

Deploying 'ERC721RaribleMinimalBeacon'

---

> transaction hash: 0x384c71aac7e412b8344da29f3a0dbcd0f7602bc78158af127dd9c7d06a3fcddf
> Blocks: 0 Seconds: 4
> contract address: 0xa9E46f215A6D759eC1d1B55Dc5951137d15421A3
> block number: 6055899
> block timestamp: 1717736388
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.49838626500639087
> gas used: 356400 (0x57030)
> gas price: 0.001180706 gwei
> value sent: 0 ETH
> total cost: 0.0000004208036184 ETH

Deploying 'ERC721RaribleFactoryC2'

---

> transaction hash: 0x246c54d67cea8e03fec9e46797bcc30b634336c3d8f4e30f7e3bbe8dfd92345c
> Blocks: 1 Seconds: 8
> contract address: 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249
> block number: 6055900
> block timestamp: 1717736400
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.498384657930371706
> gas used: 1322013 (0x142c1d)
> gas price: 0.001215628 gwei
> value sent: 0 ETH
> total cost: 0.000001607076019164 ETH

deployed factory721 minimal at 0x5634b15623Af0bd6B11Cd61Ce287f9F3C47b9249

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000007628495203311 ETH

# 13_update_ERC721.js

old impl 721 = 0x94552C67b9823A64b95888AAb68fA17c503d6d10
new impl 721 = 0x94552C67b9823A64b95888AAb68fA17c503d6d10

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

old impl 1155 = 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4
new impl 1155 = 0xe55bE6D17416aCdeDB3Ad95d9756205E88E252d4

Deploying 'ERC1155RaribleFactoryC2'

---

> transaction hash: 0x190d3c9d9a181891f802345b2c6fb8574b74e6938dbf7c5156db8203ce9f41f4
> Blocks: 2 Seconds: 32
> contract address: 0x4FD89c8a08Fbe2e2e1689002cD89Cce1aDF165b0
> block number: 6055919
> block timestamp: 1717736628
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.498382681216080925
> gas used: 1322001 (0x142c11)
> gas price: 0.001229264 gwei
> value sent: 0 ETH
> total cost: 0.000001625088237264 ETH

deployed factory1155 at 0x4FD89c8a08Fbe2e2e1689002cD89Cce1aDF165b0

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.000001625088237264 ETH

# 17_collection_matcher.js

Deploying 'AssetMatcherCollection'

---

> transaction hash: 0x0b5572561dbc39f6cbb4f5a629356e9faca33bc10df5f532e1a59bfd6a5dda15
> Blocks: 1 Seconds: 8
> contract address: 0xaF0DD2cF081dcF012876e45F314a68f3dEfCe0Da
> block number: 6055922
> block timestamp: 1717736664
> account: 0x29bD48E4cB7562D660506Ff940365a76A8d407E3
> balance: 0.498382234317830825
> gas used: 275219 (0x43313)
> gas price: 0.00147585 gwei
> value sent: 0 ETH
> total cost: 0.00000040618196115 ETH

asset matcher for collections deployed at 0xaF0DD2cF081dcF012876e45F314a68f3dEfCe0Da

> Saving migration to chain.
> Saving artifacts

---

> Total cost: 0.00000040618196115 ETH

# Summary

> Total deployments: 14
> Final cost: 0.004845487067891586 ETH
