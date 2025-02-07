'use client';
import Dialog from "@/components/ui/dialog/Dialog";
import {StudentTableDialogRadio, StudentTableDialogRow} from "@/components/students";
import {MailIcon, PhoneIcon, SquarePenIcon, UserRoundIcon} from "lucide-react";
import {Button, Flex, Input} from "@/components/ui";
import {Gender} from "@/src/types/enums";
import {SharedDialogProps} from "@/src/providers/dialog";
import {useActionState, useState} from "react";
import {css} from "@emotion/react";
import {insertStudent} from "@/app/(protected)/app/students/actions/insert-student";
import {useQueryClient} from "@tanstack/react-query";

export default (props: SharedDialogProps) => {
    const [selectedGender, setSelectedGender] = useState<keyof typeof Gender>(0);
    const [state, action, pending] = useActionState(insertStudent, {
        isCreated: false,
    });
    const queryClient = useQueryClient();

    if (state?.isCreated) {
        queryClient.invalidateQueries({queryKey: ['students']}).then(() => {
            props.onClose?.();
        });
    }

    return (
        <Dialog zIndex={props.zIndex} title="Tələbə məlumatlarını yenilə" onClose={props.onClose}>
            <Dialog.Content>
                <form action={action}>
                    <StudentTableDialogRow
                        title="Ad, soyad"
                        icon={SquarePenIcon}
                    >
                        <Input name="fullname" placeholder="Ad, soyad daxil edin"/>
                    </StudentTableDialogRow>
                    <StudentTableDialogRow
                        title="Email"
                        icon={MailIcon}
                    >
                        <Input name="email" placeholder="Email daxil edin"/>
                    </StudentTableDialogRow>
                    <StudentTableDialogRow
                        title="Əlaqə nömrəsi"
                        icon={PhoneIcon}
                    >
                        <Input name="phone" placeholder="Əlaqə nömrəsi daxil edin"/>
                    </StudentTableDialogRow>
                    <StudentTableDialogRow
                        title="Gender"
                        icon={UserRoundIcon}
                    >
                        {Object.entries(Gender).map(([value, label]) => (
                            <StudentTableDialogRadio
                                key={value}
                                value={value}
                                label={label}
                                checked={selectedGender === +value}
                                name="gender"
                                onChange={() => setSelectedGender(+value as keyof typeof Gender)}
                            />
                        ))}
                    </StudentTableDialogRow>
                    <Flex gapX="12px" style={css`width: 100%; padding-top: 12px;`}>
                        <Button variant="outlined" style={css`flex: 1;`} onClick={props.onClose}>İmtina</Button>
                        <Button style={css`flex: 1;`} disabled={pending} type="submit">
                            Tamamla
                        </Button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog>
    )
}