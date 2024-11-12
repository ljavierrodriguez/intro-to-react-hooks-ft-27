import React, { useState } from 'react'

const UsingUseState = () => {

    const [contador, setContador] = useState(0) // [valor, function]
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)
    const [nombres, setNombres] = useState([])
    const [persona, setPersona] = useState({
        nombre: '',
        apellido: ''
    })

    const ingresarNombre = e => {
        if(e.key === 'Enter'){
            setNombres(nombres.concat(e.target.value))
        }
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => {
                setContador(contador - 1)
            }}>Decrementar</button>

            <hr />
            <p>
                Search: {search}
            </p>
            <input type="search" onChange={(e) => setSearch(e.target.value) } />
            <hr />
            <p>
                Show: { show ? "Ocultar" : "Mostrar"}
            </p>
            <button onClick={() => setShow(show ? false : true)}>{ show ? "Ocultar" : "Mostrar"}</button>
            <button onClick={() => setShow(!show)}>{ show ? "Ocultar" : "Mostrar"}</button>

            <hr />
            <h4>Nombres:</h4>
            <ul>
                {
                    nombres.length > 0 &&
                    nombres.map((nombre, index) => {
                        return <li key={index}>{nombre}</li>
                    })
                }
            </ul>
            <input type="text" onKeyUp={ingresarNombre} placeholder='Ingrese Nombre'/>

        </div>
    )
}

export default UsingUseState