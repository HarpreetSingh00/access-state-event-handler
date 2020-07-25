import { useState, useRef } from "react";

export default function useHookState(initialValue) {

    const [state, setState] = useState(initialValue);
    const reference = useRef(state);

    const setReferredState = value => {
        reference.current = value
        setState(value);
    };

    return [reference, setReferredState];
}

