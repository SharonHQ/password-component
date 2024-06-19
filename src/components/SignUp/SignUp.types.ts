export interface SignUpData {
    name: string;
    email: string;
    password: string;
}
export interface SignUpProps {
    onSubmit: (data: SignUpData) => void;
}