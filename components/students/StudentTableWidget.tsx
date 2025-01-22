'use client';
import Widget from "@/components/ui/Widget";
import Table, {type TableRow} from "@/components/ui/Table";
import {useQuery} from "@tanstack/react-query";
import {http} from "@/lib/helpers/axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {Button} from "@/components/ui";
import {EllipsisVerticalIcon, PencilIcon} from "lucide-react";
import Flex from "@/components/ui/Flex";
import {css} from "@emotion/react";
import {StudentTableUpdateDialog} from "@/components/students";
import {useDialog} from "@/src/providers/dialog";
import {Gender, StudentActivity} from "@/src/types/enums";

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

    const openDialog = (props: TableRow) => {
        dialog.open(StudentTableUpdateDialog, props)
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
                onClick={() => openDialog(row)}
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
            >
                <EllipsisVerticalIcon/>
            </Button>
        </Flex>
    );

    return (
        <Widget>
            <Widget.Header title="İşçi Siyahısı"/>
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