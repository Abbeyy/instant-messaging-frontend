import axios from "axios";
import { BACKEND } from "../endpoints";

type Response = any

export const postMessages = async (historyId: string, messages: string[], senderId: string, timeStamp: string) => {
    const response = await axios
    .post<Response>(`${BACKEND}/messageList/postMessages`, {
        params: {
            _id: historyId,
            messages,
            timeStamp,
            sender: senderId,
        }
    })

    return response
}