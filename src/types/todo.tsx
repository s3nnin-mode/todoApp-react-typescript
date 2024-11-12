export interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
    f?: (id: number) => void;
}