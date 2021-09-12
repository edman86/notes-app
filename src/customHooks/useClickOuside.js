import { useEffect, useRef } from 'react';


export const useClickOutside = (handler) => {
    
    const domNodeRef = useRef();
    
    useEffect(() => {
        // handle ouside click
        const outsideClickHandler = (e) => {
            if (!domNodeRef.current.contains(e.target)) {
                handler(false);
            }
        }
        document.addEventListener('mousedown', outsideClickHandler);

        return () => {
            document.removeEventListener('mousedown', outsideClickHandler);
        }
    });

    return domNodeRef;
};