import { api } from "@/lib/axiosConfig";

interface UpdateProfileBody{
    name: string,
    description: string
} 

export async function updateRestaurantProfile({name, description } : UpdateProfileBody) {
    await api.put("/profile", {name, description})
}