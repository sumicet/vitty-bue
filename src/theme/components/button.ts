import { defineStyleConfig } from '@chakra-ui/system';

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: 'radius25',
        paddingX: 'space30',
        height: 'space48',
        bgColor: 'coral',
        textStyle: 'body1Bold',
        color: 'white',
    },
    variants: {
        light: {
            bgColor: 'sunset',
        },
        outlined: {
            boxShadow: 'inset 0 0 0 1px var(--vitty-bue-colors-coral)',
            bgColor: 'transparent',
            color: 'coral',
        },
    },
    sizes: {
        wide: {
            paddingX: 'space50',
            height: 'space26',
            textStyle: 'body2Bold',
        },
        stretched: {
            width: '100%',
        },
        // The green CTA, TODO
        pulse: {},
    },
});
