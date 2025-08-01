import { api } from "@/lib/axiosConfig";

interface ISignInBody{
    email: string;
}

export async function signIn(email : ISignInBody) {
    await api.post("/authenticate", email)
}