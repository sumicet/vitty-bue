import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
    bitskiWallet,
    braveWallet,
    coinbaseWallet,
    dawnWallet,
    metaMaskWallet,
    mewWallet,
    phantomWallet,
    rabbyWallet,
    rainbowWallet,
    safeWallet,
    walletConnectWallet,
    xdefiWallet,
} from '@rainbow-me/rainbowkit/wallets';

const { chains, publicClient } = configureChains([polygonMumbai], [publicProvider()]);

const projectId = 'd3fda61340d21aaec06c9bb565df9f79';

const connectors = connectorsForWallets([
    {
        groupName: 'Recommended',
        wallets: [
            metaMaskWallet({ chains }),
            coinbaseWallet({ appName: 'Vitty Bue', chains }),
            walletConnectWallet({ projectId, chains }),
            rainbowWallet({ projectId, chains }),
            bitskiWallet({
                chains,
            }),
            braveWallet({
                chains,
            }),
            dawnWallet({
                chains,
            }),
            mewWallet({
                chains,
            }),
            phantomWallet({
                chains,
            }),
            rabbyWallet({
                chains,
            }),
            safeWallet({
                chains,
            }),
            xdefiWallet({
                chains,
            }),
        ],
    },
]);

const wagmiConfig: any = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export { chains, wagmiConfig };
