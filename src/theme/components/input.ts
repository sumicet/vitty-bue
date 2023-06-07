import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/system';

/**
 * @see https://chakra-ui.com/docs/components/input/theming
 */
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys
);

const baseStyle = definePartsStyle(() => ({
    field: {
        // TODO
    },
}));

export const Input = defineMultiStyleConfig({ baseStyle });
