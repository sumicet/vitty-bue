import { Box, Center, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';
import { Background } from '@/components';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
    const color = useColorModeValue('night', 'day');
    const bgColor = useColorModeValue('white', 'black');

    return (
        <Flex boxSize="100%" bgColor={bgColor} position="relative">
            <Background />
            <VStack
                spacing={{ base: 'space64', sm: 'space120' }}
                paddingBottom={{ base: 'space64', sm: 'space120' }}
                boxSize="100%"
                color={color}
                position="relative"
            >
                <VStack
                    spacing={{ base: 'space40', sm: 'space80' }}
                    boxSize="100%"
                    position="relative"
                    minHeight="calc(100vh - 120px)"
                >
                    <Header />
                    <Center boxSize="100%" paddingX={{ base: 'space16', sm: 'space30' }}>
                        {/* measure screen and add minHeight here */}
                        <Flex maxWidth="container.maxWidth" boxSize="100%">
                            {children}
                        </Flex>
                    </Center>
                </VStack>
                <Footer />
            </VStack>
        </Flex>
    );
}
