import { useState } from 'react'

const useEldrow = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = (guess) => {

    }

    const addNewGuess = (guess) => {

    }

    const handleKeyUp = (event) => {
        if (event.key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }

        if (/^[A-Za-z]$/.test(event.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + event.key.toUpperCase())
            }
        }
    }

    return {
        turn,
        currentGuess,
        guesses,
        history,
        isCorrect,
        handleKeyUp
    }
}

export default useEldrow