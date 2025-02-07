'use client';
import {JSX, PropsWithChildren} from "react";
import {css, SerializedStyles} from "@emotion/react";

export default ({children, as: Element = 'div', style, ...props}: FlexProps) => {
    return (
        <Element css={[styles._(props), style]}>
            {children}
        </Element>
    )
}

type FlexProps = PropsWithChildren<Readonly<{
    as?: keyof JSX.IntrinsicElements,
    style?: SerializedStyles
} & FlexCSSProps>>;

type FlexCSSProps = {
    inline?: boolean;
    direction?: 'column' | 'row';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    shrink?: string;
    gapX?: string;
    gapY?: string;
};

const styles = {
    _: (
        {
            inline,
            direction,
            alignItems,
            justifyContent,
            gapX,
            gapY,
            shrink,
        }: FlexCSSProps
    ) => css`
        display: ${inline ? 'inline-flex' : 'flex'};
        flex-direction: ${direction === 'column' ? 'column' : undefined};
        align-items: ${alignItems ? alignItems : direction === 'column' ? 'stretch' : 'center'};
        justify-content: ${justifyContent};
        column-gap: ${gapX};
        row-gap: ${gapY};
        flex-shrink: ${shrink};
    `,
}