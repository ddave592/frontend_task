import { FC, PropsWithChildren } from "react";

interface Props {
    title: string
    button?: JSX.Element
}

export const Section: FC<PropsWithChildren<Props>> = ({ title, button, children }) => {
    return (
        <div className="section">
            <div className="section-title-wrapper">
                <h2 className="section-title">{title}</h2>
                {button}
            </div>
            {children}
        </div>
    );
}
