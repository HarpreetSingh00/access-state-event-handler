import React, { useEffect } from 'react'
import useHookState from './../../Hook/index'

export default () => {

    const [count, setCount] = useHookState(0)   //state to be accessed inside event listner
    const [arr, setArr] = useHookState([{ val: 0 }]) //try to access array of object as a state inside event listner


    useEffect(() => {

        const ele = document.getElementById('solution2')
        ele.addEventListener('mouseenter', minusOne)

        return () => {
            ele.removeEventListener('mouseenter', minusOne)
        }
    }, [])

    const minusOne = (e) => {
        //accessed the state with the help of ref
        //upating the state
        setArr([{ val: arr.current[0].val - 1 }])
        setCount(count.current - 1)
    }
    const updateCount = () => {
        setArr([{ val: arr.current[0].val + 1 }]) //updating the data
        setCount(count.current + 1)
    }

    return (
        <div style={{ border: '1px solid', marginBottom: '10px' }}>
            <h3>Solution Two with useRef</h3>
            <p>Same as solution one but with code improvement and accessing array of object inside event listner</p>
            <div id="solution2" style={{ backgroundColor: 'green', width: '200px', height: '200px' }}> Move inside me</div>
            <p>Count Value: {count.current}</p>
            <ul>
                {
                    !!arr.current && !!arr.current.length && arr.current.map(ele => <li key={ele.val}>{ele.val}</li>)
                }
            </ul>
            <button onClick={updateCount} >Add One</button>
        </div >
    )
}