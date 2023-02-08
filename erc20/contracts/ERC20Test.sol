// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.6;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

// ERC20 Token that let every body mint tokens for test
contract ERC20Test is ERC20 {
  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _amount
  ) ERC20(_name, _symbol) {
    _mint(msg.sender, _amount);
  }

  function mint(address to, uint256 amount) external {
    _mint(to, amount);
  }

  function mint(uint256 amount) external {
    _mint(msg.sender, amount);
  }
}
