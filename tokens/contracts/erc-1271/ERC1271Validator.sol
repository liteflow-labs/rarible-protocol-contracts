// SPDX-License-Identifier: MIT

pragma solidity 0.7.6;

import "./ERC1271.sol";
import "@openzeppelin/contracts-upgradeable/drafts/EIP712Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/cryptography/ECDSAUpgradeable.sol";

abstract contract ERC1271Validator is EIP712Upgradeable {
    using AddressUpgradeable for address;
    using ECDSAUpgradeable for bytes32;

    string constant SIGNATURE_ERROR = "signature verification error";
    bytes4 constant internal MAGICVALUE = 0x1626ba7e;

    function validate1271(address signer, bytes32 structHash, bytes memory signature) internal view {
        require(isValid1271(signer, structHash, signature), SIGNATURE_ERROR);
    }

    function isValid1271(address signer, bytes32 structHash, bytes memory signature) internal view returns (bool) {
        bytes32 hash = _hashTypedDataV4(structHash);
        if (signer.isContract()) {
            return ERC1271(signer).isValidSignature(hash, signature) == MAGICVALUE;
        } else {
            return hash.recover(signature) == signer;
        }
    }

    uint256[50] private __gap;
}
