import { Message } from "../../messageHistory"

export type MessageListState = {
    messageLists: Message[],
    error: string,
    fetching: boolean
    postingMessages: boolean
}