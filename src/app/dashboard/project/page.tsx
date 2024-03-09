export const dynamic = "force-dynamic";

import { projectServices } from "@/services/project";

export default async function Project() {
    const projectDetails = await projectServices.getProjectDetails();

    return (
        <main>
            <h1>Project page</h1>
            <h2>Project name: {projectDetails?.project?.project_name}</h2>
            <h2>
                API key:
                {projectDetails?.project?.api_key}
            </h2>
        </main>
    );
}
