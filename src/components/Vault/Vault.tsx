import { Divider, Flex, HStack, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import { Icon, Image } from '..';
import { Link } from 'react-router-dom';
import { Stat } from './Stat';

interface VaultProps {
    name: string;
    image: string;
    rateSchedule: string;
    interestRate: string;
    loansAvailable: string;
    loansIssued: string;
}

export function Vault({
    image,
    interestRate,
    loansAvailable,
    loansIssued,
    name,
    rateSchedule,
}: VaultProps) {
    const boxShadow = useColorModeValue('vaultLight', 'vaultDark');
    const outlineColor = useColorModeValue('outlineLight', 'outlineDark');
    const bgColor = useColorModeValue('white', 'black');

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

    return (
        <SimpleGrid
            columns={6}
            boxShadow={boxShadow}
            borderRadius="borderRadius"
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
                    <Image src={image} boxSize="space40" objectFit="cover" borderRadius="radius4" />
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
