import { EmployerSection } from "./components/sections/EmployerSection";
import { PersonalSection } from "./components/sections/PersonalSection";
import { GuarantorSection } from "./components/sections/GuarantorSection";
import { FormContextProvider } from "./components/FormContext";
import { FormButton } from "./FormButton";


function App() {
    return (
        <FormContextProvider>
            <main className="main">
                <h1 className="main-title">Goodlord Referencing form</h1>
                <PersonalSection />
                <EmployerSection />
                <GuarantorSection />

                <FormButton />
            </main>
        </FormContextProvider>
    );
}

export default App;
