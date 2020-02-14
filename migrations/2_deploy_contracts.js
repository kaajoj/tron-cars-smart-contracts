var MyContract = artifacts.require("./CarFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
