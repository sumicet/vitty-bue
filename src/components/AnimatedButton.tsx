import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const MotionButton = motion(Button);
const MotionBox = motion(Box);

const variants: Variants = {
    offscreen: { width: 48, height: 48, x: '-50%', borderRadius: 24, opacity: 0.5 },
    onscreen: {
        x: '-50%',
        width: '100%',
        borderRadius: 25,
        opacity: 1,
        transition: { delay: 0.1, ease: 'easeInOut' },
    },
};

export function AnimatedButton(props: ButtonProps) {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    return (
        <MotionBox
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <MotionBox
                variants={variants}
                position="absolute"
                left="50%"
                bgColor="coral"
                onAnimationComplete={() => setIsAnimationComplete(true)}
            />
            <MotionButton
                {...props}
                opacity={0}
                animate={{ opacity: isAnimationComplete ? 1 : 0 }}
            />
        </MotionBox>
    );
}
