import { Center, Text, VStack } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export function Error() {
    return (
        <Center boxSize="100%">
            <VStack spacing="space20">
                <Text variant={{ base: 'h3', sm: 'h2' }}>Error</Text>
                <Text variant="body1">Something went wrong.</Text>
            </VStack>
        </Center>
    );
}
