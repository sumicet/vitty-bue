import { Icon } from '@/components';
import { Center, HStack, Text, useColorModeValue } from '@chakra-ui/react';

export function VaultComingSoon() {
    const boxShadow = useColorModeValue('vaultLight', 'vaultDark');
    const outlineColor = useColorModeValue('outlineLight', 'outlineDark');
    const color = useColorModeValue('tertiaryLight', 'tertiaryDark');

    return (
        <Center
            boxShadow={boxShadow}
            borderRadius="borderRadius"
            outline="1px solid"
            outlineColor={outlineColor}
            width="100%"
            height={100}
            color={color}
        >
            <HStack spacing="space6">
                <Text variant="h5">More coming soon</Text>
                <Icon type="arrow" boxSize="space16" />
            </HStack>
        </Center>
    );
}
