/* eslint-disable no-undef */
const TimelessNFT = artifacts.require("TimelessNFT");

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts();

  await deployer.deploy(
    TimelessNFT,
    "Timeless NFTs",
    "TNT",
    10,
    "0x951cA7f9EDA68318D5fdac0732dAc0965bA0f77e"
  );
};
