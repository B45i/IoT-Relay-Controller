import { useState } from 'react';
import './App.css';
import DeviceButton from './components/DeviceButton';

const buttons = [
    { name: 'Bedroom Light', id: 'btn_1' },
    { name: 'Livingroom Light', id: 'btn_2' },
    { name: 'TV', id: 'btn_3' },
    { name: ' Washing Machine', id: 'btn_4' },
    { name: 'Bed room fan', id: 'btn_5' },
    { name: 'Fan living room', id: 'btn_6' },
];

const initialState = buttons.reduce((acc, cur) => {
    acc[cur.id] = false;
    return acc;
}, {});

function App() {
    const [buttonState, setButtonState] = useState(initialState);

    const getButtonState = btnId => buttonState[btnId];

    const handleButtonClick = btnId => {
        setButtonState(oldState => ({
            ...oldState,
            [btnId]: !oldState[btnId],
        }));
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
