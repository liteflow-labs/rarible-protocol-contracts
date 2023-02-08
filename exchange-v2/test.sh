#!/usr/bin/env bash
set -e

# truffle test # this command doesn't work for all tests. Need to ue the sh files of each individual files

echo "Executing test-asset-matcher.sh"
bash test-asset-matcher.sh

# important one:
echo "Executing test-exchangev2-rarible.sh"
bash test-exchangev2-rarible.sh

echo "Executing test-exchangev2-simple.sh"
bash test-exchangev2-simple.sh

echo "Executing test-lib-fee-side.sh"
bash test-lib-fee-side.sh

echo "Executing test-lib-fill.sh"
bash test-lib-fill.sh

echo "Executing test-lib-order.sh"
bash test-lib-order.sh

echo "Executing test-lib-signature.sh"
bash test-lib-signature.sh

echo "Executing test-meta-tx.sh"
bash test-meta-tx.sh

echo "Executing test-order-validator.sh"
bash test-order-validator.sh

echo "Executing test-rarible-simple.sh"
bash test-rarible-simple.sh

# important one:
echo "Executing test-rarible-transfer-manager.sh"
bash test-rarible-transfer-manager.sh

echo "Executing test-transfer-executor.sh"
bash test-transfer-executor.sh
