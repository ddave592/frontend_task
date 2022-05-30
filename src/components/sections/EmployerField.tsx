import { Dispatch, FC, SetStateAction } from "react";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { Panel } from "../Panel";
import clsx from "clsx";
import { Payload, PayloadEmployer } from '../../service/postForm'
import { useEmployerFields } from "../FormContext";

interface Props {
    index: number
    values: PayloadEmployer
    setValues: Dispatch<SetStateAction<Payload>>
    showDashed: boolean
}

export const EmployerField: FC<Props> = ({ index, setValues, values, showDashed }) => {
    const { removeEmployerField } = useEmployerFields()
    const showDelete = index > 0;
    const classes = clsx('employer-field', {
        'employer-field-dashed': showDashed
    });

    return (
        <div className={classes}>
            <TextField value={values.name} label="Employer name" name="employer_name" />
            <Panel columns={2}>
                <TextField value={values.start_date} label="Employment start date" name="employment_start_date" type="date" />
                <TextField value={values.end_date} label="Employment end date" name="employment_end_date" type="date" />
            </Panel>
            <div>
                {showDelete && <Button onClick={() => removeEmployerField(index)} variant="outline" text="Delete" />}
            </div>
        </div>
    );
};
