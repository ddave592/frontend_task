import { ChangeEvent, FC, useState } from "react";

interface Props {
    label: string
    name: string
    pattern?: string
    type?: 'date' | 'text'
    value: string
    onChange?(value: string): void
}

export const TextField: FC<Props> = ({ label, name, pattern, type, value: propValue, onChange }) => {
    const [value, setValue] = useState(propValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value

        if (type === 'date') {
            value = Math.floor(Date.parse(value) / 1000).toString()
        }

        setValue(event.target.value)
        if (onChange) {
            onChange(value)
        }
    }

    return (<div className="field field-text">
        <label htmlFor={name}>{label}</label>
        <input value={value} onChange={handleChange} type={type} name={name} id={name} pattern={pattern} />
    </div>);
}
