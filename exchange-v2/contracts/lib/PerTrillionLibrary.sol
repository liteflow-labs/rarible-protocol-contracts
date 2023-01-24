// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import '@openzeppelin/contracts-upgradeable/math/SafeMathUpgradeable.sol';

library PerTrillionLibrary {
  using SafeMathUpgradeable for uint256;

  uint96 public constant TRILLION = 1000000000000;

  function perTrillion(uint256 value, uint96 ptValue)
    internal
    pure
    returns (uint256)
  {
    return value.mul(ptValue).div(TRILLION);
  }
}
