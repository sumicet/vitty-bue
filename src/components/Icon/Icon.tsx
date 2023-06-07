import { IconProps as ChakraIconProps } from '@chakra-ui/react';
import { Arrow, Bell, Bolt, ChevronArrow, Dollar, Eye, Star, Tag, Wallet, X } from './icons';

const icons = {
    arrow: Arrow,
    bell: Bell,
    bolt: Bolt,
    chevronArrow: ChevronArrow,
    dollar: Dollar,
    eye: Eye,
    star: Star,
    tag: Tag,
    wallet: Wallet,
    x: X,
} as const;

export interface IconProps extends ChakraIconProps {
    type: keyof typeof icons;
}

export function Icon(props: IconProps) {
    const { type, ...other } = props;
    const Component = icons[type];

    /**
     * Setting the height and width to auto prevents safari from assigning a
     * default number.
     * @see https://stackoverflow.com/a/26105445/19391114
     */
    return <Component height="auto" width="auto" {...other} />;
}
