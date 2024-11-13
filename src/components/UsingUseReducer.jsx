import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { contador: state.contador + 1 }
        case 'DECREMENT':
            return { contador: state.contador - 1 }
        default:
            return state;
    }
}

const studentReducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.value }
        case 'lastname':
            return { ...state, lastname: action.value }
        default:
            return state
    }
}

const UsingUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { contador: 0 })
    const [student, dispatchStudent] = useReducer(studentReducer, { name: '', lastname: ''})

    return (
        <div>
            <p>Contador: {state.contador}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>

            <p>Student: {student.name} {student.lastname}</p>
            <input type="text" placeholder='Insert name' onChange={(e) => dispatchStudent({ type: 'name', value: e.target.value })} />
            <input type="text" placeholder='Insert lastname' onChange={(e) => dispatchStudent({ type: 'lastname', value: e.target.value })}/>
        </div>
    )
}

export default UsingUseReducer