import { Center, Flex, VStack, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';

export function Layout({ children }: { children: React.ReactNode }) {
    const color = useColorModeValue('night', 'day');

    return (
        <VStack width="100%" color={color}>
            <Header />
            <Center boxSize="100%" paddingX={{ base: 'space16', sm: 'space30' }}>
                {/* measure screen and add minHeight here */}
                <Flex maxWidth="container.maxWidth" boxSize="100%">
                    {children}
                </Flex>
            </Center>
        </VStack>
    );
}
