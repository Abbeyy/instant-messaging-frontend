import axios from "axios";
import { User } from "../types/user";
import { BACKEND } from "./endpoints";

type Response = User[]

export const getAllUsers = async () => {
    const result = await axios
    .get<Response>(`${BACKEND}/user/all`)

    return result.data
}