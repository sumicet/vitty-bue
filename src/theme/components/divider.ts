import { defineStyleConfig } from '@chakra-ui/styled-system';

// https://chakra-ui.com/docs/components/divider/usage

export const Divider = defineStyleConfig({
    baseStyle: (props) => {
        if (props.orientation === 'vertical') {
            return {
                borderLeftWidth: 0,
                width: '1px',
            };
        } else {
            return {
                borderBottomWidth: 0,
                height: '1px',
            };
        }
    },
    variants: {
        simple: (props) => ({
            bg: 'sunset',
            opacity: 0.2,
        }),
    },
    defaultProps: {
        variant: 'simple',
    },
});
