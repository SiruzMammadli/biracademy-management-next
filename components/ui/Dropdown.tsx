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

const DropdownContent = ({ children }: DropdownContentProps) => {
    const {isOpen} = useDropdownState();

    return isOpen ? (
        <div css={styles.dropdownContent._}>
            {children}
        </div>
    ) : null;
}

Dropdown.Content = DropdownContent;

const DropdownList = () => {
    return (
        <ul>

        </ul>
    )
}

Dropdown.List = DropdownList;

const styles = {
    dropdown: {
        _: css`position: relative;`
    },
    dropdownTrigger: {
        _:css`
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
            padding: 8px 12px;
            min-width: 200px;
            width: max-content;
        `,
    }
}