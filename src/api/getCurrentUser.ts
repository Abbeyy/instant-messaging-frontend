import axios from "axios";
import { User } from "../types/user";
import { BACKEND } from "./endpoints";

type Response = User[]


export const getCurrentUser = async (email: string) => {
    const result = await axios
    .get<Response>(`${BACKEND}/currentUser/getCurrentUser`, {
      params: {
        email,
      },
    })

    if (result.data.length) {
      return result.data[0]
    }
    return null
}