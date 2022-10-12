import React, { useState } from "react";
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
  return (
    <DropdownContainer>
      <ButtonControl onClick={() => setIsOpen(!isOpen)}>
        <ControlLabelContainer>
          <MaterialIcon iconName={iconName} />
          <ButtonLabel>{label}</ButtonLabel>
        </ControlLabelContainer>
        <MaterialIcon iconName="expand_more" />
      </ButtonControl>
      <DropdownMenu isOpen={isOpen}>
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
    </DropdownContainer>
  );
};

export default ButtonDropdown;
