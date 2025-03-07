'use client';
import Widget from "@/components/ui/Widget";
import Table, {TablePagination, type TableRow} from "@/components/ui/Table";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {http} from "@/lib/helpers/axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {Button, Flex} from "@/components/ui";
import {PencilIcon, Trash2Icon} from "lucide-react";
import {css} from "@emotion/react";
import {StudentTableInsertDialog, StudentTableUpdateDialog} from "@/components/students";
import {useDialog} from "@/src/providers/dialog";
import {Gender, StudentActivity} from "@/src/types/enums";
import {deleteStudent} from "@/app/(protected)/app/students/actions/delete-student";
import {useState} from "react";

export default () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(5);

    const {data, isLoading} = useQuery({
        queryKey: ['students', currentPage],
        queryFn: async () => {
            const res = await http.get(`/students?currentPage=${currentPage}&pageSize=${pageSize}`);
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

    if (isLoading) return null;

    const totalCount = Math.ceil(data.total_count / data.page_size);

    return (
        <Widget>
            <Widget.Header title="Tələbə Siyahısı">
                <Button onClick={openInsertDialog}>Əlavə et</Button>
            </Widget.Header>
            <Widget.Content>
                <Table
                    columns={[
                        // {key: "select", title: "", render: _ => ""},
                        {
                            key: "fullname",
                            title: "Ad, Soyad",
                            render: row => row.fullname
                        },
                        {
                            key: "email",
                            title: "Email",
                            render: row => row.email,
                            css: css`width: 300px;`
                        },
                        {
                            key: "phone",
                            title: "Əlaqə nömrəsi",
                            render: row => row.phone,
                            css: css`width: 200px;`
                        },
                        {
                            key: "gender",
                            title: "Cins",
                            render: row => Gender[row.gender as keyof typeof Gender],
                            css: css`width: 100px;`
                        },
                        {
                            key: "activity",
                            title: "Status",
                            render: row => StudentActivity[row.activity as keyof typeof StudentActivity],
                            css: css`width: 180px;`
                        },
                    ]}
                    rows={data.items}
                    actions={tableActions}
                />
                {totalCount > 1 ?
                    <TablePagination
                        current={data.page}
                        setCurrent={setCurrentPage}
                        total={totalCount}
                    />
                    : null}
            </Widget.Content>
        </Widget>
    )
}