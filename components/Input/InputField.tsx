import styled from "styled-components";
import MaterialIcon from "../MaterialIcon";

// FIXME: Move css colors to theme file
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;

  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #334155;
  text-align: center;
  white-space: nowrap;
  background-color: #ebeef2;
  border: 1px solid #dfe3ea;
  border-radius: 0.375rem; // TODO: Remove right border radius
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ErrorText = styled.span`
  color: red;
`;

// FIXME: Check which css rules are necessary
const Input = styled.input`
  margin-left: -1px;

  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;

  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #334155;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dfe3ea;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:focus {
    border-color: #4d90fe;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(66, 153, 225, 0.5);
  }
`;

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  icon: string;
}

const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  touched,
  onBlur,
  icon,
}: InputFieldProps) => {
  return (
    <InputContainer>
      <IconContainer>
        <MaterialIcon iconName={icon} color="#808080" />
      </IconContainer>

      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {/* TODO: Validate an scenario where we receive the error */}
      {error && touched && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default InputField;
