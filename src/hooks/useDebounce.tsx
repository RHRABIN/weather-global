/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

type CallbackFunction = (...args: any[]) => void;

const useDebounce = (callback: CallbackFunction, delay: number) => {
    const timeoutRef = useRef();

    return (...args: any[]) => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

export default useDebounce;
