import Widget from "@/components/ui/Widget";
import {PropsWithChildren} from "react";

export default (props: PropsWithChildren<{ title: string; }>) => {
    return (
        <Widget>
            <Widget.Header
                title={props.title}
            />
            <Widget.Content>
                {props.children}
            </Widget.Content>
        </Widget>
    )
}