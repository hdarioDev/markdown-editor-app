import React from 'react';
import './CustomizationOptions.css';

interface CustomizationOptionsProps {
    fontSize: number;
    onFontSizeChange: (size: number) => void;
    theme: string;
}

const CustomizationOptions: React.FC<CustomizationOptionsProps> = ({ fontSize, onFontSizeChange }) => {
    return (
        <div className="customization-options">
            <label className="customization-options__label">Font Size: </label>
            <input
                type="range"
                className="customization-options__input"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => onFontSizeChange(Number(e.target.value))}
            />
        </div>
    );
};

export default CustomizationOptions;
