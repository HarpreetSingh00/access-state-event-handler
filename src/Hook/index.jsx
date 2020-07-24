import React, { useState, useRef, useEffect } from "react";

export default function useHookState(initialValue) {

    const [state, setState] = useState(initialValue);
    const reference = useRef(state);

    useEffect(() => {
        //have to update ref to current value of state
        reference.current = state
    }, [state])

    const setReferredState = value => {
        console.log('value coming', value)
        setState(value);
    };

    console.log('state', state)
    console.log('reference:::', reference.current)

    return [reference, setReferredState];
}

