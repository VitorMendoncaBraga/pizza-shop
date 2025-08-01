import { api } from "@/lib/axiosConfig";

interface IProfileRespose {
    name: string;
    id: string;
    email: string;
    phone: string | null;
    role: "manager" | "customer";
    createdAt: Date | null;
    updatedAt: Date | null;
}

export async function getProfile(){
    const response = await api.get<IProfileRespose>("/me")
    return response.data
}