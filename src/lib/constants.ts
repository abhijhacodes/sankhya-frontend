export const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)*/;
export type NotificationType = "success" | "info" | "warning" | "error";
export const analyticsEndpoints = [
    "totalVisitors",
    "visitorsTrend",
    "topCities",
    "topStates",
    "topCountries",
    "operatingSystems",
    "topDeviceSizes",
    "trafficTrend",
] as const;
