import React, { useEffect, useState, useRef } from "react";
import MaterialIcon from "../MaterialIcon";
import {
  DropdownContainer,
  ButtonControl,
  DropdownMenu,
  DropdownItem,
  ControlLabelContainer,
  ButtonLabel,
} from "./ButtonDropdown.styled";
import { ButtonDropdownProps } from "./ButtonDropdown.types";

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({
  label,
  iconName,
  options,
  onItemSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={ref}>
      <ButtonControl
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-dropdown"
      >
        <ControlLabelContainer>
          <MaterialIcon iconName={iconName} data-testid="material-icon" />
          <ButtonLabel>{label}</ButtonLabel>
        </ControlLabelContainer>
        <MaterialIcon iconName="expand_more" />
      </ButtonControl>
      {isOpen && (
        <DropdownMenu data-testid="dropdown-menu">
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => {
                onItemSelect(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default ButtonDropdown;
