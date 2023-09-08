"use client"

import React, { useState, useEffect } from 'react';

import Player from '@/components/Player';

export default function Home() {
    /* ------------------------------- GLOBAL VARS ------------------------------ */
    const [globalPos, setGlobalPos] = useState({ x: 0, y: 0 })
    const [controller, setController] = useState({ w: false, a: false, s: false, d: false })
    const [frame, setFrame] = useState(0)

    useEffect(() => {
        window.addEventListener("keydown", e => {
            if (e.repeat) return
            console.log(e)
            switch(e.key) {
                case "w": setController(prev => ({ w: true, a: prev.a, s: prev.s, d: prev.d })); break
                case "a": setController(prev => ({ w: prev.w, a: true, s: prev.s, d: prev.d })); break
                case "s": setController(prev => ({ w: prev.w, a: prev.a, s: true, d: prev.d })); break
                case "d": setController(prev => ({ w: prev.w, a: prev.a, s: prev.s, d: true })); break
                default: break
            }
        })

        window.addEventListener("keyup", e => {
            switch(e.key) {
                case "w": setController(prev => ({ w: false, a: prev.a, s: prev.s, d: prev.d })); break
                case "a": setController(prev => ({ w: prev.w, a: false, s: prev.s, d: prev.d })); break
                case "s": setController(prev => ({ w: prev.w, a: prev.a, s: false, d: prev.d })); break
                case "d": setController(prev => ({ w: prev.w, a: prev.a, s: prev.s, d: false })); break
                default: break
            }
        })

        const frameController = setInterval(() => {
            nextFrame()
        }, 100)

        return () => {
            window.removeEventListener("keydown", e => {
                if (e.repeat) return
                console.log(e)
                switch(e.key) {
                    case "w": setController(prev => ({ w: true, a: prev.a, s: prev.s, d: prev.d })); break
                    case "a": setController(prev => ({ w: prev.w, a: true, s: prev.s, d: prev.d })); break
                    case "s": setController(prev => ({ w: prev.w, a: prev.a, s: true, d: prev.d })); break
                    case "d": setController(prev => ({ w: prev.w, a: prev.a, s: prev.s, d: true })); break
                    default: break
                }
            })
    
            window.removeEventListener("keyup", e => {
                switch(e.key) {
                    case "w": setController(prev => ({ w: false, a: prev.a, s: prev.s, d: prev.d })); break
                    case "a": setController(prev => ({ w: prev.w, a: false, s: prev.s, d: prev.d })); break
                    case "s": setController(prev => ({ w: prev.w, a: prev.a, s: false, d: prev.d })); break
                    case "d": setController(prev => ({ w: prev.w, a: prev.a, s: prev.s, d: false })); break
                    default: break
                }
            })
        }
    }, [])

    useEffect(() => {
        let xOff = 0
        let yOff = 0

        controller.w ? yOff -= 10 : null
        controller.a ? xOff -= 10 : null
        controller.s ? yOff += 10 : null
        controller.d ? xOff += 10 : null

        setGlobalPos(prev => ({ x: prev.x + xOff, y: prev.y + yOff }))
    }, [frame])

    function nextFrame() {
        setFrame(prev => prev + 1)
    }

    return (
        <main>
            <Player controller={controller} />
            <pre className='flex flex-col gap-5'>
                <p>
                    {JSON.stringify(globalPos, null, 4)}
                </p>
                <p>
                    {JSON.stringify(controller, null, 4)}
                </p>
                <p>
                    {JSON.stringify(frame, null, 4)}
                </p>
            </pre>
        </main>
    )
}
