import { Icon } from '@/components';
import { Button, HStack, Text } from '@chakra-ui/react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

export function Header() {
    const { openConnectModal } = useConnectModal();
    const { isConnecting, isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();

    return (
        <HStack
            justifyContent="space-between"
            spacing="space26"
            width="100%"
            height="space80"
            paddingX={{ base: 'space16', sm: 'space30' }}
            maxWidth="container.maxWidth"
        >
            <Text>Vitty Bue</Text>
            {isConnected ? (
                <HStack spacing="space8">
                    <Icon type="wallet" boxSize="space20" color="coral" />
                    <Text variant="body3Bold">{`${address?.slice(0, 5)}...${address?.slice(
                        address.length - 3
                    )}`}</Text>
                    <Button onClick={() => disconnect()}>Disconnect</Button>
                </HStack>
            ) : isConnecting ? (
                <></>
            ) : (
                <Button variant="light" size="wide" onClick={openConnectModal}>
                    Connect wallet
                </Button>
            )}
        </HStack>
    );
}
