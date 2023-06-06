import { Box, Center, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';
import { Background } from '@/components';

export function Layout({ children }: { children: React.ReactNode }) {
    const color = useColorModeValue('night', 'day');
    const bgColor = useColorModeValue('white', 'black');

    return (
        <Box boxSize="100%" bgColor={bgColor}>
            <Background />
            <VStack boxSize="100%" color={color} position="relative">
                <Header />
                <Center boxSize="100%" paddingX={{ base: 'space16', sm: 'space30' }}>
                    {/* measure screen and add minHeight here */}
                    <Flex maxWidth="container.maxWidth" boxSize="100%">
                        {children}
                    </Flex>
                </Center>
            </VStack>
        </Box>
    );
}
