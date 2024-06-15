import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function YearDropDown() {
    const [selectedItem, setSelectedItem] = useState('YEAR');

    const items = ['21-25', '22-26', '23-27'];

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

export default YearDropDown;
