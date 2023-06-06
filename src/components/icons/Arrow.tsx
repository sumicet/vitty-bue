import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Arrow(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.16031 3.47178L9.2487 3.35696C9.63171 2.91762 10.2344 2.88383 10.6512 3.25558L10.7513 3.35696L13.9388 7.01321L13.9828 7.06679L14.0414 7.14947L14.1175 7.28505L14.1743 7.42243L14.2119 7.55082L14.2427 7.73107L14.25 7.875L14.247 7.9667L14.2285 8.11963L14.1972 8.25542L14.1505 8.3908L14.0949 8.50961L14.0166 8.63727L13.9388 8.73679L10.7513 12.393C10.3364 12.869 9.66363 12.869 9.2487 12.393C8.86568 11.9537 8.83622 11.2624 9.16031 10.7843L9.2487 10.6695L10.6216 9.09375H2.5625C1.9757 9.09375 1.5 8.5481 1.5 7.875C1.5 7.2019 1.9757 6.65625 2.5625 6.65625H10.6216L9.2487 5.08054C8.86568 4.6412 8.83622 3.94988 9.16031 3.47178L9.2487 3.35696L9.16031 3.47178Z"
                fill="currentColor"
            />
        </Icon>
    );
}
