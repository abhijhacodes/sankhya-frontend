export const dynamic = "force-dynamic";

import Dashboard from "@/components/Analytics/Dashboard";
import CreateProject from "@/components/Project/CreateProject";
import { projectServices } from "@/services/project";
import styles from "../project/project.module.css";

export default async function Analytics() {
    const projectData = await projectServices.getProjectDetails();

    if (!projectData.project) {
        return (
            <main className={styles.project__container}>
                <CreateProject />
            </main>
        );
    }

    return <Dashboard projectId={projectData.project.project_id} />;
}
