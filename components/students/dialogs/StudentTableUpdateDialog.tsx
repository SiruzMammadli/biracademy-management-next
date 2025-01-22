import Dialog from "@/components/ui/dialog/Dialog";
import {StudentTableUpdateDialogRow} from "@/components/students";
import {MailIcon, PhoneIcon, SquarePenIcon, UserRoundIcon, PowerIcon} from "lucide-react";
import {Button, Flex, Input} from "@/components/ui";
import {DialogProps} from "@/src/providers/dialog";
import {Student} from "@/src/types/student.types";
import {Gender, StudentActivity} from "@/src/types/enums";

export default ({id, email, fullname, phone, gender, activity, created_at, ...props}: DialogProps & Student) => {
    return (
        <Dialog title="Tələbə məlumatlarını yenilə" onClose={props.onClose}>
            <Dialog.Content>
                <form>
                    <StudentTableUpdateDialogRow
                        title="Ad, soyad"
                        icon={SquarePenIcon}
                    >
                        <Input placeholder="Ad, soyad daxil edin" defaultValue={fullname}/>
                    </StudentTableUpdateDialogRow>
                    <StudentTableUpdateDialogRow
                        title="Email"
                        icon={MailIcon}
                    >
                        <Input placeholder="Email daxil edin" defaultValue={email}/>
                    </StudentTableUpdateDialogRow>
                    <StudentTableUpdateDialogRow
                        title="Əlaqə nömrəsi"
                        icon={PhoneIcon}
                    >
                        <Input placeholder="Əlaqə nömrəsi daxil edin" defaultValue={phone}/>
                    </StudentTableUpdateDialogRow>
                    <StudentTableUpdateDialogRow
                        title="Cins"
                        icon={UserRoundIcon}
                    >
                        <Input placeholder="Cins daxil edin" defaultValue={Gender[gender]}/>
                    </StudentTableUpdateDialogRow>
                    <StudentTableUpdateDialogRow
                        title="Status"
                        icon={PowerIcon}
                    >
                        <Input placeholder="Status daxil edin" defaultValue={StudentActivity[activity]}/>
                    </StudentTableUpdateDialogRow>
                </form>
            </Dialog.Content>
            <Dialog.Footer>
                <Flex gapX="12px">
                    <Button variant="outlined">İmtina</Button>
                    <Button>
                        Yenilə
                    </Button>
                </Flex>
            </Dialog.Footer>
        </Dialog>
    )
}