import { Text, VStack } from '@chakra-ui/react';
import { useCountUp } from 'use-count-up';

export function Stat({ value, text }: { value: number; text: string }) {
    const { value: val } = useCountUp({
        isCounting: true,
        start: value - 60 < 0 ? 0 : value - 60,
        end: value,
        duration: 2.4,
        easing: 'easeOutCubic',
        thousandsSeparator: ',',
    });

    return (
        <VStack key={text} alignItems="center" spacing="space4">
            {/* Css hack to keep the width unchanged as the value counts up. */}
            <Text variant={{ base: 'h3', md: 'h2' }} paddingX="space4" visibility="hidden">
                {value}
            </Text>
            <Text variant={{ base: 'h3', md: 'h2' }} color="coral" position="absolute">
                {val}
            </Text>
            <Text variant={{ base: 'body1', md: 'h5' }}>{text}</Text>
        </VStack>
    );
}
