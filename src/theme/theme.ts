import { ThemeConfig } from '@chakra-ui/theme';
import { components } from './components';
import { foundations } from './foundations';

const config: ThemeConfig = {
    useSystemColorMode: true,
    initialColorMode: 'system',
    cssVarPrefix: 'vitty-bue',
};

export const theme = {
    components,
    ...foundations,
    config,
};
