import { Button } from "./components/Button"
import { EmployerSection } from "./components/sections/EmployerSection";
import { PersonalSection } from "./components/sections/PersonalSection";
import { GuarantorSection } from "./components/sections/GuarantorSection";
import { FormContextProvider } from "./components/FormContext";

function App() {
    return (
        <FormContextProvider>
            <main className="main">
                <h1 className="main-title">Goodlord Referencing form</h1>
                <PersonalSection />
                <EmployerSection />
                <GuarantorSection />

                <div className="button-group">
                    <Button text="Cancel" variant="link" onClick={() => console.log('clicked')} />
                    <Button text="Submit" variant="outline" onClick={() => console.log('clicked')} />
                </div>
            </main>
        </FormContextProvider>
    );
}

export default App;
