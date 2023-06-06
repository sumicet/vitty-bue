import { Divider, Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react';

export function Stat({ name, value }: { name: string; value: string }) {
    const color = useColorModeValue('tertiaryLight', 'tertiaryDark');

    return (
        <Flex justifyContent="space-between" width="100%">
            <VStack spacing="space4" width="100%" justifyContent="center">
                <Text variant="h5">{value}</Text>
                <Text variant="body3" color={color}>
                    {name}
                </Text>
            </VStack>
            <Divider orientation="vertical" height={{ base: 40, sm: 60 }} />
        </Flex>
    );
}
