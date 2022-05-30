import { FC, useState } from "react";
import { Dispatch } from "react";
import { createContext, PropsWithChildren } from "react";
import { Payload } from '../service/postForm';

interface FormContextValues {
    values: Payload
    setValues: Dispatch<React.SetStateAction<Payload>>
}

const FormContext = createContext<FormContextValues>({} as FormContextValues);

export const FormContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [values, setValues] = useState<Payload>({
        personal: {
            first_name: '',
            last_name: '',
            current_address: ''
        },
        employer: [],
        guarantor: {
            name: '',
            address: '',
            relation: 'employer',
        }
    })

    return (
        <FormContext.Provider value={{ values, setValues: setValues }}>
            {children}
        </FormContext.Provider>
    );
};
