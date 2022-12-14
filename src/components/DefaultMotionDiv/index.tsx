import React from 'react';
import { motion } from 'framer-motion';
import { DefaultMotionDivProps } from './types';

export default function DefaultMotionDiv({
    divKey,
    children,
    fullWidth,
    fullHeight
}: DefaultMotionDivProps) {
    return (
        <motion.div
            key={divKey}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    transition: {
                        duration: 0.3
                    },
                    width: fullWidth ? '100%' : 'unset',
                    height: fullHeight ? '100%' : 'unset'
                },
                hidden: {
                    opacity: 0,
                    transition: {
                        duration: 0.3
                    },
                    width: fullWidth ? '100%' : 'unset',
                    height: fullHeight ? '100%' : 'unset'
                }
            }}
        >
            {children}
        </motion.div>
    );
}
