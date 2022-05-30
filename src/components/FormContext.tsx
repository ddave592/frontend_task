import { FC } from "react";
import { createContext, PropsWithChildren } from "react";
import { Payload } from '../service/postForm';
import { Updater, useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';

interface FormContextValues {
    fields: Payload
    updateFields: Updater<Payload>
}

export const FormContext = createContext<FormContextValues>({} as FormContextValues);

export const FormContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [fields, updateFields] = useImmer<Payload>({
        personal: {
            first_name: '',
            last_name: '',
            current_address: ''
        },
        employer: [
            {
                id: uuidv4(),
                name: '',
                start_date: '',
                end_date: ''
            }
        ],
        guarantor: {
            name: '',
            address: '',
            relation: '',
        }
    })

    return (
        <FormContext.Provider value={{ fields, updateFields }}>
            {children}
        </FormContext.Provider>
    );
};
