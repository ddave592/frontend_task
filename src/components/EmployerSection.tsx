import { FC, SetStateAction } from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { Section } from "./Section";
import { Panel } from "./Panel";
import { useState, Dispatch } from "react";
import clsx from "clsx";

interface Props {
    index: number
    fields: number[]
    setFields: Dispatch<SetStateAction<number[]>>
}

const EmployerField: FC<Props> = ({ index, setFields, fields }) => {
    const classes = clsx('employer-field', {
        'employer-field-dashed': fields.length !== index + 1
    })
    const showDelete = index > 0

    const handleDelete = () => {
        setFields(fields.filter((_x, indx) => indx !== index))
    }

    return (
        <div className={classes}>
            <TextField label="Employer name" name="employer_name" />
            <Panel columns={2}>
                <TextField label="Employment start date" name="employment_start_date" type="date" />
                <TextField label="Employment end date" name="employment_end_date" type="date" />
            </Panel>
            <div>
                {showDelete && <Button onClick={handleDelete} variant="outline" text="Delete" />}
            </div>
        </div>
    );
}


export const EmployerSection: FC = () => {
    const [fields, setFields] = useState([1])

    const handleAdd = () => {
        setFields([...fields, fields.length + 1])
    }

    return (
        <Section title="Employer" button={<Button onClick={handleAdd} variant="outline" text="Add" />}>
            {fields.map((_field, index) => <EmployerField index={index} fields={fields} setFields={setFields} />)}
        </Section>
    );
}
