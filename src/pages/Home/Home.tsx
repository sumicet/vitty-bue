import { AnimateInView, AnimateInViewItem, AnimatedButton, VaultCard } from '@/components';
import { SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { VaultComingSoon } from './VaultComingSoon';
import { Link } from 'react-router-dom';
import { Stat } from './Stat';
import { LayoutGroup, motion } from 'framer-motion';
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
                <LayoutGroup>
                    {isConnected ? (
                        // @ts-ignore TODO: fix this
                        <AnimatedButton as={Link} to="/deposit">
                            Deposit NFT
                        </AnimatedButton>
                    ) : (
                        <AnimatedButton onClick={openConnectModal}>Connect wallet</AnimatedButton>
                    )}
                </LayoutGroup>
                <Balancer>
                    <Text variant="body2">Join the world’s first home staking protocol.</Text>
                </Balancer>
            </VStack>
            <VStack width="100%" spacing={{ base: 'space26', sm: 'space70' }}>
                <Text variant="h3">Vaults</Text>
                <VStack spacing={{ base: 'space16', sm: 'space20' }} width="100%">
                    <SimpleGrid
                        as={AnimateInView}
                        width="100%"
                        minChildWidth={{ base: 350, xl: '100%' }}
                        gap={{ base: 'space16', sm: 'space20' }}
                    >
                        <AnimateInViewItem width="100%">
                            <VaultCard
                                name="V1"
                                image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                                rateSchedule="Fixed"
                                interestRate="3%"
                                loansAvailable="$1,961,613.00"
                                loansIssued="3,038,387 KUSD"
                                size={{ base: 'small', xl: 'medium' }}
                            />
                        </AnimateInViewItem>
                        <AnimateInViewItem width="100%">
                            <VaultCard
                                name="V1"
                                image="https://ih1.redbubble.net/image.1744010751.0122/flat,750x1000,075,f.jpg"
                                rateSchedule="Fixed"
                                interestRate="3%"
                                loansAvailable="$1,961,613.00"
                                loansIssued="3,038,387 KUSD"
                                size={{ base: 'small', xl: 'medium' }}
                            />
                        </AnimateInViewItem>
                    </SimpleGrid>
                    <AnimateInView width="100%">
                        <AnimateInViewItem custom={3} width="100%">
                            <VaultComingSoon />
                        </AnimateInViewItem>
                    </AnimateInView>
                </VStack>
            </VStack>
        </VStack>
    );
}
