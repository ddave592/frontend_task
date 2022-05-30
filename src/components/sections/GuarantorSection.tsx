import { SelectField } from "../SelectField";
import { TextField } from "../TextField";
import { Section } from "../Section";
import { useGuarantorFields } from "./useGuarantorFields";
import { useContext } from "react";
import { FormContext } from "../FormContext";

export function GuarantorSection() {
    const { fields: { guarantor } } = useContext(FormContext)
    const { updateName, updateAddress, updateRelation } = useGuarantorFields()

    return (
        <Section title="Guarantor">
            <TextField onChange={updateName} value={guarantor.name} label="Guarantor name" name="guarantor_name" />
            <TextField onChange={updateAddress} value={guarantor.address} label="Guarantor address" name="guarantor_address" />
            <SelectField onChange={updateRelation} value={guarantor.relation} label="Relationship to guarantor" name="relationship_to_guarantor" options={[{
                label: 'Parent',
                value: 'parent'
            }, {
                label: 'Sibling',
                value: 'sibling'
            }, {
                label: 'Employer',
                value: 'employer'
            }, {
                label: 'Other',
                value: 'other'
            }]} />
        </Section>
    )
}
