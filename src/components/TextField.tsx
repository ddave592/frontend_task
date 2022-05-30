import { FC } from "react";

interface Props {
    label: string
    name: string
    pattern?: string
    type?: 'date' | 'text'
}

export const TextField: FC<Props> = ({ label, name, pattern, type }) => {
    return (<div className="field field-text">
        <label id={name}>{label}</label>
        <input type={type} name={name} id={name} pattern={pattern} />
    </div>);
}
