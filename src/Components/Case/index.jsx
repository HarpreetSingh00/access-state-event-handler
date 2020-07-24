import React, { useState, useEffect } from 'react'
/*
Here in this example, we are adding one to count state variable,
On the mouseenter inside the div, we are substracting one from the current state
We can notice that on hovering it will always return -1, minusOne() is accessed inside event listner 
and it always sets to default value 0.
*/
export default () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        const ele = document.getElementById('moveInsideWrapper')

        ele.addEventListener('mouseenter', minusOne)

        return () => {
            ele.removeEventListener('mouseenter', minusOne)
        }
    }, [])

    const minusOne = (e) => {
        console.log('count', count)
        const updatedValue = count - 1
        console.log('updatedValue', updatedValue)
        setCount(updatedValue)
    }

    const updateCount = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
            <h3>Case 1: Problem</h3>
            <p>Here in this example, we are adding one to count state variable by clicking on the button<br />
            On the mouseenter inside the div, we are substracting one from the current state<br />
            We can notice that on mouseenter, it will always return -1, because state is accessed inside event listner
            and it always sets to default value 0. Calc (0 - 1 = -1 )</p>
            <div id="moveInsideWrapper" style={{ backgroundColor: 'yellow', width: '200px', height: '200px' }}> Move inside me</div>
            <p>Count Value: {count}</p>
            <button onClick={updateCount} >Add One</button>
        </div >
    )
}