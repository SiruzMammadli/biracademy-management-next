'use client';
import {css} from "@emotion/react";
import profileImg from "@/public/images/pro_pic-min.jpg";
import {ChevronsUpDownIcon, LogOutIcon} from "lucide-react";
import {Flex} from "@/components/ui";
import Dropdown from "@/components/ui/Dropdown";
import {signout} from "@/app/(auth)/_signout/actions";
import {useActionState} from "react";
import {useAuth} from "@/src/providers/auth";

export default () => {
    const [_, action] = useActionState(signout, null);
    const auth = useAuth();
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <Flex
                    justifyContent="space-between"
                    style={styles._}
                >
                    <Flex
                        inline
                        gapX="12px"
                    >
                        <div
                            css={styles.img}
                        >
                            <Flex as="span" justifyContent="center">SM</Flex>
                            {/*<Image*/}
                            {/*    src={profileImg}*/}
                            {/*    alt="profile_photo"*/}
                            {/*/>*/}
                        </div>
                        <div>
                            {auth?.user?.fullname}
                        </div>
                    </Flex>
                    <ChevronsUpDownIcon css={styles.icon}/>
                </Flex>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Items>
                    <Dropdown.Item>
                        <form action={action}>
                            <Flex as="button" gapX="8px">
                                <LogOutIcon css={css`width: 16px;height: 16px;`}/>
                                <span>Hesabdan çıx</span>
                            </Flex>
                        </form>
                    </Dropdown.Item>
                </Dropdown.Items>
            </Dropdown.Content>
        </Dropdown>
    )
}

const styles = {
    _: css`
        cursor: pointer;
        user-select: none;
        padding: 8px 12px;
        border-radius: 8px;
        height: 45px;
        transition-duration: 150ms;
        transition-property: color, background-color;

        :hover {
            background-color: rgb(var(--slate-200));
        }
    `,
    img: css`
        width: 27px;
        height: 27px;
        object-fit: cover;
        border-radius: 100%;
        outline: 2px solid rgb(var(--slate-500));
        outline-offset: 2px;

        > * {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
        
        > span {
            font-size: 12px;
            font-weight: 400;
            background-color: rgb(var(--slate-500));
            color: white;
        }

        > img {
            object-fit: cover;
        }
    `,
    icon: css`
        width: 14px;
        height: 14px;
        color: rgb(var(--slate-500));
    `,
}