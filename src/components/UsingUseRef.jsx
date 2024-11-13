import React, { useEffect, useRef } from 'react'

const UsingUseRef = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const search = () => {
        alert(inputRef.current.value)
    }

    const cambiarEstilo = () => {
        inputRef.current.style.border = 0;
        inputRef.current.style.borderBottom = "1px solid grey"
    }


    return (
        <div>
            <input type="search" ref={inputRef} placeholder='Search...' />
            <button onClick={search}>Search</button>
            <button onClick={cambiarEstilo}>Cambiar Estilo</button>
        </div>
    )
}

export default UsingUseRef