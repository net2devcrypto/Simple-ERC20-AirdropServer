import { useState, useEffect } from 'react';
import NFT from './NFT.json';
import AirDrop from './AirDropAbi.json';
import { ethers } from 'ethers';
var ethPrivkey = '0xPRIVATEKEY';
var nftcontract = 'NFTSMARTCONTRACTADDRESS';
var airdrop = 'AIRDROPSMARTCONTRACTADDRESS';
var wallets = null;
export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const airdrop = setInterval(() => {
      sendAirDrop();
      setCount(count => count + 1);
    }, 60000); //UPDATE TO THE VALUE YOU DESIRE (MILLSECONDS)
    return () => clearInterval(airdrop);
  }, 
  []);

  async function sendAirDrop() {
    const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');
    const wallet = new ethers.Wallet(ethPrivkey, provider);
    const nftContract = new ethers.Contract(nftcontract, NFT, wallet);
    const airDrop = new ethers.Contract(airdrop, AirDrop, wallet);
    var supArray = [];
    var wltArray = [];
    const supply = nftContract.totalSupply();
    supply.then(value => {
      for (let i = 0; i < value; i++) {
        var token = i + 1
        supArray.push(token);
      }
      supArray.forEach(async (id) => {
        const owner = nftContract.ownerOf([id]);
        owner.then(value => {
          wltArray.push(value);
          wallets = (wltArray.toString());
        })
      })
    })
    await new Promise(r => setTimeout(r, 10000));
    const formatArray = wallets.replace(/,(?=[^\s])/g, ", ");
    var receiver = formatArray.split(', ');
    console.log('Sending Tokens to Wallets.....')
    console.log(receiver);
    await airDrop.issueAirDropERC20(receiver);
    console.log('Transfer Completed');
    await new Promise(r => setTimeout(r, 60000));
  };
  return (
    <div className='App'>
  <h1>Airdrop in Progress</h1>
  <h1>Total Transfers {count}</h1>
  </div>
  )
}
