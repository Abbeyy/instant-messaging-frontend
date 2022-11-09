export type User = {
    _id: string
    email: string
    password: string
    firstName: string
    surname: string
    displayName: string | undefined
    contacts: UserId[] | undefined
}

type UserId = string

export enum USER_STATUS {
    ONLINE = 'online',
    OFFLINE = 'offline'
}