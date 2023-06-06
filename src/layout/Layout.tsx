import { Center, Flex, VStack } from '@chakra-ui/react';
import { Header } from './Header';

export function Layout() {
    return (
        <VStack width="100%">
            <Header />
            <Center boxSize="100%">
                {/* measure screen and add minHeight here */}
                <Flex maxWidth="container.maxWidth" boxSize="100%"></Flex>
            </Center>
        </VStack>
    );
}
