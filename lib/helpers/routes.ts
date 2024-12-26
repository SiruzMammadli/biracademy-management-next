export type RouteDictionary = Record<string, RouteValue>
type RouteValue = { label: string; }

export const RoutesDictionary: RouteDictionary = {
    "/app": {label: "Dashboard"},
    "/app/calendar": {label: "Calendar"},
    "/app/settings": {label: 'Settings'},
};