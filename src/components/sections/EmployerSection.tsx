import { FC, useContext } from "react";
import { Button } from "../Button";
import { Section } from "../Section";
import { EmployerField } from "./EmployerField";
import { FormContext } from "../FormContext";
import { useEmployerFields } from "./useEmployerFields";

export const EmployerSection: FC = () => {
    const { fields } = useContext(FormContext)
    const { addEmployerField } = useEmployerFields()

    return (
        <Section title="Employer" button={<Button onClick={addEmployerField} variant="outline" text="Add" />}>
            {fields.employer.map((field, index) => (
                <EmployerField
                    key={field.id}
                    index={index}
                    values={fields.employer[index]}
                    showDashed={fields.employer.length !== index + 1}
                />
            ))}
        </Section>
    );
}
