'use client';
import {createContext, Dispatch, ElementType, PropsWithChildren, SetStateAction, useContext, useState} from "react";
import {css} from "@emotion/react";

type DropdownContextState = {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
const DropdownContext = createContext<DropdownContextState>({
    isOpen: false,
    setOpen: () => {
    },
});

const useDropdownState = () => {
    const context = useContext(DropdownContext);
    if (context === undefined) throw new Error('useDropdownState must be defined');
    return context;
}

export default function Dropdown({children}: PropsWithChildren) {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (
        <DropdownContext value={{
            isOpen,
            setOpen
        }}>
            <div css={styles.dropdown._}>
                {children}
            </div>
        </DropdownContext>
    )
}

type DropdownTriggerProps = PropsWithChildren<{
    as?: ElementType;
}>
const DropdownTrigger = ({children, as: Element = 'button'}: DropdownTriggerProps) => {
    const {setOpen} = useDropdownState();
    return (
        <Element css={styles.dropdownTrigger._} onClick={() => setOpen(prev => !prev)}>
            {children}
        </Element>
    )
}
Dropdown.Trigger = DropdownTrigger;

type DropdownContentProps = PropsWithChildren<{}>;

const DropdownContent = ({children}: DropdownContentProps) => {
    const {isOpen} = useDropdownState();

    return isOpen ? (
        <div css={styles.dropdownContent._}>
            {children}
        </div>
    ) : null;
}

Dropdown.Content = DropdownContent;

const DropdownItems = ({children}: PropsWithChildren) => {
    return (
        <ul>
            {children}
        </ul>
    )
}

Dropdown.Items = DropdownItems;

type DropdownItemProps = PropsWithChildren<{
    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}>;
const DropdownItem = ({children, ...props}: DropdownItemProps) => {
    return (
        <li
            css={styles.dropdownContent.item}
            onClick={props.onClick}
        >
            {children}
        </li>
    )
}

Dropdown.Item = DropdownItem;

const DropdownDivider = () => <hr css={styles.dropdownContent.divider}/>
Dropdown.Divider = DropdownDivider;

const styles = {
    dropdown: {
        _: css`position: relative;`
    },
    dropdownTrigger: {
        _: css`
            width: 100%;
        `,
    },
    dropdownContent: {
        _: css`
            position: absolute;
            bottom: calc(100% + 5px);
            right: 0;
            background-color: white;
            z-index: 100;
            border: var(--border-template);
            border-radius: 8px;
            min-width: 200px;
            width: max-content;
        `,
        item: css`
            button {
                width: 100%;
                padding: 10px 12px;
                cursor: pointer;
            }
        `,
        divider: css`
            border: 1px solid var(--border-color);
        `,
    }
}