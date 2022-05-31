import { ChangeEvent, FC, useState } from "react";

interface Props {
    label: string
    name: string
    pattern?: string
    type?: 'date' | 'text'
    value: string
    onChange?(value: string): void
    id?: string
}

export const TextField: FC<Props> = ({ label, name, pattern, type, value: propValue, onChange, id }) => {
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
        <label htmlFor={id ?? name}>{label}</label>
        <input title={label} value={value} onChange={handleChange} type={type} id={id ?? name} pattern={pattern} />
    </div>);
}
