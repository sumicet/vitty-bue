import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Eye(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4C10.4474 4 12.4276 5.27405 14 8C12.4276 10.7259 10.4474 12 8 12C5.63699 12 3.7095 10.8123 2.16412 8.27682L2 8C3.57238 5.27405 5.5526 4 8 4ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z"
                fill="currentColor"
            />
        </Icon>
    );
}
