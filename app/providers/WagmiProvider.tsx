'use client'

import '@rainbow-me/rainbowkit/styles.css';
import { Chain, configureChains, sepolia, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme
} from '@rainbow-me/rainbowkit';
import {
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { goerli, polygonMumbai, mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { WagmiConfig } from 'wagmi';
import * as React from 'react';


export const makeChain = (name: string, rpc: string, id: number) => {
    return {
        id: id,
        name: name,
        network: name,
        nativeCurrency: {
            decimals: 18,
            name: name,
            symbol: 'ETH',
        },
        rpcUrls: {
            default: {
                http: [rpc],
            },
            public: {
                http: [rpc],
            }
        },
        testnet: true,
    }
}

const defaultChains: Chain[] = [
    goerli,
    sepolia,
    polygonMumbai,
    mainnet,
    polygon,
    optimism,
    arbitrum,
];

export const { chains, publicClient, webSocketPublicClient } = configureChains(
    defaultChains,
    [publicProvider()]
);

const projectId = 'Tor_Tobi';

const { wallets } = getDefaultWallets({
    appName: 'Tobi',
    projectId,
    chains,
});

export const demoAppInfo = {
    appName: 'Tobi',
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
        ],
    },
]);

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});


export const RainbowProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider appInfo={demoAppInfo} chains={chains} theme={darkTheme({
                ...darkTheme.accentColors.orange,
            })}>
                {mounted && children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}