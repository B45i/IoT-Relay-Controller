import './App.css';

const buttons = [
    { name: 'Bedroom Light', id: 'btn_1' },
    { name: 'Livingroom Light', id: 'btn_2' },
    { name: 'TV', id: 'btn_3' },
    { name: ' Washing Machine', id: 'btn_4' },
    { name: 'Bed room fan', id: 'btn_5' },
    { name: 'Fan living room', id: 'btn_6' },
];

function App() {
    return (
        <div className="App">
            {buttons.map(button => (
                <button
                    key={button.id}
                    className={`device-button ${
                        button.name === 'TV' ? 'active' : ''
                    }`}
                >
                    <div>{button.name}</div>
                    <div className="indicator"></div>
                </button>
            ))}
        </div>
    );
}

export default App;
