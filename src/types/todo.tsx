export interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
    deleteF: (id: string) => void;
    checkF: (id: string) => void;
}