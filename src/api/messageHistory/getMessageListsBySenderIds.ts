import axios from "axios";
import { Message } from "../../types/messageHistory";
import { BACKEND } from "../endpoints";

type Response = Message[]

export const getMessageListsBySenderIds = async (senderIds: string[]) => {
    const result = await axios
    .get<Response>(`${BACKEND}/messageList/bySenderIds`, {
        params: {
            _ids: senderIds
        }
    })

    return result.data
}