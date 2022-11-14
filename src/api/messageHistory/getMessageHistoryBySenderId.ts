import axios from "axios";
import { MessageHistory } from "../../types/messageHistory";
import { BACKEND } from "../endpoints";

type Response = MessageHistory[]


export const getMessageHistoryBySenderId = async (senderId: string) => {
    const result = await axios
    .get<Response>(`${BACKEND}/messageHistory/bySenderId`, {
        params: {
            _id: senderId
        }
    })

    return result.data
}