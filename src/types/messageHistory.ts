import { ContactUser } from "./user"

export type MessageHistory = {
    _id: string
    sender: ContactUser
    recipient: ContactUser
    messageList: string[]
    timeStamp: Date
}