import { Box, Center } from '@chakra-ui/react';
import { BlurryCircle } from './BlurryCircle';

export function Background() {
    return (
        <Center position="absolute" top={0} boxSize="100%">
            <Box boxSize="100%" maxWidth="container.maxWidth" position="relative">
                <BlurryCircle bgColor="success" top="35%" left="10%" />
                <BlurryCircle bgColor="sunset" top="15%" left="55%" />
            </Box>
        </Center>
    );
}
