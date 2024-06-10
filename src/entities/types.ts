export type BaseList = {
    type: string;
    title: string;
    element: JSX.Element;
};

export type RunBaseList = {
    type: string;
    element: JSX.Element;
    transferId: number;
    transferName: string;
};

export type BaseListColumns = {
    resource: string;
    additionColumns?: JSX.Element[];
    name?: string;
    isDeletable?: boolean;
};

export let BaseButtonStyle = {
    bgcolor: "background.paper",
    boxShadow: 1,
    borderRadius: 2,
    p: 1,
};
