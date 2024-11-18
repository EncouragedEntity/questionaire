import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownList = ({ companies, onChange, selectedCompany }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown" id="dropdown-basic">
        {selectedCompany?.name ?? "Please select"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {companies?.map((item) => (
          <Dropdown.Item
            id={item.id}
            key={item.name}
            value={item.name}
            eventKey={item.name}
            onClick={() => onChange(item)}
            className="dropdown__item"
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownList;
