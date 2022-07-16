import { useState, useEffect } from 'react';
import './App.css';
import DeviceButton from './components/DeviceButton';
import { getButtonsAsync } from './api';

// const initialState = buttons.reduce((acc, cur) => {
//     acc[cur.id] = false;
//     return acc;
// }, {});

function App() {
    const [buttons, setButtons] = useState([]);
    const [buttonState, setButtonState] = useState({});

    useEffect(() => {
        fetchButtons();
    }, []);

    const getButtonState = btnId => buttonState[btnId];

    const handleButtonClick = btnId => {
        setButtonState(oldState => ({
            ...oldState,
            [btnId]: !oldState[btnId],
        }));
    };

    const fetchButtons = async () => {
        try {
            const response = await getButtonsAsync();
            const data = await response.json();
            setButtons(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="App">
            {buttons.map(button => (
                <DeviceButton
                    button={button}
                    onButtonClick={handleButtonClick}
                    isActive={getButtonState(button.id)}
                    key={button.id}
                />
            ))}
        </div>
    );
}

export default App;
