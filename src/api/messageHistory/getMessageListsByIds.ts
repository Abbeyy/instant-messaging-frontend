import axios from "axios";
import { Message } from "../../types/messageHistory";
import { BACKEND } from "../endpoints";

type Response = Message[]


export const getMessageListsByIds = async (ids: string[]) => {
    const result = await axios
    .get<Response>(`${BACKEND}/messageList/byIds`, {
        params: {
            _ids: ids
        }
    })

    return result.data
}