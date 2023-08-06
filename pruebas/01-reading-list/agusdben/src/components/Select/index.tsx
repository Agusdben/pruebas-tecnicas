interface Props {
  label: string
  name: string
  options: string[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement | any>) => void
}

const Select: React.FC<Props> = ({ label, name, options, value, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        className="bg-primary p-2"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          options.map(op => (
            <option className="bg-black text-white" key={op} value={op}>{op}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select
