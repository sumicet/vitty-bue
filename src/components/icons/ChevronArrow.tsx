import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function ChevronArrow(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2929 5.79289C12.6834 5.40237 13.3166 5.40237 13.7071 5.79289C14.0976 6.18342 14.0976 6.81658 13.7071 7.20711L8.70711 12.2071C8.31658 12.5976 7.68342 12.5976 7.29289 12.2071L2.29289 7.20711C1.90237 6.81658 1.90237 6.18342 2.29289 5.79289C2.68342 5.40237 3.31658 5.40237 3.70711 5.79289L8 10.0858L12.2929 5.79289Z"
                fill="currentColor"
            />
        </Icon>
    );
}
