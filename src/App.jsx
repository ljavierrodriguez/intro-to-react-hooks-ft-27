import React, { useState } from 'react'
import UsingUseState from './components/UsingUseState'
import UsingUseEffect from './components/UsingUseEffect'
import UsingUseCallback from './components/UsingUseCallback'

const App = () => {
    const [show, setShow] = useState(true)

    return (
        <>
            <h2>React Hooks</h2>
            <h4>Hooks useState</h4>
            <UsingUseState />
            <h4>Hooks useEffect</h4>
            {
                show &&
                (
                    <UsingUseEffect />
                )
            }
            <h4>Hooks useCallback</h4>
            <UsingUseCallback />
        </>
    )
}

export default App