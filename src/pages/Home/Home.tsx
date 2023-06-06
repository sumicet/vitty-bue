import { AnimateInView, AnimateInViewItem, Vault } from '@/components';
import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { VaultComingSoon } from './VaultComingSoon';
import { Link } from 'react-router-dom';
import { Stat } from './Stat';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';

const MotionText = motion(Text);

export function Home() {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();

    return (
        <VStack width="100%" spacing={{ base: 'space64', md: 'space80' }}>
            <VStack width="100%" spacing={{ base: 'space30', md: 'space64' }}>
                <Balancer ratio={0.5}>
                    <MotionText
                        initial={{ opacity: 0.5, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ bounce: 0.1, ease: 'easeInOut' }}
                        maxWidth={972}
                        variant={{ base: 'displaySmall', md: 'display' }}
                        textAlign="center"
                        width="100%"
                    >
                        Unlock the value of your home with DeFi
                    </MotionText>
                </Balancer>
                <SimpleGrid columns={{ base: 1, sm: 3 }} gap={{ base: 'space16', md: 'space20' }}>
                    {[
                        { value: 3797938, text: 'TVL' },
                        {
                            value: 13,
                            text: 'Homes Deposited',
                        },
                        { value: 14500, text: 'Staked KASA' },
                    ].map(({ value, text }) => (
                        <Stat value={value} text={text} />
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack spacing={{ base: 'space16', sm: 'space20' }}>
                {isConnected ? (
                    <Button as={Link} to="/deposit">
                        Deposit NFT
                    </Button>
                ) : (
                    <Button onClick={openConnectModal}>Deposit NFT</Button>
                )}
                <Balancer>
                    <Text variant="body2">Join the world’s first home staking protocol.</Text>
                </Balancer>
            </VStack>
            <VStack width="100%" spacing={{ base: 'space26', sm: 'space70' }}>
                <Text variant="h3">Vaults</Text>
                <VStack
                    as={AnimateInView}
                    width="100%"
                    spacing={{ base: 'space16', sm: 'space20' }}
                >
                    <AnimateInViewItem width="100%">
                        <Vault
                            name="V1"
                            image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                            rateSchedule="Fixed"
                            interestRate="3%"
                            loansAvailable="$1,961,613.00"
                            loansIssued="3,038,387 KUSD"
                        />
                    </AnimateInViewItem>
                    <AnimateInViewItem width="100%">
                        <Vault
                            name="V1"
                            image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                            rateSchedule="Fixed"
                            interestRate="3%"
                            loansAvailable="$1,961,613.00"
                            loansIssued="3,038,387 KUSD"
                        />
                    </AnimateInViewItem>
                    <AnimateInViewItem width="100%">
                        <VaultComingSoon />
                    </AnimateInViewItem>
                </VStack>
            </VStack>
        </VStack>
    );
}
