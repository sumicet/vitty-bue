import { Icon } from '@/components';
import { Center, HStack, Text, useColorModeValue } from '@chakra-ui/react';

export function VaultComingSoon() {
    const outlineColor = useColorModeValue('outlineLight', 'outlineDark');
    const color = useColorModeValue('tertiaryLight', 'tertiaryDark');
    const bgColor = useColorModeValue('white', 'black');

    return (
        <Center
            _light={{
                boxShadow: 'vaultLight',
            }}
            _dark={{
                outlineColor: '#262626',
            }}
            borderRadius="radius6"
            outline="1px solid"
            outlineColor={outlineColor}
            width="100%"
            height={100}
            color={color}
            bgColor={bgColor}
        >
            <HStack spacing="space6">
                <Text variant="h5">More coming soon</Text>
                <Icon type="arrow" boxSize="space16" />
            </HStack>
        </Center>
    );
}
