import axios from "axios";
import { BACKEND } from "../endpoints";

type Response = any

export const postAppendMessages = async (chatId: string, messages: string[], senderId: string) => {
    const result = await axios
    .post<Response>(`${BACKEND}/chat/appendMessages`, {
        params: {
            _id: chatId,
            messages,
            timeStamp: new Date(),
            sender: senderId,
        }
    })

    return result
}