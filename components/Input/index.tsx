interface InputFieldProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="font-bold mb-2">{label}</label>
      <input type="text" name={name} id={name} className="border rounded h-10" onChange={onChange} />
    </>
  )
}

export default InputField;