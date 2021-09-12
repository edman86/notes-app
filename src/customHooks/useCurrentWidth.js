import { useState, useLayoutEffect } from "react";

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

export function useCurrentWidth() {
    
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useLayoutEffect(() => {
        
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth());
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

    return width;
    
}