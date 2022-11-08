export type User = {
    _id: string
    email: string
    password: string
    firstName: string
    surname: string
    displayName: string | undefined
    contacts: ContactUser[] | undefined
}

export type ContactUser = {
    _id: string
    userId: string
}

export enum USER_STATUS {
    ONLINE = 'online',
    OFFLINE = 'offline'
}