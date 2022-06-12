
// SPDX-License-Identifier: MIT LICENSE
import "https://github.com/net2devcrypto/Simple-ERC20-AirdropServer/N2DPlus.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.4;

contract AirDropNFT is Ownable  {
    
    uint256 public airDrop = 10 ether;
    N2DPlus rewards;

    constructor(N2DPlus _rewards) {
        rewards = _rewards;
    }

    function issueAirDropERC20(address[] calldata holder) public onlyOwner {
        rewards.mintAirdrop(holder, airDrop);
    }

}
