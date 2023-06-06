import { Button, HStack, Text } from '@chakra-ui/react';

export function Header() {
    return (
        <HStack
            justifyContent="space-between"
            spacing="space26"
            width="100%"
            height="space80"
            paddingX={{ base: 'space16', sm: 'space30' }}
        >
            <Text>Vitty Bue</Text>
            <Button variant="light" size="wide">
                Connect wallet
            </Button>
        </HStack>
    );
}
