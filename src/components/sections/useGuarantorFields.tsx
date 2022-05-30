import { useCallback, useContext } from "react";
import { Payload } from "../../service/postForm";
import { FormContext } from "../FormContext";

type PayloadGuarantor = Payload['guarantor']

export const useGuarantorFields = () => {
    const { updateFields } = useContext(FormContext);

    return {
        updateName: useCallback((value: PayloadGuarantor['name']) => {
            updateFields((draft) => { draft.guarantor.name = value })
        }, [updateFields]),

        updateRelation: useCallback((value: PayloadGuarantor['relation']) => {
            updateFields((draft) => { draft.guarantor.relation = value })
        }, [updateFields]),

        updateAddress: useCallback((value: PayloadGuarantor['address']) => {
            updateFields((draft) => { draft.guarantor.address = value })
        }, [updateFields]),
    };
};
