export const getIndianDateTime = (date: string) => {
    return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
    });
};

export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

export const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
};

export const getSevenDaysAgoDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 6);
    return date.toISOString().split("T")[0];
};

export const getPercentageValue = ({
    value,
    total,
    keepDecimals = false,
}: {
    value: number;
    total: number;
    keepDecimals?: boolean;
}) => {
    value = isNaN(value) ? 0 : value;
    total = isNaN(total) ? 0 : total;
    if (total === 0) return 0;
    const percentage = (value / total) * 100;
    return keepDecimals ? Math.floor(percentage * 100) / 100 : Math.round(percentage);
};
