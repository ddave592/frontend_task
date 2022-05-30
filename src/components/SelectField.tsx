import { FC } from "react";

interface Option {
    label: string
    value: string
}

interface Props {
    label: string
    name: string
    options: Option[]
}

export const SelectField: FC<Props> = ({ label, name, options }) => {
    return (<div className="field field-select">
        <label id={name}>{label}</label>
        <select name={name} id={name} defaultValue="" >
            <option value="" disabled hidden> - Select a {label} - </option>
            {options.map(option => (
                <option key={option.label} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>);
}
