'use client';
import Widget from "@/components/ui/Widget";
import Table, {type TableRow} from "@/components/ui/Table";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {http} from "@/lib/helpers/axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {Button} from "@/components/ui";
import {PencilIcon, Trash2Icon} from "lucide-react";
import Flex from "@/components/ui/Flex";
import {css} from "@emotion/react";
import {StudentTableInsertDialog, StudentTableUpdateDialog} from "@/components/students";
import {useDialog} from "@/src/providers/dialog";
import {Gender, StudentActivity} from "@/src/types/enums";
import {deleteStudent} from "@/app/(protected)/app/students/actions/delete-student";

export default () => {
    const {data: students} = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const res = await http.get('/students');
            if (res.status === StatusCodes.Ok) {
                return res.data;
            } else throw Error(`Unable to retrieve user!\nStatus code: ${res.status}\nMessage: ${res.statusText}`);
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
    const dialog = useDialog();
    const queryClient = useQueryClient();

    const openInsertDialog = () => {
        dialog.open(StudentTableInsertDialog);
    }
    const openUpdateDialog = (props: TableRow) => {
        dialog.open(StudentTableUpdateDialog, props)
    }

    const confirmDelete = async (id: TableRow["id"]) => {
        if (confirm("Are you sure you want to delete this student?")) {
            const result = await deleteStudent(id);
            if (result === true) {
                await queryClient.invalidateQueries({queryKey: ["students"]});
            }
        }
    }

    const tableActions = (row: TableRow) => (
        <Flex justifyContent="center" gapX="8px">
            <Button
                size="icon"
                variant="outlined"
                style={css`
                    width: 35px;
                    height: 35px;
                `}
                onClick={() => openUpdateDialog(row)}
            >
                <PencilIcon/>
            </Button>
            <Button
                size="icon"
                variant="outlined"
                style={css`
                    width: 35px;
                    height: 35px;
                `}
                onClick={() => confirmDelete(row.id)}
            >
                <Trash2Icon/>
            </Button>
        </Flex>
    );

    return (
        <Widget>
            <Widget.Header title="Tələbə Siyahısı">
                <Button variant="outlined" onClick={openInsertDialog}>Əlavə et</Button>
            </Widget.Header>
            <Widget.Content>
                <Table
                    columns={[
                        // {key: "select", title: "", render: _ => ""},
                        {key: "fullname", title: "Ad, Soyad", render: row => row.fullname},
                        {key: "email", title: "Email", render: row => row.email},
                        {key: "phone", title: "Əlaqə nömrəsi", render: row => row.phone},
                        {key: "gender", title: "Cins", render: row => Gender[row.gender as keyof typeof Gender]},
                        {key: "activity", title: "Status", render: row => StudentActivity[row.activity as keyof typeof StudentActivity]},
                    ]}
                    rows={students}
                    actions={tableActions}
                />
            </Widget.Content>
        </Widget>
    )
}