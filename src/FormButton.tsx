import { useContext } from "react";
import { Button } from "./components/Button";
import { FormContext } from "./components/FormContext";
import { postForm } from "./service/postForm";

export function FormButton() {
    const { fields } = useContext(FormContext)
    return (
        <div className="button-group">
            <Button text="Cancel" variant="link" onClick={() => { }} />
            <Button text="Submit" variant="outline" onClick={() => postForm(fields)} />
        </div>
    )
}
