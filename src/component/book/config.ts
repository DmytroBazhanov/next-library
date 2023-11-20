export interface IBook {
    id: string;
    author: string;
    tags: string;
    name: string;
    text?: string;
    isReserved?: boolean;
}
