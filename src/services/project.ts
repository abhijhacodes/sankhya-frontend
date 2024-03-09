import { getCookies } from "@/lib/utils";
import DefaultAxiosInstance from "./clients/axios";

const getProjectDetails = async () => {
    try {
        const res = await DefaultAxiosInstance.get("/project", {
            headers: {
                Cookie: getCookies(),
            },
        });
        return res.data;
    } catch (error: unknown) {
        throw new Error("An error occured while fetching project details. Please try again later.");
    }
};

export const projectServices = { getProjectDetails };
