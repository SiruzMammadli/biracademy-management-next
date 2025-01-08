'use client'
import {css} from "@emotion/react";

const styles = {
    _: ({size, color, strokeWidth}: SpinnerProps) => css`
        width: ${size ?? 40}px;
        height: ${size ?? 40}px;
        animation: rotateSpinner 2s linear infinite;
        object-fit: contain;

        circle {
            stroke: ${color === "light" ? 'white' : color === "dark" ? "rgb(var(--slate-500))" : undefined};
            stroke-width: ${strokeWidth ? strokeWidth : 100 / (20 * (size ? size / 100 : 1))}px;
            animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotateSpinner {
            100% {
                rotate: 1turn;
            }
        }
        @keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }
            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }
            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
    `
}


export default ({size, strokeWidth, color = "dark"}: SpinnerProps) => (
    <svg viewBox="0 0 100 100" css={[styles._({size, color, strokeWidth})]}>
        <circle fill="none" cx="50" cy="50" r="20"></circle>
    </svg>
)


type SpinnerProps = {
    size?: number,
    strokeWidth?: number,
    color?: "light" | "dark";
}