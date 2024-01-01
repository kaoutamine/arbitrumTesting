// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArbGasInfoCaller {
    // Address for the ArbGasInfo precompile on Arbitrum
    address constant private ARBGASINFO_PRECOMPILE = address(0x000000000000000000000000000000000000006C);

    // Event to log the time taken
    event TimeTaken(uint256 timeTaken);

    function callArbGasInfo() public {

        // Call the ArbGasInfo precompile
        (bool success, ) = ARBGASINFO_PRECOMPILE.call(abi.encodeWithSignature("getPricesInArbGas()"));
        require(success, "ArbGasInfo call failed");

    }
}