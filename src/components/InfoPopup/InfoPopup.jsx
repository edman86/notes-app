import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setInfoPopupContent, closeInfoPopup } from '../../state/reducers/infoPopupSlice';

import './InfoPopup.scss';

const InfoPopup = () => {
    
    const isShow = useSelector(state => state.infoPopup.isShow);
    const content = useSelector(state => state.infoPopup.content) || '';
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setInfoPopupContent(''));
            dispatch(closeInfoPopup());    
        }, 2500);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [isShow]);

    return (
        <div className={`info-popup ${isShow && 'show'}`}>
            <div className="info-popup-content">
                {content}
            </div>
        </div>
    );
};

export default InfoPopup;