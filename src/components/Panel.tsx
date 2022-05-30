import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface Props {
    columns?: 2
}


export const Panel: FC<PropsWithChildren<Props>> = ({ children, columns }) => {
    const classes = clsx('panel', {
        'panel-two-columns': columns === 2
    })

    return (
        <div className={classes}>
            {children}
        </div>
    );
}
