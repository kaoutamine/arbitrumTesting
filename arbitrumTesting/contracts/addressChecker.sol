pragma solidity ^0.8.18;

contract AddressExistsChecker {
    // Precompile address for arbAddressTable in Arbitrum
    address constant precompileAddress = 0x0000000000000000000000000000000000000066;

    function doesAddressExist(address addr) public view returns (bool) {
        // Encoding the function signature and parameters
        bytes memory payload = abi.encodeWithSignature("addressExists(address)", addr);
        
        // Interacting with the precompile
        (bool success, bytes memory returnData) = precompileAddress.staticcall(payload);
        
        require(success, "Call to precompile failed");
        
        // Decoding the returned data
        return abi.decode(returnData, (bool));
    }
}