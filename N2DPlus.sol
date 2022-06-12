// SPDX-License-Identifier: MIT LICENSE

pragma solidity 0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract N2DPlus is ERC20, ERC20Burnable, Ownable {

  mapping(address => bool) controllers;
  
  constructor() ERC20("N2DPlus", "N2D+") { }

  function mint(address to, uint256 amount) external {
    require(controllers[msg.sender], "Only controllers can mint");
    _mint(to, amount);
  }

  function mintAirdrop(address[] calldata holder, uint256 amount) external {
    require(controllers[msg.sender], "Only controllers can mint");
    for (uint256 i = 0; i < holder.length; i++)
      _mint(holder[i], amount);
  }

  function burnFrom(address account, uint256 amount) public override {
      if (controllers[msg.sender]) {
          _burn(account, amount);
      }
      else {
          super.burnFrom(account, amount);
      }
  }

  function addController(address controller) external onlyOwner {
    controllers[controller] = true;
  }

  function removeController(address controller) external onlyOwner {
    controllers[controller] = false;
  }
}
