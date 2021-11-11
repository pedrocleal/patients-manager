import { SelectContainer } from "./styles"

export default function Select({children, value, name, label, onChange, ...rest}) {
  return (
    <SelectContainer>
      <labe>{label}</labe>
      <select value={value} name={name} onChange={onChange} {...rest}>
        {children}
      </select>
    </SelectContainer> 
  )
}