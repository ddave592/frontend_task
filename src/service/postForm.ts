export interface PayloadEmployer {
    id: string
    name: string
    start_date: string
    end_date: string
}

export interface Payload {
    personal: {
        first_name: string
        last_name: string
        current_address: string
    }
    employer: PayloadEmployer[]
    guarantor: {
        name: string
        address: string
        relation: 'parent' | 'sibling' | 'employer' | 'other' | ''
    }
}

export const postForm = (payload: Payload) => {
    const strippedPayload = {
        ...payload,
        employer: payload.employer.map((employer => (
            {
                name: employer.name,
                start_date: employer.start_date,
                end_date: employer.end_date,
            } as Partial<PayloadEmployer>
        )))
    }

    fetch('https://ref-api.goodlord.co/reference/new', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(strippedPayload)
    })
}
