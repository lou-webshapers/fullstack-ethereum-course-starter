// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ChillApe.sol";

contract ChillStaking is ERC20 {
   
    constructor() ERC20("ChillCoin", "CHILL") {

    }

   
}