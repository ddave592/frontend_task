import { FC, useContext, useState } from "react";
import { Dispatch } from "react";
import { createContext, PropsWithChildren } from "react";
import { Payload } from '../service/postForm';

interface FormContextValues {
    values: Payload
    setValues: Dispatch<React.SetStateAction<Payload>>
}

export const FormContext = createContext<FormContextValues>({} as FormContextValues);

export const useEmployerFields = () => {
    const { values, setValues } = useContext(FormContext)
    return {
        addEmployerField: () => setValues({
            ...values, ...{
                employer: [
                    ...values.employer,
                    {
                        name: '',
                        start_date: '',
                        end_date: ''
                    }
                ]
            }
        }),

        removeEmployerField: (index: number) => {
            const newEmployerFields = values.employer.filter((_field, fieldIndex) => fieldIndex !== index)
            setValues({
                ...values, ...{
                    employer: newEmployerFields
                }
            })
        },

        changeEmployerField: () => {
            
        }
    }
}

export const FormContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [values, setValues] = useState<Payload>({
        personal: {
            first_name: '',
            last_name: '',
            current_address: ''
        },
        employer: [
            {
                name: '',
                start_date: '',
                end_date: ''
            }
        ],
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
