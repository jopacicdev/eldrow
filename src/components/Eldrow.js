import React, { useEffect } from "react"
import useEldrow from "../hooks/useEldrow";

export default function Eldrow({solution}) {
    const { currentGuess, handleKeyUp } = useEldrow(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    return (
        <div>
            <div>Current Guess: {currentGuess}</div>
        </div>
    )
}