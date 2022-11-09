import { MessageHistory } from "../../messageHistory";

export type MessageHistoryState = {
    messageHistory: MessageHistory[],
    error: string,
    fetching: boolean
}