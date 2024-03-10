export const dynamic = "force-dynamic";

import CreateProject from "@/components/Project/CreateProject";
import ProjectDetails from "@/components/Project/ProjectDetails";
import { projectServices } from "@/services/project";
import styles from "./project.module.css";

export default async function Project() {
    const projectData = await projectServices.getProjectDetails();

    return (
        <main className={styles.project__container}>
            {!projectData.project ? <CreateProject /> : <ProjectDetails projectDetails={projectData.project} />}
        </main>
    );
}
