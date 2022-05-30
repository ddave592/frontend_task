import { SelectField } from "../SelectField";
import { TextField } from "../TextField";
import { Section } from "../Section";

export function GuarantorSection() {
    return (<Section title="Guarantor">
        <TextField value="todo" label="Guarantor name" name="guarantor_name" />
        <TextField value="todo" label="Guarantor address" name="guarantor_address" />
        <SelectField label="Relationship to guarantor" name="relationship_to_guarantor" options={[{
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
    </Section>);
}
