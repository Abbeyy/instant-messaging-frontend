export type MessageHistory = {
    _id: string
    sender: UserId
    recipient: UserId
    messageList: MessageId[]
}

type UserId = string

type MessageId = string

export type Message = {
    _id: string
    messages: string[]
    timeStamp: Date
}