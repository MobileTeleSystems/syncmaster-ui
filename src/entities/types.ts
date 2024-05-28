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
    additionColumns?: JSX.Element;
};
