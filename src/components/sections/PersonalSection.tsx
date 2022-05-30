import { TextField } from "../TextField";
import { Section } from "../Section";
import { useContext } from "react";
import { FormContext } from "../FormContext";
import { usePersonalFields } from "./usePersonalFields";

export function PersonalSection() {
    const { fields: { personal } } = useContext(FormContext)
    const { updateFirstName, updateLastName, updateCurrentAddress } = usePersonalFields()

    return (
        <Section title="Personal">
            <TextField onChange={updateFirstName} value={personal.first_name} label="First Name" name="first_name" />
            <TextField onChange={updateLastName} value={personal.last_name} label="Last Name" name="last_name" />
            <TextField onChange={updateCurrentAddress} value={personal.current_address} label="Address" name="address" />
        </Section>
    );
}
