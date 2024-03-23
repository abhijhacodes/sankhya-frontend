"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Flex, Typography } from "antd";
import { BookOutlined, PieChartOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

import Button from "../Button";
import CopyToClipboard from "../CopyToClipboard";

export type ProjectDetailsProps = {
    projectDetails: {
        project_name?: string;
        project_client_url?: string;
        api_key?: string;
    };
};

export default function ProjectDetails({ projectDetails }: ProjectDetailsProps) {
    const router = useRouter();

    return (
        <Flex vertical>
            <Title level={2} type="secondary">
                Here are your project details
            </Title>
            <Card>
                <Flex justify="center">
                    <Image src="/assets/ProjectIllustration.svg" alt="project" width={240} height={240} />
                </Flex>
                <Flex vertical gap={16}>
                    <Text>
                        <b>Project name</b>: {projectDetails.project_name}
                    </Text>
                    <Text>
                        <b>Client URL</b>: {projectDetails.project_client_url}
                    </Text>
                    <Text>
                        <b>API key</b>: <CopyToClipboard text={projectDetails.api_key!} />
                    </Text>
                    <Flex gap="8px">
                        <Button
                            onClick={() => router.push("/dashboard/analytics")}
                            text="See analytics"
                            bgColor="#FBD28B"
                            icon={<PieChartOutlined style={{ fontSize: "18px" }} />}
                        />
                        <Link href="/guide#integrate-sdk" target="_blank">
                            <Button
                                onClick={() => {}}
                                text="See guide"
                                bgColor="#FBD28B"
                                icon={<BookOutlined style={{ fontSize: "18px" }} />}
                            />
                        </Link>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    );
}
