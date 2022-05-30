import { useCallback, useContext } from "react";
import { PayloadEmployer } from '../../service/postForm';
import { FormContext } from "../FormContext";
import { v4 as uuidv4 } from 'uuid';


export const useEmployerFields = () => {
    const { updateFields } = useContext(FormContext);

    return {
        addEmployerField: useCallback(() => updateFields((draft) => {
            draft.employer.push({
                id: uuidv4(),
                name: '',
                start_date: '',
                end_date: ''
            });
        }), [updateFields]),

        removeEmployerField: useCallback((index: number) => updateFields((draft) => {
            draft.employer.splice(index, 1);
        }), [updateFields]),

        changeEmployerField: useCallback((index: number, values: Partial<PayloadEmployer>) => {
            Object.keys(values).forEach(key => {
                const typedKey = key as unknown as keyof PayloadEmployer;

                if (values[typedKey]) {
                    updateFields((draft) => {
                        draft.employer[index][typedKey] = values[typedKey] as string;
                    });
                }
            });
        }, [updateFields])
    };
};
