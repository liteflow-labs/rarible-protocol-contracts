// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/EnumerableSetUpgradeable.sol";
import "../erc-1271/ERC1271Validator.sol";

contract MinterAccessControl is Initializable, OwnableUpgradeable, ERC1271Validator {
    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.AddressSet;

    EnumerableSetUpgradeable.AddressSet private _minters;
    bool public minterAccessControlEnabled;

    event MinterAccessControlEnabled();
    event MinterAccessControlDisabled();
    event MinterGranted(address indexed account);
    event MinterRevoked(address indexed account);

    function __MinterAccessControl_init() internal initializer {
        __Ownable_init_unchained();
        __EIP712_init_unchained("MintControl", "1");
        __MinterAccessControl_init_unchained();
    }

    function __MinterAccessControl_init_unchained() internal initializer {
    }

    /**
     * @dev Enable minter control
     * When enabled, only addresses added to `grantMinter` will be allowed to mint
     */
    function enableMinterAccessControl() external onlyOwner {
        require(!minterAccessControlEnabled, "MinterAccessControl: Already enabled");
        minterAccessControlEnabled = true;
        emit MinterAccessControlEnabled();
    }

    /**
     * @dev Disable minter control
     */
    function disableMinterAccessControl() external onlyOwner  {
        require(minterAccessControlEnabled, "MinterAccessControl: Already disabled");
        minterAccessControlEnabled = false;
        emit MinterAccessControlDisabled();
    }

    /**
     * @dev Add `_minter` to the list of allowed minters.
     */
    function grantMinter(address _minter) external onlyOwner {
        require(!_minters.contains(_minter), 'MinterAccessControl: Already minter');
        _minters.add(_minter);
        emit MinterGranted(_minter);
    }

    /**
     * @dev Revoke `_minter` from the list of allowed minters.
     */
    function revokeMinter(address _minter) external onlyOwner {
        require(_minters.contains(_minter), 'MinterAccessControl: Not minter');
        _minters.remove(_minter);
        emit MinterRevoked(_minter);
    }

    /**
     * @dev Returns `true` if minterControl is not enabled or `account` has been granted to minters.
     */
    function isValidMinter(address account) public view returns (bool) {
        return !minterAccessControlEnabled || _minters.contains(account);
    }

    /**
     * @dev Returns `true` if minterControl is not enabled or `signature` is valid for `structHash` and signer has been granted to minters role.
     * uses EIP-1271 to validate
     */
    function isValidMinterSignature(bytes32 structHash, bytes memory signature) public view returns (bool) {
        if (!minterAccessControlEnabled)
            return true;

        for (uint i = 0; i < _minters.length(); i++) {
            if (isValid1271(_minters.at(i), structHash, signature))
                return true;
        }
        
        return false;
    }

    uint256[50] private __gap;
}
