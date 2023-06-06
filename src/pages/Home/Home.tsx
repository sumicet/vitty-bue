import { Vault } from '@/components';
import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { VaultComingSoon } from './VaultComingSoon';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <VStack width="100%" spacing={{ base: 'space64', md: 'space80' }}>
            <VStack width="100%" spacing={{ base: 'space30', md: 'space64' }}>
                <Balancer ratio={0.5}>
                    <Text
                        maxWidth={972}
                        variant={{ base: 'displaySmall', md: 'display' }}
                        textAlign="center"
                        width="100%"
                    >
                        Unlock the value of your home with DeFi
                    </Text>
                </Balancer>
                <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: 'space16', md: 'space20' }}>
                    {[
                        { value: `$3,797,938`, text: 'TVL' },
                        {
                            value: '13',
                            text: 'Homes Deposited',
                        },
                        { value: '14.5k', text: 'Staked KASA' },
                    ].map(({ value, text }) => (
                        <VStack key={text} alignItems="center" spacing="space4">
                            <Text variant={{ base: 'h3', md: 'h2' }} color="coral">
                                {value}
                            </Text>
                            <Text variant={{ base: 'body1', md: 'h5' }}>{text}</Text>
                        </VStack>
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack spacing={{ base: 'space16', sm: 'space20' }}>
                <Button as={Link} to="/deposit">
                    Deposit NFT
                </Button>
                <Balancer>
                    <Text variant="body2">Join the world’s first home staking protocol.</Text>
                </Balancer>
            </VStack>
            <VStack width="100%" spacing={{ base: 'space26', sm: 'space70' }} maxWidth={1196}>
                <Text variant="h3">Vaults</Text>
                <VStack width="100%" spacing={{ base: 'space16', sm: 'space20' }}>
                    <Vault
                        name="V1"
                        image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                        rateSchedule="Fixed"
                        interestRate="3%"
                        loansAvailable="$1,961,613.00"
                        loansIssued="3,038,387 KUSD"
                    />
                    <Vault
                        name="V1"
                        image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                        rateSchedule="Fixed"
                        interestRate="3%"
                        loansAvailable="$1,961,613.00"
                        loansIssued="3,038,387 KUSD"
                    />
                    <VaultComingSoon />
                </VStack>
            </VStack>
        </VStack>
    );
}
