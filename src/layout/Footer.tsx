import { Box, Center, Divider, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import logo from '../assets/images/logo.png';
import { Image } from '@/components';
import { Balancer } from 'react-wrap-balancer';
import { Link } from 'react-router-dom';
import { animations } from '@/theme';

function Section({ title, elements }: { title: string; elements: string[] }) {
    return (
        <VStack spacing="space4" alignItems="flex-start">
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

const sections = [
    {
        title: 'Marketplace',
        elements: ['All NFTs', 'Solana NFTs', 'Property', 'Boats', 'Other stuff'],
    },
    {
        title: 'My Account',
        elements: ['Profile', 'Favourites', 'Watchlist', 'My Collections', 'Settings'],
    },
    {
        title: 'Resources',
        elements: [
            'Help Center',
            'Platform Status',
            'Partners',
            'Taxes',
            'Blog',
            'Docs',
            'Newsletter',
        ],
    },
    {
        title: 'Company',
        elements: ['About', 'Careers', 'Ventures', 'Grants'],
    },
    {
        title: 'Stats',
        elements: ['Rankings', 'Activity'],
    },
];

export function Footer() {
    return (
        <Center
            width="100%"
            height="fit-content"
            paddingX={{ base: 'space16', sm: 'space30' }}
            alignItems="center"
        >
            <VStack
                justifyContent="space-between"
                spacing="space26"
                maxWidth="container.maxWidth"
                width="100%"
            >
                <Divider />
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    justifyContent="space-between"
                    width="100%"
                    spacing={{ base: 'space64', sm: 'space120' }}
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                >
                    <VStack
                        spacing="space16"
                        alignItems="flex-start"
                        width={{ base: '100%', lg: 'auto' }}
                    >
                        <VStack spacing="space4" alignItems="flex-start">
                            <Image src={logo} boxSize={38} objectFit="contain" />
                            <Text variant="body1Bold">Klasma Labs</Text>
                        </VStack>
                        <Balancer ratio={0.5}>
                            <Text variant="body2" maxWidth={{ base: 'auto', lg: 250 }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Balancer>
                    </VStack>
                    <SimpleGrid
                        justifyContent="space-between"
                        gap={{ base: 'space30', sm: 'space40', md: 'space48', lg: 'space64' }}
                        minChildWidth={150}
                        width="100%"
                    >
                        {sections.map(({ title, elements }) => (
                            <Section key={title} title={title} elements={elements} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </VStack>
        </Center>
    );
}
