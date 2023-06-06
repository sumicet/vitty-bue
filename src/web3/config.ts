import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains([polygonMumbai], [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'Vitty Bue',
    projectId: 'd3fda61340d21aaec06c9bb565df9f79',
    chains,
});

const wagmiConfig: any = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export { chains, wagmiConfig };
