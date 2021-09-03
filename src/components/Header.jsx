import React from 'react';

const Header = ({ toggleDarkMode }) => {
    
    const handleClick = () => {
        toggleDarkMode();
    }; 
    
    return (
        <header className="header">
            <div className="container">
                <section className="header-panel">
                    <h1>Notes</h1>
                    <button 
                        className="btn toggle-btn" 
                        type="button"
                        onClick={handleClick}
                    >
                        Toggle Mode
                    </button>
                </section>    
            </div>    
        </header>
    );
};

export default Header;