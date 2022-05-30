import { FC, useContext } from "react";
import { Button } from "../Button";
import { Section } from "../Section";
import { EmployerField } from "./EmployerField";
import { FormContext, useEmployerFields } from "../FormContext";

export const EmployerSection: FC = () => {
    const { values, setValues } = useContext(FormContext)
    const { addEmployerField } = useEmployerFields()

    return (
        <Section title="Employer" button={<Button onClick={addEmployerField} variant="outline" text="Add" />}>
            {values.employer.map((_field, index) => (
                <EmployerField
                    index={index}
                    values={values.employer[index]}
                    showDashed={values.employer.length !== index + 1}
                    setValues={setValues}
                />
            ))}
        </Section>
    );
}
