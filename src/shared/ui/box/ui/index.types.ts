import { ReactNode } from "react";

export type BoxProps = {
    title?: string;
    subTitle?: string;
    description?: string;
    styled?: BoxStyledProps;
    children: ReactNode;
    actions?: Actions;
}

export type BoxStyledProps = {
    width?: string;
    height?: string;
}

export type Actions = {
    cancelTitle?: string;
    cancelFunction?: () => void;
    submitTitle?: string;
    submitFunction?: () => void;
    isDisabledSubmit?: boolean;
}