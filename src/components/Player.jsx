"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Player(props) {
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let xOff = 0
        let yOff = 0

        props.controller.w ? yOff -= 10 : null
        props.controller.a ? xOff -= 10 : null
        props.controller.s ? yOff += 10 : null
        props.controller.d ? xOff += 10 : null

        setOffset({ x: xOff, y: yOff })

    }, [props.controller])

    let playerRef = useRef()

    return (
        <motion.div 
            ref={playerRef}
            className='bg-emerald-400 w-12 h-12 rounded-full absolute -translate-x-1/2 -translate-y-1/2'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: `calc(50% + ${offset.y}px)`, left: `calc(50% + ${offset.x}px)` }}
            transition={{ duration: 0.1 }}
        ></motion.div>
    )
}