'use client';
import {css} from "@emotion/react";
import {ReactNode} from "react";

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
}

export default (props: TableProps) => {

    const renderNode = (column: TableColumn, row: TableRow) => {
        return column.render(row);
    }

    const columns = props.columns.map(col => (
        <th key={col.key}>{col.title}</th>
    ));

    if (props.actions) columns.push(<th key="actions-head"></th>)

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
}

export type TableRow = {
    id: string | number;
} & Record<string, any>;