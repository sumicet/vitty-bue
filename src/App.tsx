import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from '@/theme';

function App() {
    return (
        <ChakraBaseProvider theme={theme}>
            <div />
        </ChakraBaseProvider>
    );
}

export default App;
