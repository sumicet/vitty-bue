import { Box, Center, Circle } from '@chakra-ui/react';

export function Background() {
    return (
        <Center position="absolute" top={0} boxSize="100%">
            <Box boxSize="100%" maxWidth="container.maxWidth" position="relative">
                <Circle
                    bgColor="success"
                    size="30%"
                    top="35%"
                    left="10%"
                    filter="blur(150px)"
                    position="absolute"
                    zIndex={0}
                    maxWidth={400}
                    maxHeight={400}
                />
                <Circle
                    position="absolute"
                    bgColor="sunset"
                    size="25%"
                    top="15%"
                    left="55%"
                    filter="blur(150px)"
                    zIndex={0}
                    maxWidth={400}
                    maxHeight={400}
                />
            </Box>
        </Center>
    );
}
