import { useCallback, useContext } from "react";
import { Payload } from "../../service/postForm";
import { FormContext } from "../FormContext";

type PayloadPersonal = Payload['personal']

export const usePersonalFields = () => {
    const { updateFields } = useContext(FormContext);

    return {
        updateFirstName: useCallback((value: PayloadPersonal['first_name']) => {
            updateFields((draft) => { draft.personal.first_name = value })
        }, [updateFields]),

        updateLastName: useCallback((value: PayloadPersonal['last_name']) => {
            updateFields((draft) => { draft.personal.last_name = value })
        }, [updateFields]),

        updateCurrentAddress: useCallback((value: PayloadPersonal['current_address']) => {
            updateFields((draft) => { draft.personal.current_address = value })
        }, [updateFields]),
    };
};
