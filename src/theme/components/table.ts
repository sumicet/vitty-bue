import { tableAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
    table: {
        fontVariantNumeric: 'lining-nums tabular-nums',
        borderCollapse: 'separate',
        width: 'full',
        borderSpacing: 20,
        margin: -20,
    },
    th: {
        textStyle: 'body1',
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        textAlign: 'start',
    },
    td: {
        textAlign: 'start',
    },
    caption: {
        mt: 4,
        textAlign: 'center',
    },
});

const sizes = {
    md: definePartsStyle({
        th: {
            px: '6',
            py: '3',
            lineHeight: '4',
            fontSize: 'xs',
        },
        td: {
            px: '6',
            py: '4',
            lineHeight: '5',
        },
        caption: {
            px: '6',
            py: '2',
            fontSize: 'sm',
        },
    }),
};

export const Table = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants: {
        vault: (props) => ({
            table: {
                tableLayout: 'fixed',
            },
            tr: {
                bgColor: mode('white', 'black')(props),
                borderRadius: 'radius6',
                boxShadow: mode('vaultLight', 'vaultDark')(props),
                outline: '1px solid',
                outlineOffset: '-1px',
                outlineColor: mode('outlineLight', 'outlineDark')(props),
            },
        }),
    },
    defaultProps: {
        size: 'md',
    },
});
