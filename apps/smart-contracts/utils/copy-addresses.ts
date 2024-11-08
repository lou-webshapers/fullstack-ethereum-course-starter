// scripts/copyArtifacts.ts
import fs from "fs-extra";
import path from "path";

// Define paths
const ADDRESSES_DIR = path.resolve(
  __dirname,
  "../../../packages/shared/src/addresses"
);

export async function copyAddresses(
  nftContractAddress: string,
  stakingContractAddress: string
) {
  try {
    await fs.ensureDir(ADDRESSES_DIR);

    const addressesTs = `
    export const NFT_CONTRACT_ADDRESS = "${nftContractAddress}";
    export const STAKING_CONTRACT_ADDRESS = "${stakingContractAddress}";
    `;

    await fs.writeFile(
      path.resolve(ADDRESSES_DIR, "index.ts"),
      addressesTs,
      "utf8"
    );

    console.log("Successfully copied addresses to shared package");
  } catch (error) {
    console.error("Error creating ABIs:", error);
  }
}
