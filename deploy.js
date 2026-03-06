const { ethers } = require("hardhat");

async function main() {

  const Identity = await ethers.getContractFactory("IdentityVerification");

  const identity = await Identity.deploy();

  await identity.waitForDeployment();

  console.log("Contract deployed to:", identity.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});