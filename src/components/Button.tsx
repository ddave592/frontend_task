import clsx from "clsx";
import { MouseEvent } from "react";
import { FC } from "react";

interface Props {
    text: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
    variant?: 'outline' | 'link'
}

export const Button: FC<Props> = ({ text, onClick, variant }) => {
    const classes = clsx('button', {
        'button-outline': variant === 'outline',
        'button-link': variant === 'link'
    })
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            event.preventDefault()
            onClick(event)
        }
    }

    return (
        <button className={classes} onClick={handleClick}>
            {text}
        </button>
    );
}
