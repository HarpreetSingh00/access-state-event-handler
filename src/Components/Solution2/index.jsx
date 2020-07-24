import React, { useEffect } from 'react'
import useHookState from './../../Hook/index'

export default () => {

    const [count, setCount] = useHookState(0)

    useEffect(() => {

        const ele = document.getElementById('solution1')
        ele.addEventListener('mouseenter', minusOne)

        return () => {
            ele.removeEventListener('mouseenter', minusOne)
        }
    }, [])

    // useEffect(() => {
    //     //have to update ref to current value of state
    //     countRef.current = count
    // }, [count])

    const minusOne = (e) => {
        //accessed the state with the help of ref
        //upating the state
        setCount(count - 1)
    }
    const updateCount = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
            {console.log('count::::', count)}
            <h3>Solution Two with useRef</h3>
            <p>Same as solution one but with code improvement</p>
            <div id="solution1" style={{ backgroundColor: 'green', width: '200px', height: '200px' }}> Move inside me</div>
            {/* <p>Count Value: {count}</p> */}
            <button onClick={updateCount} >Add One</button>
        </div >
    )
}