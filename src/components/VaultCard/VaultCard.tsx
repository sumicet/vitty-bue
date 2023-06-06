import {
    Divider,
    Flex,
    HStack,
    ResponsiveValue,
    SimpleGrid,
    Text,
    VStack,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import { Icon, Image } from '..';
import { Link } from 'react-router-dom';
import { Stat } from './Stat';
import { transitionNormal } from '@/theme';

interface VaultProps {
    name: string;
    image: string;
    rateSchedule: string;
    interestRate: string;
    loansAvailable: string;
    loansIssued: string;
}

export function VaultCard({
    image,
    interestRate,
    loansAvailable,
    loansIssued,
    name,
    rateSchedule,
    size: sizeProp = 'medium',
}: VaultProps & { size?: ResponsiveValue<'small' | 'medium'> }) {
    const outlineColor = useColorModeValue('outlineLight', 'outlineDark');
    const bgColor = useColorModeValue('white', 'black');
    const color = useColorModeValue('tertiaryLight', 'tertiaryDark');

    const stats = [
        {
            value: rateSchedule,
            name: 'Rate Schedule',
        },
        {
            value: interestRate,
            name: 'Interest Rate',
        },
        { value: loansAvailable, name: 'Loans Available' },
        { value: loansIssued, name: 'Loans Issued' },
    ];

    const size = useBreakpointValue(typeof sizeProp === 'object' ? sizeProp : { base: sizeProp }, {
        ssr: false,
    });

    if (size === 'medium') {
        return (
            <SimpleGrid
                columns={6}
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
                alignItems="center"
                paddingY={{ base: 'space16', sm: 'space20' }}
                paddingX={{ base: 'space20', sm: 'space30' }}
                bgColor={bgColor}
            >
                <Flex justifyContent="space-between" width="100%" height="100%">
                    <HStack spacing="space20">
                        <Image
                            src={image}
                            boxSize="space40"
                            objectFit="cover"
                            borderRadius="radius4"
                        />
                        <Text variant={{ base: 'h3', sm: 'h4' }}>V1</Text>
                    </HStack>
                    <Divider orientation="vertical" />
                </Flex>
                {stats.map(({ value, name }) => (
                    <Stat key={name} value={value} name={name} />
                ))}
                <HStack
                    as={Link}
                    to={`/vaults/${name}`}
                    spacing="space6"
                    color="coral"
                    justifyContent="center"
                    width="100%"
                >
                    <Text variant="h5">View positions</Text>
                    <Icon type="arrow" boxSize="space16" />
                </HStack>
            </SimpleGrid>
        );
    }

    return (
        <VStack
            spacing="space26"
            width="100%"
            _light={{
                boxShadow: 'vaultLight',
            }}
            _dark={{
                outlineColor: '#262626',
            }}
            borderRadius="radius6"
            outline="1px solid"
            outlineColor={outlineColor}
            paddingY={{ base: 'space16', sm: 'space20' }}
            paddingX={{ base: 'space20', sm: 'space30' }}
            bgColor={bgColor}
            {...transitionNormal}
        >
            <HStack
                as={Link}
                to={`/vaults/${name}`}
                spacing="space20"
                width="100%"
                justifyContent="space-between"
                {...transitionNormal}
            >
                <HStack spacing="space20">
                    <Image src={image} boxSize="space40" objectFit="cover" borderRadius="radius4" />
                    <Text variant={{ base: 'h3', sm: 'h4' }} noOfLines={1}>
                        V1
                    </Text>
                </HStack>
                <Icon type="arrow" boxSize="space20" color="coral" />
            </HStack>
            <VStack spacing="space16" width="100%">
                {stats.map(({ value, name }) => (
                    <HStack key={name} justifyContent="space-between" width="100%" spacing="space4">
                        <Text variant="body2" color={color}>
                            {name}
                        </Text>
                        <Text variant="body2Bold">{value}</Text>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    );
}
