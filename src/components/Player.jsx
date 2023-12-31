"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Player(props) {
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    let playerRef = useRef()

    useEffect(() => {
        let xOff = 0
        let yOff = 0

        props.controller.w ? yOff -= 10 : null
        props.controller.a ? xOff -= 10 : null
        props.controller.s ? yOff += 10 : null
        props.controller.d ? xOff += 10 : null

        setOffset({ x: xOff, y: yOff })

    }, [props.controller])

    useEffect(() => {
        window.addEventListener("resize", () => {
            props.setPlayerOffset({ x: playerRef.current.offsetLeft, y: playerRef.current.offsetTop })
        })

        props.setPlayerOffset({ x: playerRef.current.offsetLeft, y: playerRef.current.offsetTop })

        return () => {
            window.removeEventListener("resize", () => {
                props.setPlayerOffset({ x: playerRef.current.offsetLeft, y: playerRef.current.offsetTop })
            })
        }
    }, [props.frame])

    return (
        <motion.div 
            ref={playerRef}
            className='bg-emerald-400 w-12 h-12 rounded-2xl border-4 border-emerald-600 absolute -translate-x-1/2 -translate-y-1/2'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1, top: `calc(50% + ${offset.y}px)`, left: `calc(50% + ${offset.x}px)` }}
            transition={{ duration: 0.1 }}
        ></motion.div>
    )
}