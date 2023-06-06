import { Box, HStack, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { Image } from '.';

export function Vault() {
    const boxShadow = useColorModeValue('vaultLight', 'vaultDark');
    const outlineColor = useColorModeValue('outlineLight', 'outlineDark');

    return (
        <SimpleGrid
            columns={6}
            boxShadow={boxShadow}
            padding={{ base: 'space20', sm: 'space30' }}
            borderRadius="borderRadius"
            outline="1px solid"
            outlineColor={outlineColor}
        >
            <Box>
                <HStack spacing="space20">
                    <Image
                        src="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                        boxSize="space40"
                        objectFit="cover"
                        borderRadius="radius4"
                    />
                    <Text variant={{ base: 'h3', sm: 'h4' }}>V1</Text>
                </HStack>
            </Box>
        </SimpleGrid>
    );
}
