import styled from "styled-components";
import theme from "../../utils/theme";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableCell = styled.td`
  /* display: flex;
  flex-direction: row; */
  text-align: center;
  padding: 16px;

  /* align-items: center; */
`;

export const TableRow = styled.tr`
  /* display: flex;
  flex-direction: row; */
  border-top: 1px solid #ddd;
`;

export const TableHeaderContainer = styled.thead`
  width: 100%;
`;

export const TableHeader = styled.th`
  width: 100%;
  background-color: ${theme.colors.accent};
  padding: 16px;
  color: ${theme.colors.text};

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }
`;
