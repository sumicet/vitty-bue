import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@/theme';
import { Layout } from '@/layout';
import { Outlet } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiConfig } from '@/web3';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/playfair-display';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

// Passing the error as an outlet prop to force it to render inside the layout
// See Routes.tsx for more details
function App({ outlet }: { outlet?: React.ReactElement | null }) {
    return <Layout>{outlet || <Outlet />}</Layout>;
}

export default App;
