import Widget from "@/components/ui/Widget";

export default (props: { title: string; }) => {
    return (
        <Widget>
            <Widget.Header
                title={props.title}
            />
            <Widget.Content>
                salam
            </Widget.Content>
        </Widget>
    )
}