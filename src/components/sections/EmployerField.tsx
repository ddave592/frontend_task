import { FC } from "react";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { Panel } from "../Panel";
import clsx from "clsx";
import { PayloadEmployer } from '../../service/postForm'
import { useEmployerFields } from "./useEmployerFields";

interface Props {
    index: number
    values: PayloadEmployer
    showDashed: boolean
}

export const EmployerField: FC<Props> = ({ index, values, showDashed }) => {
    const { removeEmployerField, changeEmployerField } = useEmployerFields()
    const showDelete = index > 0;
    const classes = clsx('employer-field', {
        'employer-field-dashed': showDashed
    });

    const handleFieldChange = (fieldName: Partial<keyof PayloadEmployer>) => {
        return (value: string) => {
            changeEmployerField(index, {
                [fieldName]: value
            })
        }
    }

    return (
        <div className={classes}>
            <TextField value={values.name} onChange={handleFieldChange('name')} label="Employer name" name="employer_name" />
            <Panel columns={2}>
                <TextField value={values.start_date} onChange={handleFieldChange('start_date')} label="Employment start date" name="employment_start_date" type="date" />
                <TextField value={values.end_date} onChange={handleFieldChange('end_date')} label="Employment end date" name="employment_end_date" type="date" />
            </Panel>
            <div>
                {showDelete && <Button onClick={() => removeEmployerField(index)} variant="outline" text="Delete" />}
            </div>
        </div>
    );
};
