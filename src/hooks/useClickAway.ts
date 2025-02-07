import {useEffect, useRef} from "react";

export default function useClickAway<T extends HTMLElement>(cb: Function, deps: Array<unknown> = []) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (ref.current && cb && !ref.current.contains(e.target as Node)) cb();
        }

        document.addEventListener("click", listener);

        return () => document.removeEventListener("click", listener);
    }, deps);

    return ref;
}