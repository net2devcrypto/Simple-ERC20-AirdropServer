# Simple-ERC20-AirdropServer

🤩🥳Deploy a simple ERC20 Airdrop Server to reward NFT holders with recurring erc20 token rewards!

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

YOUTUBE Tutorial: https://youtu.be/jawlU5Bzmpo

############################################################

STEP 1 - Deploy the required smart contracts.

- First Deploy : N2DPlus.sol (Token Smart Contract), Modify 
the name and symbol of the token in the smart contract to 
your preference. 

Once deployed, copy the smart contract address.

- Second Deploy : AirDropERC20-Contract.sol (Airdrop Smart Contract)
It is required to input the Token Smart Contract address. Paste
the contract address previously copied.

Once deployed, copy the smart contract address.

############################################################

STEP 2 - Deploy a NextJS webfrontend server:

npx create-next-app airdropsrv

navigate to the project folder,
delete README.MD file in the airdropsrv folder.

npm i hardhat

once hardhat gets installed,

npx hardhat

Select Create basic sample project.
-leave everything default(press enter)

Install dependencies:

Copy entire line and paste , and enter: 

npm install --save-dev "hardhat@^2.9.9" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"

############################################################

STEP 3 - Replace NextJS Files:

Copy files from AirDrop-Server folder in this repo,

and paste inside "Pages" folder in NextJS project

Replace index.js when asked on prompt.

############################################################

STEP 4 - Update values in Index.js:

Obtain the private key of the wallet that was used to deploy
the Airdrop smartcontract and update:

var ethPrivkey = '0xPRIVATEKEY'; (Leave 0x)

Add YOUR NFT smartcontract address in the field:

var nftcontract = 'NFTSMARTCONTRACTADDRESS';

Add the airdrop smartcontract address in the field:

var airdrop = 'AIRDROPSMARTCONTRACTADDRESS';

OPTIONAL, if using a different blockchain, replace the JSON RPC
address in the field: 

const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');

SAVE FILE , go to the shell then run the server:

npm run dev

Add the token smartcontract address to your wallet to see the token's.

Enjoy!!
############################################################
