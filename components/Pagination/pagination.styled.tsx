import styled from "styled-components";
import { PaginationItemProps } from "./pagination.types";

export const PaginationContainer = styled.div`
  color: black;
  font-family: "Montserrat";
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  padding: 0.5rem;

  ${(props) => props.active && "background-color: #eee;"}

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #000;
    background-color: #ddd;
  }
`;

export const PageInput = styled.input`
  background-color: white;
  color: black;
  font-family: "Montserrat";
  width: 32px;
  height: 32px;
  text-align: center;
  border: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const PageSpan = styled.span`
  font-family: "Montserrat";
  width: 32px;
  height: 32px;
`;
