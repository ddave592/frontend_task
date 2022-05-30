import { FC } from "react";

interface Props {
    label: string
    name: string
    pattern?: string
    type?: 'date' | 'text'
    value: string
}

export const TextField: FC<Props> = ({ label, name, pattern, type, value }) => {
    return (<div className="field field-text">
        <label id={name}>{label}</label>
        <input value={value} type={type} name={name} id={name} pattern={pattern} />
    </div>);
}
