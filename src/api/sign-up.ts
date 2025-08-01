import { api } from "@/lib/axiosConfig";

interface ISignUpBody{
    restaurantName: string,
    managerName: string,
    phone: string,
    email: string,
}

export async function signUp({email, managerName, phone, restaurantName}: ISignUpBody) {
    await api.post("/restaurants", {
        email,
        managerName,
        phone,
        restaurantName
    });

}