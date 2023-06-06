import { keyframes } from '@chakra-ui/react';

const grow = keyframes`
    from {
        width: 0%;
        opacity: 0.5;
    }
    to {
        width: 100%;
        opacity: 1;
    }
`;

const _afterLine = {
    content: '""',
    position: 'absolute',
    bottom: -5,
    left: 0,
    height: '3px',
    width: '100%',
    bgColor: 'coral',
    animation: `${grow} 0.1s ease-in-out`,
    borderRadius: '1px',
};

export const animations = {
    _afterLine,
};
