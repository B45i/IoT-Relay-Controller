import React from 'react';

const DeviceButton = ({ button, onButtonClick, isActive = false }) => {
    return (
        <button
            onClick={e => onButtonClick(button.id)}
            className={`device-button ${isActive ? 'active' : ''}`}
        >
            <div>{button.name}</div>
            <div className="indicator"></div>
        </button>
    );
};

export default DeviceButton;
