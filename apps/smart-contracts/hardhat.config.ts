import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: { version: "0.8.23", settings: { evmVersion: "shanghai" } },

  typechain: {
    target: "ethers-v6",
    outDir: "../../packages/shared/src/typechain-types",
  },

  paths: {
    artifacts: "../../packages/shared/src/artifacts",
  },

  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: [3000, 3000], // 3 second blocks
      },
    },
  },
};

export default config;
