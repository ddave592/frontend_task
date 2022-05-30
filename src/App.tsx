import { SelectField } from "./components/SelectField";
import { TextField } from "./components/TextField";
import { Button } from "./components/Button"
import { Section } from "./components/Section";
import { EmployerSection } from "./components/EmployerSection";




function App() {
    return (
        <main className="main">
            <h1 className="main-title">Goodlord Referencing form</h1>
            <Section title="Personal">
                <TextField label="First Name" name="first_name" />
                <TextField label="Last Name" name="last_name" />
                <TextField label="Address" name="address" />
            </Section>

            <EmployerSection />

            <Section title="Guarantor">
                <TextField label="Guarantor name" name="guarantor_name" />
                <TextField label="Guarantor address" name="guarantor_address" />
                <SelectField
                    label="Relationship to guarantor"
                    name="relationship_to_guarantor"
                    options={[
                        {
                            label: 'Parent',
                            value: 'parent'
                        },
                        {
                            label: 'Sibling',
                            value: 'sibling'
                        },
                        {
                            label: 'Employer',
                            value: 'employer'
                        },
                        {
                            label: 'Other',
                            value: 'other'
                        },
                    ]} />
            </Section>

            <div className="button-group">
                <Button text="Cancel" variant="link" onClick={() => console.log('clicked')} />
                <Button text="Submit" variant="outline" onClick={() => console.log('clicked')} />
            </div>
        </main>
    );
}

export default App;
