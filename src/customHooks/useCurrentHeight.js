import { useState, useLayoutEffect } from "react";

const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

export function useCurrentHeight() {
    
    // save current window width in the state object
    let [height, setHeight] = useState(getHeight());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useLayoutEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setHeight(getHeight());
        };

        // set resize listener
        window.addEventListener('resize', resizeListener);

        resizeListener();

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener)
        }
    }, []);

    return height;

}