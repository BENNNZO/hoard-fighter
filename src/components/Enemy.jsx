"use client"

import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export default function Enemy(props) {
    const [health, setHealth] = useState(50)
    const [pos, setPos] = useState({ x: 0, y: 0 })

    let enemyRef = useRef()

    useEffect(() => {
        setPos({ x: props.globalOffset.x - props.playerOffset.x, y: props.globalOffset.y - props.playerOffset.y })
    }, [])

    useEffect(() => {
        setPos(prev => ({ x: props.globalOffset.x - props.playerOffset.x, y: props.globalOffset.y - props.playerOffset.y }))
    }, [props.frame])

    return (
        <motion.div 
            ref={enemyRef}
            className='w-12 h-12 bg-red-500 border-4 rounded-2xl border-red-800 absolute'
            style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
        >
            <p className='bg-red-500 text-red-800 rounded-md font-bold p-1 whitespace-nowrap absolute bottom-full left-1/2 -translate-y-4 -translate-x-1/2'>
                {JSON.stringify(pos)}
            </p>
            <div className='w-20 h-4 bg-neutral-700 outline outline-emerald-700 absolute top-full translate-y-4 rounded-md -translate-x-1/2 left-1/2'>
                <div className={`w-[${health}%] bg-emerald-400 h-full rounded-md absolute top-0 left-0`}></div>
            </div>
        </motion.div>
    )
}