import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';

export const Text = defineStyleConfig({
    variants: textStyles,
    defaultProps: {
        variant: 'body1',
    },
});
