import {PropsWithChildren} from "react";
import {AppLayout} from "@/components/layout";

export default ({children}: PropsWithChildren) => {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}