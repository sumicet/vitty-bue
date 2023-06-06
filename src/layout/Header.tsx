import { Icon, Image } from '@/components';
import { Box, Button, HStack, Text, useColorMode } from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const MotionHStack = motion(HStack);
const MotionButton = motion(Button);

export function Header() {
    const { openConnectModal } = useConnectModal();
    const { isConnecting, isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
    const { colorMode, setColorMode } = useColorMode();

    return (
        <HStack
            justifyContent="space-between"
            spacing="space26"
            width="100%"
            height="space80"
            paddingX={{ base: 'space16', sm: 'space30' }}
            maxWidth="container.maxWidth"
        >
            <HStack as={Link} to="/">
                <Image src={logo} boxSize={38} />
                <Text variant="body1Bold">Vitty Bue</Text>
            </HStack>
            <HStack spacing="space26">
                <AnimatePresence mode="popLayout" initial={false}>
                    {isConnected ? (
                        <MotionHStack
                            spacing="space8"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ bounce: 0, ease: 'easeInOut' }}
                        >
                            <Icon type="wallet" boxSize="space20" color="coral" />
                            <Text variant="body3Bold">{`${address?.slice(0, 5)}...${address?.slice(
                                address.length - 3
                            )}`}</Text>
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
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ bounce: 0, ease: 'easeInOut' }}
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
    );
}
