'use client';
import {css} from "@emotion/react";
import profileImg from "@/public/images/pro_pic-min.jpg";
import {ChevronsUpDownIcon} from "lucide-react";
import Image from "next/image";
import {Flex} from "@/components/ui";
import Skeleton from "react-loading-skeleton";
import Dropdown from "@/components/ui/Dropdown";

export default () => {
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
                        <Image
                            css={styles.img}
                            src={profileImg}
                            alt=""
                        />
                        <div>
                            {/*{"Siruz Mammadli" ||*/}
                            {/*    <Skeleton baseColor="rgb(var(--slate-200))" width="150px" height="18px"/>}*/}
                            Siruz Mammadli
                        </div>
                    </Flex>
                    <ChevronsUpDownIcon css={styles.icon}/>
                </Flex>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <ul>
                    <li>
                        <button>
                            Hesabdan çıx
                        </button>
                    </li>
                </ul>
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
    `,
    icon: css`
        width: 14px;
        height: 14px;
        color: rgb(var(--slate-500));
    `,
}