import { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import { getDataFromLocalStorage, setDataToLocalStorage } from "./components/utility/functions/workWithLocalStorage";

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SelectedNote from "./components/SelectedNote/SelectedNote";
import InfoPopup from "./components/InfoPopup/InfoPopup";


const App = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // sets isDarkMode from local storage when component mounted
    useEffect(() => {
        const isDarkModeData = getDataFromLocalStorage('darkMode');
        setIsDarkMode(isDarkModeData);
    }, []);

    // sets isDarkMode to local storage when component update
    useEffect(() => {
        setDataToLocalStorage('darkMode', isDarkMode);
    }, [isDarkMode])

    return (
        <main
            className={`main ${isDarkMode && 'dark-mode'}`}
        >
            <Header
                isDarkMode={isDarkMode}
                setDarkMode={setIsDarkMode}
            />
            <div className="container">

                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>

                    <Route path="/:id" >
                        <SelectedNote />
                    </Route>
                </Switch>

                <InfoPopup />

            </div>
        </main>
    );
};

export default App;