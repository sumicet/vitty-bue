import './polyfills';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';

import { createRoot } from 'react-dom/client';
import { Routes } from '@/components';
import { StrictMode } from 'react';
import { chains, wagmiConfig } from './web3';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { theme } from './theme';
import { ChakraBaseProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                modalSize="compact"
                appInfo={{
                    appName: 'Vitty Bue',
                }}
            >
                <ChakraBaseProvider theme={theme}>
                    <Routes />
                </ChakraBaseProvider>
            </RainbowKitProvider>
        </WagmiConfig>
    </StrictMode>
);
