import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function SemDropDown() {
    const [selectedItem, setSelectedItem] = useState('SEM');

    const items = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

    const handleSelect = (eventKey, event) => {
        setSelectedItem(event.target.textContent);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedItem}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => (
                    <Dropdown.Item key={index} eventKey={index}>
                        {item}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SemDropDown;
