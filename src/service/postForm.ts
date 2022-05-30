export interface PayloadEmployer {
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
        relation: 'parent' | 'sibling' | 'employer' | 'other'
    }
}

// TODO: defined payload type
export const postForm = (payload: Payload) => {
    fetch('https://ref-api.goodlord.co/reference/new', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
}
