import { ethers } from "ethers";

interface ChainAddresses {
  [contractName: string]: string;
}

const chainIds = {
  ganache: 5777,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  bscTestnet: 97,
  bscMainnet: 56,
  MaticTestnet: 80001,
  MaticMainnet: 137,
  ropsten: 3,
  bobaTestnet: 28,
};

export const BobaTestnet: ChainAddresses = {
  oolongRouterAddress: "0x4df04E20cCd9a8B82634754fcB041e86c5FF085A",
  oolongFactoryAddress: "0xab740666e226cb5b6b451eb943b0257a7cb3ce0a",
  wethAddress: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
};

export const chainIdToAddresses: {
  [id: number]: { [contractName: string]: string };
} = {
  [chainIds.bobaTestnet]: { ...BobaTestnet },
  [chainIds.hardhat]: { ...BobaTestnet },
};
