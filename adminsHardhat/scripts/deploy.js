// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Lock = await hre.ethers.getContractFactory("GovermentAuthority");
  const lock = await Lock.deploy("0xf6F304847c55f0EcC3c55640FBcDe615b08fE30e");

  await lock.deployed();

  console.log(
    "GovermentAuthority Address is : " + lock.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 


// Walleet = 0xf6F304847c55f0EcC3c55640FBcDe615b08fE30e 
 

// Goverment Property =  
// 0x6AAe87ab6f2857c8b9dA2808c17d74E601bb098B

// npx hardhat verify 0x6AAe87ab6f2857c8b9dA2808c17d74E601bb098B --network sepolia


// High Court =  
// 0x56a5676ed8A278EA811c379E127e6FE52704eEEC



// LandInspector =  
// 0xc657D9aee8eBa95dFaa3c6D3AD1CB82D97Ee8A0A





// Citizens =  
// 0xC7d127cE7faD614Af410ac21546a2DbCa5f08419





// OnwerShip =  
// 0x70fefc19b5B632996377904f1Ba21897a3d7F0f3


