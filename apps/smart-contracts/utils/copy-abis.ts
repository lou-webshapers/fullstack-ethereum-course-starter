// scripts/copyArtifacts.ts
import fs from "fs-extra";
import path from "path";

// Define paths
const UI_ABI_FOLDER = path.resolve(__dirname, "../../ui/src/abi");

const NFT_ABI = path.resolve(
  __dirname,
  "../../../packages/shared/src/artifacts/contracts/ChillApe.sol/ChillApe.json"
);
const STAKING_ABI = path.resolve(
  __dirname,
  "../../../packages/shared/src/artifacts/contracts/ChillStaking.sol/ChillStaking.json"
);

async function copyAbis() {
  try {
    await fs.ensureDir(UI_ABI_FOLDER);

    await fs.emptyDir(UI_ABI_FOLDER);

    const nftJson = await fs.readJSON(NFT_ABI);
    const stakingJson = await fs.readJSON(STAKING_ABI);

    const { abi: nftAbiJson } = nftJson;
    const { abi: stakingAbiJson } = stakingJson;

    const nftAbiTs = `export const nftAbi = ${JSON.stringify(nftAbiJson, null, 2)} as const;`;
    const stakingAbiTs = `export const stakingAbi = ${JSON.stringify(stakingAbiJson, null, 2)} as const;`;

    await fs.writeFile(
      path.resolve(UI_ABI_FOLDER, "nftAbi.ts"),
      nftAbiTs,
      "utf8"
    );
    await fs.writeFile(
      path.resolve(UI_ABI_FOLDER, "stakingAbi.ts"),
      stakingAbiTs,
      "utf8"
    );
  } catch (error) {
    console.error("Error creating ABIs:", error);
  }
}

copyAbis();
