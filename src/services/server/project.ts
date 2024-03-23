import { getServerSideHeaders } from "@/lib/server-utils";
import DefaultAxiosInstance from "../api-client";

const getProjectDetails = async () => {
    try {
        const res = await DefaultAxiosInstance.get("/project", {
            headers: getServerSideHeaders(),
        });
        return res.data;
    } catch (error: unknown) {
        throw new Error("An error occured while fetching your project details. Please try again later.");
    }
};

export const serverProjectServices = { getProjectDetails };
