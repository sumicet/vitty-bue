import { Layout } from '@/layout';
import { useOutlet } from 'react-router-dom';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/playfair-display';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedOutlet: React.FC = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
};

// Passing the error as an outlet prop to force it to render inside the layout
// See Routes.tsx for more details
function App({ outlet }: { outlet?: React.ReactElement | null }) {
    return (
        <Layout>
            {outlet || (
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={location.pathname || outlet}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                        }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <AnimatedOutlet />
                    </motion.div>
                </AnimatePresence>
            )}
        </Layout>
    );
}

export default App;
