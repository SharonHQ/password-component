export interface SignUpData {
    name: string;
    email: string;
    password: string;
}
export interface SignUpProps {
    onSubmit: (data: SignUpData) => void;
}

export interface PasswordErrors {
    hasSpecialChar: string;
    hasDigit: string;
    hasUppercaseLetter: string;
    hasNoConsecutiveLetters: string;
} 

export interface SignUpErrors {
    name: string;
    email: string;
    password: string;
}

export interface FormProps {
    handleSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void,
    formData: SignUpData,
    handleChange: (e: React.FormEvent) => void,
    errors: Partial<SignUpErrors>
}