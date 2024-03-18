"use client";

import { useState } from "react";
import { Card, Flex, Form, Typography, Input, type FormProps, notification } from "antd";
const { Title, Text } = Typography;
const { Item: FormItem } = Form;

import { NotificationType, URL_REGEX } from "@/lib/constants";
import DefaultAxiosInstance from "@/services/clients/axios";
import styles from "./projectcomponents.module.css";
import Button from "../Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

type FieldType = {
    project_name?: string;
    project_client_url?: string;
};

export default function CreateProject() {
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [apiLoading, setApiLoading] = useState(false);
    const [notificationAPI, notificationContext] = notification.useNotification();

    const createProjectCallback: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            setApiLoading(true);
            await DefaultAxiosInstance.post("/project", {
                project_name: values.project_name,
                project_client_url: values.project_client_url,
            });
            openNotificationWithIcon(
                "success",
                "Project created successfully",
                "Successfully created your new project. You can now start using this to capture events."
            );
            setApiLoading(false);
            router.refresh();
        } catch (error: any) {
            openNotificationWithIcon("error", "Project creation failed", error.response.data.message);
            setApiLoading(false);
        }
    };

    const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
        notificationAPI[type]({
            message,
            description,
            duration: 10,
        });
    };

    return (
        <>
            {notificationContext}

            {isFormOpen ? (
                <Card className={styles.project__card}>
                    <Form
                        variant="filled"
                        autoComplete="off"
                        labelCol={{ span: 4 }}
                        className={styles.form}
                        onFinish={createProjectCallback}
                    >
                        <FormItem<FieldType>
                            label="Project name"
                            name="project_name"
                            rules={[{ required: true, message: "Project name cannot be empty!" }]}
                        >
                            <Input placeholder="Please enter your project name" />
                        </FormItem>
                        <FormItem<FieldType>
                            label="Project client URL"
                            name="project_client_url"
                            rules={[
                                {
                                    required: true,
                                    message: "Project client URL cannot be empty!",
                                },
                                {
                                    pattern: URL_REGEX,
                                    message: "Please enter a valid URL starting with http:// or https://",
                                },
                            ]}
                        >
                            <Input placeholder="Please enter your client URL of your project. This cannot be changed later." />
                        </FormItem>

                        <Flex align="center" justify="center" gap={16} className={styles.submit_btn__container}>
                            <Button
                                text="Create project"
                                onClick={() => {}}
                                bgColor="#218F76"
                                textColor="white"
                                type="submit"
                                isLoading={apiLoading}
                                loadingText="Creating project"
                            />
                            <Button
                                text="Cancel"
                                onClick={() => setIsFormOpen(false)}
                                bgColor="#E44236"
                                textColor="white"
                                type="button"
                            />
                        </Flex>
                    </Form>
                </Card>
            ) : (
                <Flex vertical>
                    <Title level={2} type="warning">
                        You don&apos;t have a project yet.
                    </Title>
                    <Card>
                        <Flex vertical gap={16}>
                            <Flex justify="center">
                                <Image
                                    src="/assets/CreateProjectIllustration.svg"
                                    alt="project"
                                    width={240}
                                    height={240}
                                />
                            </Flex>
                            <Text>Create a new project to get started. Or see our guide on how to do it.</Text>
                            <Flex gap={16} align="center" justify="center">
                                <Button
                                    text="Create new project"
                                    onClick={() => setIsFormOpen(true)}
                                    bgColor="#218F76"
                                    textColor="white"
                                />
                                <Button text="See guide" onClick={() => {}} bgColor="#218F76" textColor="white" />
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
            )}
        </>
    );
}
