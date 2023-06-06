import { Box, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { animations } from '@/theme';

export function Section({ title, elements }: { title: string; elements: string[] }) {
    return (
        <VStack spacing="space4" alignItems={{ base: 'center', lg: 'flex-start' }}>
            <Box as={Link} to={`/${title}`} role="group" paddingY="space8">
                <Text variant="body1Bold" _groupHover={{ _after: animations._afterLine }}>
                    {title}
                </Text>
            </Box>
            {elements.map((element) => (
                <Box
                    as={Link}
                    key={element}
                    to={`/${element.replace(' ', '').toLowerCase()}`}
                    paddingY="space8"
                    role="group"
                >
                    <Text variant="body2" _groupHover={{ _after: animations._afterLine }}>
                        {element}
                    </Text>
                </Box>
            ))}
        </VStack>
    );
}
