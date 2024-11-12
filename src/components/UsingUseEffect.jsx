import React, { useEffect, useState } from 'react'

const UsingUseEffect = () => {

    const [valor, setValor] = useState(null)

    useEffect(() => {
        console.log("Componente Cargado...")


        return () => {
            console.log("El component va a ser eliminado")
        }

    }, [])

    useEffect(() => {
        console.log("Se ha actualizado el estado")
    }, [valor])


    return (
        <div>UsingUseEffect</div>
    )
}

export default UsingUseEffect