// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AddressTableInteraction {
    // ArbAddressTable precompile is at a fixed address (see Arbitrum documentation for the exact address)
    address constant ArbAddressTable = address(0x0000000000000000000000000000000000000066);

    // Function to register multiple addresses
    function registerAddresses(address[] calldata addresses) external {
        for (uint i = 0; i < addresses.length; i++) {
            (bool success, /*second variable is bytes memory data*/) = ArbAddressTable.call(
                abi.encodeWithSignature("register(address)", addresses[i])
            );
            require(success, "Address registration failed");
        }
    }

    // Function to look up an address
    function lookupAddress(address addr) external view returns (uint) {
        (bool success, bytes memory data) = ArbAddressTable.staticcall(
            abi.encodeWithSignature("lookup(address)", addr)
        );
        require(success, "Address lookup failed");
        return abi.decode(data, (uint));
    }

    // Function to get the size of the address table
    function getAddressTableSize() external view returns (uint) {
        (bool success, bytes memory data) = ArbAddressTable.staticcall(
            abi.encodeWithSignature("size()") 
        );
        require(success, "Failed to get address table size");
        return abi.decode(data, (uint));
    }
}