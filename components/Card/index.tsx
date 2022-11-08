// import styled from "styled-components";
// import theme from "../../utils/theme";

// export const CardTitle = styled.h1`
//   color: ${theme.colors.primaryText};
// `;

// const Card = styled.div`
//   background-color: ${theme.colors.white};
//   border-radius: 0.5rem;
//   padding: 1rem;
//   box-shadow: 0 0 0.5rem 0.1rem ${theme.colors.divider};
// `;

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      {children}
    </div>
  )
}
export default Card;
