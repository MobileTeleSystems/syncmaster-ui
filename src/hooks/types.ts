export type Group = {
    id: number;
    name: string;
    description: string;
    ownerId: number;
};

export type GroupSelectorElement = {
    label: string;
    id?: number;
};
