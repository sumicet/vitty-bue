import { Icon, Image } from '@/components';
import { Box, Button, Center, HStack, Text, useColorMode } from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const MotionHStack = motion(HStack);
const MotionButton = motion(Button);

const motionProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
    transition: { bounce: 0, ease: 'easeInOut' },
};

export function Header() {
    const { openConnectModal } = useConnectModal();
    const { isConnecting, isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
    const { colorMode, setColorMode } = useColorMode();

    // TODO: Should extract this to a util function.
    const formattedAddress = `${address?.slice(0, 5)}...${address?.slice(address.length - 3)}`;

    return (
        <Center paddingX={{ base: 'space16', sm: 'space30' }} width="100%">
            <HStack
                justifyContent="space-between"
                spacing="space26"
                width="100%"
                height="space80"
                maxWidth="header.maxWidth"
            >
                <HStack as={Link} to="/">
                    <Image src={logo} boxSize={38} />
                    <Text variant="body1Bold">Vitty Bue</Text>
                </HStack>

                <HStack spacing="space26">
                    <AnimatePresence mode="wait" initial={false}>
                        {isConnected ? (
                            <MotionHStack spacing="space8" {...motionProps}>
                                <Icon type="wallet" boxSize="space20" color="coral" />
                                <Text variant="body3Bold">{formattedAddress}</Text>
                                <Button variant="light" size="wide" onClick={() => disconnect()}>
                                    Disconnect
                                </Button>
                            </MotionHStack>
                        ) : (
                            <MotionButton
                                variant="light"
                                size="wide"
                                onClick={openConnectModal}
                                isLoading={isConnecting}
                                {...motionProps}
                            >
                                Connect wallet
                            </MotionButton>
                        )}
                    </AnimatePresence>

                    <Box>
                        <DarkModeSwitch
                            checked={colorMode !== 'dark'}
                            onChange={(checked) => setColorMode(!checked ? 'dark' : 'light')}
                            size={24}
                            sunColor="white"
                            moonColor="black"
                        />
                    </Box>
                </HStack>
            </HStack>
        </Center>
    );
}
