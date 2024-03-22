import { getServerSideHeaders } from "@/lib/server-utils";
import DefaultAxiosInstance from "./clients/axios";
import { ProjectDetailsProps } from "@/components/Project/ProjectDetails";
import { getClientSideHeaders } from "@/lib/client-utils";

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
    } catch (error) {
        throw new Error("An error occured while creating a new project. Please try again later.");
    }
};

export const projectServices = { getProjectDetails, createNewProject };
