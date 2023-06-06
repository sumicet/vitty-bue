import { Circle, SquareProps } from '@chakra-ui/react';

export function BlurryCircle(props: SquareProps) {
    return (
        <Circle
            size="30%"
            filter="blur(180px)"
            position="absolute"
            zIndex={0}
            maxWidth={400}
            maxHeight={400}
            {...props}
        />
    );
}
