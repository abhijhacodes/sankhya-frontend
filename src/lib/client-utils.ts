export const getIndianDateTime = (date: string) => {
    return new Date(date).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
    });
};
