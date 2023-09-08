"use client"

import { motion } from 'framer-motion';
import React from 'react';

export default function Enemy(props) {
    return (
        <motion.div 
            className='w-12 h-12 bg-red-500 border-4 rounded-2xl border-red-800 absolute'
            style={{ transform: `translate(${props.globalOffset.x}px, ${props.globalOffset.y}px)` }}
        >
            
        </motion.div>
    )
}