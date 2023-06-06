import { Button, Center, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Balancer } from 'react-wrap-balancer';

export function Error() {
    return (
        <Center boxSize="100%">
            <VStack spacing="space20">
                <Balancer>
                    <Text variant={{ base: 'h3', sm: 'h2' }}>Error</Text>
                </Balancer>
                <Balancer>
                    <Text variant="body1">We can't seem to find the page you're looking for.</Text>
                </Balancer>
                <Button as={Link} to="/">
                    Go to homepage
                </Button>
            </VStack>
        </Center>
    );
}
