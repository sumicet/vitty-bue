import { Layout } from '@/layout';
import { useOutlet } from 'react-router-dom';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/playfair-display';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

function AnimatedOutlet({ outlet: outletProp }: { outlet?: React.ReactElement | null }) {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet || outletProp}</>;
}

const MotionBox = motion(Box);

// Passing the error as an outlet prop to force it to render inside the layout
// See Routes.tsx for more details
function App({ outlet }: { outlet?: React.ReactElement | null }) {
    return (
        <Layout>
            <AnimatePresence mode="popLayout">
                <MotionBox
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                    boxSize="100%"
                >
                    <AnimatedOutlet outlet={outlet} />
                </MotionBox>
            </AnimatePresence>
        </Layout>
    );
}

export default App;
