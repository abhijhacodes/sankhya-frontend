import Image from "next/image";
import { Collapse, CollapseProps, Flex } from "antd";

import homeStyles from "@/components/HeroSection/hero.module.css";
import HeroHeader from "@/components/Navbar/Header";
import styles from "./guide.module.css";
import CopyToClipboard from "@/components/CopyToClipboard";
import ScrollToTop from "@/components/ScrollToTop";

const faqItems: CollapseProps["items"] = [
    {
        key: "1",
        label: "Is my and my user's data safe ?",
        children: (
            <p>
                Yes, we only generate the given analytics from your user's data, we do not store or share any sensitive
                information
            </p>
        ),
    },
    {
        key: "2",
        label: "Is it safe using the API key on client side ? Should I use my own server to call the SDK API ?",
        children: (
            <p>
                Your API key is tightly coupled with your project URL and cannot be used anywhere else, so it safe even
                when it's exposed in the browser. <br /> And you shouldn't use your own server to do this, as you will
                lose all the demographic related analytics by doing so.
            </p>
        ),
    },
    {
        key: "3",
        label: "Will Sankhya always be free ?",
        children: (
            <p>
                We do not have any paid plans yet and Sankhya is completely free. But we will have some paid plans and a
                generous free tier if we see a potential.
            </p>
        ),
    },
    {
        key: "4",
        label: "Where to reach out if I have more questions ?",
        children: (
            <p>
                You can reach out to the developer at <a href="mailto:abhi.jha.cs@gmail.com">abhi.jha.cs@gmail.com</a>{" "}
                if you have any quesions, suggestions or are facing any issues in SDK integration.
            </p>
        ),
    },
];

export default function Guide() {
    return (
        <div className={homeStyles.home__section}>
            <ScrollToTop />

            <HeroHeader />

            <Flex className={styles.container} vertical gap="32px">
                <h2>Getting started guide</h2>

                <Flex vertical>
                    <h3>List of contents</h3>
                    <ol className={styles.docs__list}>
                        <li>
                            <a href="#home-page">Home page</a>
                        </li>
                        <li>
                            <a href="#create-account">Create new account</a>
                        </li>
                        <li>
                            <a href="#create-project">Create new project</a>
                        </li>
                        <li>
                            <a href="#integrate-sdk">Integrate Sankhya SDK in your project</a>
                        </li>
                        <li>
                            <a href="#user-dashboard">Use analytics dashboard</a>
                        </li>
                        <li>
                            <a href="#faqs">Frequently asked questions</a>
                        </li>
                    </ol>
                </Flex>

                <Flex vertical gap="8px" id="home-page">
                    <h2>1. Home page</h2>
                    <Image
                        src="/assets/guide/g1.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                </Flex>

                <Flex vertical gap="8px" id="create-account">
                    <h2>2. Get started by creating account</h2>
                    <p>Currently, you can only login with Github, We will be adding more OAuth providers soon.</p>
                    <Image
                        src="/assets/guide/g2.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <Image
                        src="/assets/guide/g3.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                </Flex>

                <Flex vertical gap="8px" id="create-project">
                    <h2>3. Create a new project</h2>
                    <p>Initially you will see this screen, when you don't have any project</p>
                    <Image
                        src="/assets/guide/g4.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <p>
                        Fill in your correct details, the project details (Name and Client URL) cannot be updated later
                    </p>
                    <Image
                        src="/assets/guide/g5.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <p>
                        After creating the project, you will see your API key, keep it handy, you will need it for
                        Sankhya SDK integration.
                    </p>
                    <Image
                        src="/assets/guide/g6.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <p>
                        Right now, if you go to analytics page, you will see <b>No data available</b> when you haven't
                        integrated the SDK yet or there were no visitors after the integration.
                    </p>
                    <Image
                        src="/assets/guide/g7.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                </Flex>

                <Flex vertical gap="8px" id="integrate-sdk">
                    <h2>4. Integrate Sankhya SDK in your project</h2>
                    <ul className={styles.docs__list}>
                        <li>
                            <p>
                                You can integrate Sankhya only in your <b>client side projects</b>.
                            </p>
                        </li>
                        <li>
                            <p>
                                Load the below SDK script URL in your project, it adds a method to your browser window
                            </p>
                            <CopyToClipboard text="https://cdn.jsdelivr.net/gh/abhijhacodes/sankhya-backend/client-sdk.js" />
                        </li>
                        <li>
                            <p>Copy your API key from project page</p>
                        </li>
                        <li>
                            <p>Call the below method on any page in your web app, preferrably on load.</p>
                        </li>
                        <li>
                            {" "}
                            <p>
                                Make sure the SDK script is loaded completely before you trying calling the below method
                            </p>
                            <Image
                                src="/assets/guide/codeblock.svg"
                                alt="See guide"
                                height={360}
                                width={640}
                                className={styles.guide__img}
                            />
                        </li>
                        <li>
                            <p>
                                <b>captureUserEvent</b> method returns a Promise, you just need to call it, however you
                                want.
                            </p>
                        </li>
                        <li>
                            <p>
                                Please note that the API key can be used to capture analytics only on the Client URL
                                that was used while creating the project. So, while testing it locally you will see the
                                below error. Don't worry about it and deploy your project to production.
                            </p>
                            <code>You are not authorized to perform this action</code>
                        </li>
                        <li>
                            <p>
                                This is all that you have to do and Sankhya will start generating user analytics for
                                you.
                            </p>
                        </li>
                    </ul>
                </Flex>

                <Flex vertical gap="8px" id="use-dashboard">
                    <h2>5. Using analytics dashboard</h2>
                    <p>
                        Once you have integrated the Sankhya SDK in your client side project, you can start seeing the
                        user analytics straight away.
                    </p>
                    <Image
                        src="/assets/guide/g8.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <Image
                        src="/assets/guide/g9.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <Image
                        src="/assets/guide/g10.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <p>
                        The analytics data is shown for selected start date and end date which you can change, and it
                        defaults to past one week.
                    </p>
                    <Image
                        src="/assets/guide/g11.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                    <p>
                        You can also see your profile details, session expiry and logout option by clicking on your
                        profile icon on top right corner. Session expires in 30 days.
                    </p>
                    <Image
                        src="/assets/guide/g12.png"
                        alt="See guide"
                        height={360}
                        width={640}
                        className={styles.guide__img}
                    />
                </Flex>

                <Flex vertical gap="8px" id="faqs">
                    <h2>6. Frequently asked questions</h2>
                    <Collapse accordion items={faqItems} defaultActiveKey={["1"]} />
                </Flex>
            </Flex>
        </div>
    );
}
