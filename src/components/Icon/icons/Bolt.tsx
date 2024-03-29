import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Bolt(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.25014 10.1995H4.75099C4.17225 10.1995 3.81167 9.5298 4.10328 8.99656L7.35229 2.39819C7.73795 1.69296 8.74986 1.98477 8.74986 2.80122V5.80054H11.249C11.8277 5.80054 12.1883 6.4702 11.8967 7.00344L8.64771 13.6018C8.26205 14.307 7.25014 14.0152 7.25014 13.1988V10.1995Z"
                fill="currentColor"
            />
        </Icon>
    );
}
