import { InputContainer } from "./styles"

export default function Input({ placeholder, label, type="text", name, value, onChange, ...rest }) {
  return (
    <InputContainer>
      <label>{label}</label>
      <input 
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </InputContainer> 
  )
}