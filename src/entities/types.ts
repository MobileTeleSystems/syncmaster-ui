export type BaseList = {
    type: string;
    title: string;
    element: JSX.Element;
};

export type RunBaseList = {
    type: string;
    title: string;
    element: JSX.Element;
    transferId: number;
};

export type BaseListColumns = {
    additionColumns?: JSX.Element;
};
