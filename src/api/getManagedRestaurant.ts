import { api } from "@/lib/axiosConfig";

interface IManagedRestaurantReponse {
    name: string;
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getManagedRestaurant(){
    const response = await api.get<IManagedRestaurantReponse>("/managed-restaurant")
    return response.data
}