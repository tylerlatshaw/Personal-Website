export type ContactResponseType = {
    results: [ContactResultType],
    next_cursor: string | null,
    has_more: boolean
}

export type ContactResultType = {
    id: string,
    created_time: Date,
    last_edited_time: Date,
    archived: boolean,
    properties: {
        MessageId: {
            id: string,
            title: [{
                plain_text: string
            }]
        },
        DateCreated: {
            id: string,
            created_time: string
        },
        DateUpdated: {
            id: string,
            last_edited_time: string
        },
        Name: {
            id: string,
            rich_text: [{
                plain_text: string
            }]
        }
        EmailAddress: {
            id: string,
            email: string
        },
        Message: {
            id: string,
            rich_text: [{
                plain_text: string
            }]
        },
        ReferringPage: {
            id: string,
            url: string
        },
        FormSource: {
            id: string,
            rich_text: [{
                plain_text: string
            }]
        }
    }
}

export type RecordResponseType = {
    results: [RecordResultType],
    next_cursor: string | null,
    has_more: boolean
}

export type RecordResultType = {
    id: string,
    created_time: Date,
    last_edited_time: Date,
    archived: boolean,
    properties: {
        RecordId: {
            id: string,
            title: [{
                plain_text: string
            }]
        },
        DateCreated: {
            id: string,
            created_time: string
        },
        DateUpdated: {
            id: string,
            last_edited_time: string
        },
        Name: {
            id: string,
            rich_text: [{
                plain_text: string
            }]
        },
        Artist: {
            id: string,
            select: {
                name: string
            }
        },
        Year: {
            id: string,
            number: number
        },
        Genre: {
            id: string,
            multi_select: [{
                name: string
            }]
        },
        ImageUrl: {
            id: string,
            files: [{
                name: string,
                file: {
                    url: string
                }
            }] 
        }
        DiscogsUrl: {
            id: string,
            url: string
        }
    }
}