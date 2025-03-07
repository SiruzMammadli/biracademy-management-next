export type RouteDictionary = Record<string, RouteValue>
type RouteValue = { label: string; }

export const RoutesDictionary: RouteDictionary = {
    "/app": {label: "İdarə paneli"},
    "/app/calendar": {label: "Təqvim"},
    "/app/settings": {label: 'Parametrlər'},
    // STUDENTS
    "/app/students": {label: 'Tələbə cədvəli'},
    "/app/students/overview": {label: 'Tələbələrə ümumi baxış'},
};