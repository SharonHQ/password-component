export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};
interface ValidatePassword {
    hasSpecialChar: boolean,
    hasDigit: boolean,
    hasUppercaseLetter: boolean,
    hasNoConsecutiveLetters: boolean,
}
export const validatePassword = (password: string): ValidatePassword => {
    const specialCharRegex = /[!@#$%^&*]/;
    const digitRegex = /\d/;
    const upperCaseLetterRegex = /[A-Z]/;
    const consecutiveLettersRegex = /([a-zA-Z])\1/;

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