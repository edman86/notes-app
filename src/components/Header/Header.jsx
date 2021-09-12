import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SwitchButton from '../SwitchButton/SwitchButton';

import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';

import './Header.scss';

const Header = ({ isDarkMode, setDarkMode }) => {
    
    return (
        <header className="header">
            <div className="container">
                <section className="header-panel">
                    <h1 className="header-title">Notes</h1>
                    <section className="light-or-dark-mode">
                        {
                            isDarkMode ?
                            <BiMoon className="mod-icon" />
                            :
                            <BiSun className="mod-icon" />
                        }
                        <SwitchButton 
                            isDarkMode={isDarkMode}
                            action={setDarkMode}
                        />
                    </section>
                </section>

                <SearchBar />    
            </div>    
        </header>
    );
};

export default Header;