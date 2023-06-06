import { BoxProps, chakra } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import { Children, ReactElement, cloneElement } from 'react';

const MotionSpan = motion(chakra.span);

const variants: Variants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.6,
            delay: i * 0.05,
        },
    }),
};

export function AnimateInView({ children, ...rest }: BoxProps & { children: ReactElement }) {
    const _children = Children.map(children, (child, index) =>
        cloneElement(child, {
            ...(child?.props || {}),
            custom: index + 1,
        })
    );

    return (
        <MotionSpan
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            {...rest}
        >
            {_children}
        </MotionSpan>
    );
}

export function AnimateInViewItem(props: BoxProps & { custom?: number }) {
    return <MotionSpan variants={variants} {...props} />;
}
