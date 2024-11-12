import React, { useCallback, useState } from 'react'

const Buttons = ({ increment, decrement }) => {
    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}


const UsingUseCallback = () => {
    const [contador, setContador] = useState(0)
    const increment = useCallback(() => {
        setContador(contador + 1)
    })
    const decrement = useCallback(() => {
        setContador(contador - 1)
    })
    return (
        <>
            <div>Contador {contador}</div>
            <Buttons increment={increment} decrement={decrement} />
        </>
    )
}

export default UsingUseCallback