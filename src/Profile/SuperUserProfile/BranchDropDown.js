import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BranchDropDown() {
    const [selectedItem, setSelectedItem] = useState('BRANCH');

    const items = ['IT', 'CSE', 'AIDS', 'AIML', 'ECS', 'MECH', 'EXTC'];

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

export default BranchDropDown;
