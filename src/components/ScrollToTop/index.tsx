"use client";

import { useEffect, useState } from "react";
import { UpCircleFilled } from "@ant-design/icons";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return isVisible ? (
        <UpCircleFilled
            onClick={scrollToTop}
            style={{ fontSize: "32px", position: "fixed", bottom: "1.25rem", right: "1.25rem" }}
        />
    ) : null;
};

export default ScrollToTop;
