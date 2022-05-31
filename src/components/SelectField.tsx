import { ChangeEvent, FC } from "react";

interface Option {
    label: string
    value: string
}

interface Props {
    label: string
    name: string
    options: Option[]
    value: string
    onChange?(value: string): void
}

export const SelectField: FC<Props> = ({ label, name, options, onChange, value }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(event.target.value)
        }
    }

    return (
        <div className="field field-select">
            <label htmlFor={name}>{label}</label>
            <select title={label} id={name} defaultValue={value} onChange={handleChange} >
                <option value="" disabled hidden> - Select a {label} - </option>
                {options.map(option => (
                    <option key={option.label} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
