import axios from "axios";
import { Message } from "../../types/messageHistory";
import { BACKEND } from "../endpoints";

type Response = Message[]


export const getMessageListsBySenderId = async (senderId: string) => {
    const result = await axios
    .get<Response>(`${BACKEND}/messageList/bySenderId`, {
        params: {
            _id: senderId
        }
    })

    return result.data
}