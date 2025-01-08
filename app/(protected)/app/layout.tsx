import {PropsWithChildren} from "react";
import {AppLayout} from "@/components/layout";
import {AuthProvider} from "@/src/providers";

export default ({children}: PropsWithChildren) => {
    return (
        <AuthProvider>
            <AppLayout>
                {children}
            </AppLayout>
        </AuthProvider>
    )
}