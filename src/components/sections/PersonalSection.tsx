import { TextField } from "../TextField";
import { Section } from "../Section";

export function PersonalSection() {
    return (
        <Section title="Personal">
            <TextField value="todo" label="First Name" name="first_name" />
            <TextField value="todo" label="Last Name" name="last_name" />
            <TextField value="todo" label="Address" name="address" />
        </Section>
    );
}
