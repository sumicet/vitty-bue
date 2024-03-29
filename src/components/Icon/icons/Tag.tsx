import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Tag(props: IconProps) {
    return (
        <Icon width="100%" height="100%" viewBox="0 0 16 16" fill="none" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.12564 2C7.59897 2 8.05291 2.18803 8.38761 2.52272L13.4773 7.61239C14.1742 8.30936 14.1742 9.43936 13.4773 10.1363L10.1363 13.4773C9.43936 14.1742 8.30936 14.1742 7.61239 13.4773L2.52272 8.38761C2.18803 8.05291 2 7.59897 2 7.12564V3.78469C2 2.79903 2.79903 2 3.78469 2H7.12564ZM5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4Z"
                fill="currentColor"
            />
        </Icon>
    );
}
