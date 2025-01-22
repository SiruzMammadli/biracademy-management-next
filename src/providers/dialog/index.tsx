'use client';
import {ElementType, Fragment} from "react";
import {create} from "zustand/react";
import {css} from "@emotion/react";

interface IDialog {
    id: string;
    element: ElementType;
    props?: Record<string, any>;
    options?: Record<string, any>;
}

export type DialogProps = {
    onClose?: () => void;
} & Record<string, any>

type DialogState = {
    dialogs: IDialog[],
    set: (params: IDialog) => void;
    drop: (id: string) => void;
}

export const dialogState = create<DialogState>((set) => ({
    dialogs: [],
    set: (dialog) => set((state: DialogState) => ({
        dialogs: [...state.dialogs, {...dialog}]
    })),
    drop: (id: string) => set((state: DialogState) => ({
        dialogs: state.dialogs.filter((dialog: IDialog) => dialog.id !== id)
    }))
}));

export const useDialog = () => {
    const setDialog = dialogState(state => state.set);
    const dropDialog = dialogState(state => state.drop);

    const close = (id: string) => dropDialog(id);

    const open = (element: ElementType, props?: DialogProps, options?: Record<string, any>) => {
        const id: string = Math.random().toString(16).substring(5);
        const _props = {
            ...props,
            onClose: () => close(id),
        }
        setDialog({id, element, props: _props, options});

        return id;
    }

    return {open};
}

export default function DialogProvider() {
    const dialogs = dialogState(state => state.dialogs);
    return dialogs.map((dialog, index) => (
        <Fragment key={dialog.id}>
            <dialog.element {...dialog.props} css={css`z-index: ${1000 + (10 * index)}`}/>
        </Fragment>
    ))
}