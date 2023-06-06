import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@/theme';
import { Layout } from '@/layout';
import { Outlet } from 'react-router-dom';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/playfair-display';

// Passing the error as an outlet prop to force it to render inside the layout
// See Routes.tsx for more details
function App({ outlet }: { outlet?: React.ReactElement | null }) {
    return (
        <ChakraBaseProvider theme={theme}>
            <Layout>{outlet || <Outlet />}</Layout>
        </ChakraBaseProvider>
    );
}

export default App;
