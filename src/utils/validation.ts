import { ValidatePassword } from "./Validation.types";

// This function is validating the email address with regex
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// This function is validating the password and all requirements with regexs
export const validatePassword = (password: string): ValidatePassword => {
    const specialCharRegex = /[!@#$%^&*]/;
    const digitRegex = /\d/;
    const upperCaseLetterRegex = /[A-Z]/;
    const consecutiveLettersRegex = /([a-zA-Z])\1/i;

    const hasSpecialChar= specialCharRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasUppercaseLetter = upperCaseLetterRegex.test(password);
    const hasNoConsecutiveLetters = !consecutiveLettersRegex.test(password);

    return {
        hasSpecialChar,
        hasDigit,
        hasUppercaseLetter,
        hasNoConsecutiveLetters,
    }
};