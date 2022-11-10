export type MessageHistory = {
    _id: string
    parties: UserId[]
    messageList: MessageId[]
}

type UserId = string

type MessageId = string

export type Message = {
    _id: string
    messages: string[]
    timeStamp: Date
    sender: UserId
}