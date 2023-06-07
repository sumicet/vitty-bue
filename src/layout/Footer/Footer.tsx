import { Center, Divider, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import { BlurryCircle, Image } from '@/components';
import { Balancer } from 'react-wrap-balancer';
import { Section } from './Section';

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
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                        width={{ base: '100%', lg: 'auto' }}
                    >
                        <VStack spacing="space4" alignItems="flex-start">
                            <Image src={logo} boxSize={38} objectFit="contain" />
                            <Text variant="body1Bold">Klasma Labs</Text>
                        </VStack>

                        <Balancer>
                            <Text
                                variant="body2"
                                maxWidth={{ base: 'auto', lg: 400 }}
                                textAlign={{ base: 'center', lg: 'start' }}
                            >
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Balancer>
                    </VStack>

                    <SimpleGrid
                        justifyContent="space-between"
                        gap="space30"
                        minChildWidth={150}
                        width="100%"
                    >
                        {sections.map(({ title, elements }) => (
                            <Section key={title} title={title} elements={elements} />
                        ))}
                    </SimpleGrid>
                </Stack>
            </VStack>

            {/* Background circles */}
            <BlurryCircle bgColor="sunset" left="25%" bottom={0} transform="translateY(50%)" />
            <BlurryCircle bgColor="success" right="25%" bottom={0} transform="translateY(50%)" />
        </Center>
    );
}
