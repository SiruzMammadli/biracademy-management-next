'use client';
import Dialog from "@/components/ui/dialog/Dialog";
import {StudentTableDialogRadio, StudentTableDialogRow} from "@/components/students";
import {MailIcon, PhoneIcon, SquarePenIcon, UserRoundIcon, PowerIcon} from "lucide-react";
import {Button, Flex, Input} from "@/components/ui";
import {Student} from "@/src/types/student.types";
import {StudentActivity, Gender} from "@/src/types/enums";
import {SharedDialogProps} from "@/src/providers/dialog";
import {useActionState, useState} from "react";
import {css} from "@emotion/react";
import updateStudent from "@/app/(protected)/app/students/actions/update-student";

export default ({id, email, fullname, phone, gender, activity, created_at, ...props}: SharedDialogProps & Student) => {
    const [selectedGender, setSelectedGender] = useState<keyof typeof Gender>(gender);
    const [selectedActivity, setSelectedActivity] = useState<keyof typeof StudentActivity>(activity);
    const [_, action, pending] = useActionState(updateStudent, null);

    return (
        <Dialog zIndex={props.zIndex} title="Tələbə məlumatlarını yenilə" onClose={props.onClose}>
            <Dialog.Content>
                <form action={action}>
                    <StudentTableDialogRow
                        title="Ad, soyad"
                        icon={SquarePenIcon}
                    >
                        <Input name="fullname" placeholder="Ad, soyad daxil edin" defaultValue={fullname}/>
                    </StudentTableDialogRow>
                    <StudentTableDialogRow
                        title="Email"
                        icon={MailIcon}
                    >
                        <Input name="email" placeholder="Email daxil edin" defaultValue={email}/>
                    </StudentTableDialogRow>
                    <StudentTableDialogRow
                        title="Əlaqə nömrəsi"
                        icon={PhoneIcon}
                    >
                        <Input name="phone" placeholder="Əlaqə nömrəsi daxil edin" defaultValue={phone}/>
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
                    <StudentTableDialogRow
                        title="Status"
                        icon={PowerIcon}
                    >
                        {Object.entries(StudentActivity).map(([value, label]) => (
                            <StudentTableDialogRadio
                                key={value}
                                value={value}
                                label={label}
                                checked={selectedActivity === +value}
                                name="activity"
                                onChange={() => setSelectedActivity(+value as keyof typeof StudentActivity)}
                            />
                        ))}
                    </StudentTableDialogRow>
                </form>
            </Dialog.Content>
            <Dialog.Footer>
                <Flex gapX="12px" style={css`width: 100%;`}>
                    {/* TODO: bu buttonu form icine al */}
                    <Button style={css`flex: 1;`} onClick={props.onClose}>İmtina</Button>
                    <Button variant="primary" style={css`flex: 1;`} disabled={pending} type="submit">
                        Yenilə
                    </Button>
                </Flex>
            </Dialog.Footer>
        </Dialog>
    )
}