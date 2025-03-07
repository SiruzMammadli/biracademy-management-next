'use client';
import {css, SerializedStyles} from "@emotion/react";
import {ReactNode} from "react";
import Flex from "@/components/ui/Flex";
import {Button} from "@/components/ui/index";

const styles = {
    table: css`
        width: 100%;
        border-collapse: collapse;
    `,
    tableHead: css`
        > tr {
            background-color: rgb(var(--slate-50));
            outline: var(--border-template);
            border-radius: 6px;

            > th {
                padding: 8px 16px;
                color: rgb(var(--slate-500));
                text-align: left;
            }
        }
    `,
    tableBody: css`
        > tr {
            border-bottom: 1px solid var(--border-color);

            > td {
                padding: 16px;
            }
        }
    `,
    paginationContainer: css`
        padding-top: 12px;
    `
}

export default (props: TableProps) => {

    const renderNode = (column: TableColumn, row: TableRow) => {
        return column.render(row);
    }

    const columns = props.columns.map(col => (
        <th key={col.key} css={col.css}>{col.title}</th>
    ));

    if (props.actions) columns.push(<th key="actions-head" css={css`width: 120px;`}></th>)

    const getRows = (rows: TableProps["rows"], columns: TableProps["columns"]) => {
        const newRows: Set<ReactNode> = new Set();
        for (const row of new Set(rows)) {
            const children: Set<ReactNode> = new Set();
            for (const column of new Set(columns)) {
                children.add(<td key={column.key}>{renderNode(column, row)}</td>);
            }
            if (props.actions) children.add(<td key="actions">
                {props.actions(row)}
            </td>);
            newRows.add(<tr key={row.id}>
                {children}
            </tr>);
        }
        return newRows;
    }

    return (
        <table css={styles.table}>
            <thead css={styles.tableHead}>
            <tr>
                {columns}
            </tr>
            </thead>
            <tbody css={styles.tableBody}>
            {getRows(props.rows, props.columns)}
            </tbody>
        </table>
    )
}

type TableProps = {
    columns: Array<TableColumn>;
    rows: Array<TableRow>;
    actions?: (row: TableRow) => ReactNode;
}

type TableColumn = {
    key: string;
    title: string;
    render: (row: TableRow) => any;
    css?: SerializedStyles;
}

export type TableRow = {
    id: string | number;
} & Record<string, any>;

export const TablePagination = (
    {
        current,
        total,
        ...props
    }: {
        current: number;
        total: number;
        setCurrent: React.Dispatch<React.SetStateAction<number>>;
    }
) => {
    const generatePages = () => {
        const pages: (number | string)[] = [];
        if (total <= 5) for (let i = 1; i <= total; i++) pages.push(i);
        else {
            if (current <= 3) pages.push(1, 2, 3, 4, 5, '...', total);
            else if (current >= total - 2) pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total);
            else pages.push(1, '...', current - 1, current, current + 1, '...', total);
        }
        return pages;
    };

    const pagesList = generatePages();

    const disabledButtonStyle =
        (condition: boolean) => condition ? `pointer-events: none; opacity: .5;` : null;

    return (
        <Flex
            justifyContent="flex-end"
            style={styles.paginationContainer}
            gapX="12px"
        >
            <Button
                width="max-content"
                style={css`
                    height: 35px;
                    ${disabledButtonStyle(current === 1)}
                `}
                onClick={() => props.setCurrent(state => state > 1 ? state - 1 : state)}
            >
                Əvvəlki
            </Button>
            <Flex as="ul" gapX="6px">
                {pagesList.map((val, key) => (
                    <Flex as="li" inline key={key}>
                        <Button
                            style={css`
                                width: 35px;
                                height: 35px;
                                ${disabledButtonStyle(current === val)}
                            `}
                            onClick={typeof val === "number" ? () => props.setCurrent(val) : undefined}
                        >
                            {val}
                        </Button>
                    </Flex>
                ))}
            </Flex>
            <Button
                width="max-content"
                style={css`
                    height: 35px;
                    ${disabledButtonStyle(current === total)}
                `}
                onClick={() => props.setCurrent(state => state < total ? state + 1 : state)}
            >
                Sonrakı
            </Button>
        </Flex>
    )
}