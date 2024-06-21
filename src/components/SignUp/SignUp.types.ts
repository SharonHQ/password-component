export interface SignUpData {
    name: string;
    email: string;
    password: string;
}
export interface SignUpProps {
    onSubmit: (data: SignUpData) => void;
}

export interface PasswordErrors {
    empty: string;
    hasSpecialChar: string;
    hasDigit: string;
    hasUppercaseLetter: string;
    hasNoConsecutiveLetters: string;
} 

export interface SignUpErrors {
    name: string;
    email: string;
    password: Partial<PasswordErrors> | undefined;
}