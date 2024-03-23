import { ProjectDetailsProps } from "@/components/Project/ProjectDetails";
import { getClientSideHeaders } from "@/lib/client-utils";
import DefaultAxiosInstance from "../api-client";

const createNewProject = async ({ projectDetails }: ProjectDetailsProps) => {
    try {
        const { project_name, project_client_url } = projectDetails;
        const res = await DefaultAxiosInstance.post(
            "/project",
            {
                project_name,
                project_client_url,
            },
            {
                headers: getClientSideHeaders(),
            }
        );
        return res.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message ?? "An error occured while creating a new project. Please try again later."
        );
    }
};

export const clientProjectServices = { createNewProject };
