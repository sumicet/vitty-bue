import { defineStyleConfig } from '@chakra-ui/styled-system';

/**
 * @see https://chakra-ui.com/docs/components/divider/theming
 */
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
        simple: {
            bg: 'sunset',
            opacity: 0.2,
        },
    },
    defaultProps: {
        variant: 'simple',
    },
});
