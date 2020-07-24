import React, { useState, useEffect, useRef } from 'react'

export default () => {

    const [count, setCount] = useState(0)

    const countRef = useRef(count)

    useEffect(() => {

        const ele = document.getElementById('solution1')
        ele.addEventListener('mouseenter', minusOne)

        return () => {
            ele.removeEventListener('mouseenter', minusOne)
        }
    }, [])

    useEffect(() => {
        //have to update ref to current value of state
        countRef.current = count
    }, [count])

    const minusOne = (e) => {
        //accessed the state with the help of ref
        //upating the state
        setCount(countRef.current - 1)
    }
    const updateCount = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
            <h3>Solution One with useRef</h3>
            <p>We have access the state with the help of ref inside the event handler function</p>
            <p>We are upating the state inside the event handler function</p>
            <p>We are upating the state inside the event handler function</p>
            <div id="solution1" style={{ backgroundColor: 'green', width: '200px', height: '200px' }}> Move inside me</div>
            <p>Count Value: {count}</p>
            <button onClick={updateCount} >Add One</button>
        </div >
    )
}