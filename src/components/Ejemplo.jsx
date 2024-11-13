import React, { useState } from 'react'

const Ejemplo = () => {

    const [student, setStudent] = useState({
        name: '',
        lastname: ''
    })

    const setName = e => {
        //setStudent({...student, name: e.target.value }) // actualizacion exitosa
        //setStudent({...student, lastname: e.target.value }) // actualizacion exitosa pero se pierde la anterior

        setStudent((student) => { 
            return {...student, name: e.target.value }
        }) // actualizacion exitosa
        setStudent((student) => { 
            return {...student, lastname: e.target.value }
        })


    }

    return (
        <div>
            <input type="text" onChange={setName} />
        </div>
    )
}

export default Ejemplo