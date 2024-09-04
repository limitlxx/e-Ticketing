import { http, createStorage, cookieStorage } from 'wagmi';
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bscTestnet, 
  blastSepolia,
  polygonAmoy
} from "wagmi/chains";

const projectId = "YOUR_PROJECT_ID";

const supportedChains: Chain[] = [
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bscTestnet, 
  blastSepolia,
  polygonAmoy
 // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
];

export const config = getDefaultConfig({
  appName: "Ticketing Dapp",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
});