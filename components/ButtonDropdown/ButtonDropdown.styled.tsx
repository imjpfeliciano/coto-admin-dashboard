import styled from "styled-components";
import { BaseButton } from "../Button/Button.styled";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const ButtonControl = styled.div`
  ${BaseButton}

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ControlLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLabel = styled.span`
  margin-left: 0.5rem;
`;

export const DropdownMenu = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: left;
  border: 1px solid #ccc;
  border-top: none;
  color: black;

  &:not(:last-of-type) {
    border-bottom: none;
  }

  &:first-of-type {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  &:hover {
    background-color: #ddd;
    color: white;
  }
`;
