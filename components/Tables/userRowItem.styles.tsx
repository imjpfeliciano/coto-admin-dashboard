import styled from "styled-components";

export const UserGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: -webkit-fill-available;

  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

// FIXME: Fix dropdown menu position and hide dropdown when clicking outside
export const DropdownContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  bottom: -5rem;
  left: -5rem;

  span {
    width: fit-content;
    color: black;
    text-align: left;
  }
`;

export const DropdownItem = styled.span`
  margin-bottom: 0.5rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;
`;
