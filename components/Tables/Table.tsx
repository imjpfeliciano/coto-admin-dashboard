import styled from "styled-components";
import theme from "../../utils/theme";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 16px;
`;

interface TableCellProps {
  align?: "left" | "center" | "right";
}

export const TableCellContent = styled.div<TableCellProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.align || "center"};
  margin-left: ${(props) => (props.align === "left" ? "4rem" : "0")};
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
  border-radius: 5px 5px 0 0;

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }
`;

export const TableColumnNames = styled.tr`
  height: 4rem;
`;
