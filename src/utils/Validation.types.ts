export interface ValidatePassword {
    hasSpecialChar: boolean,
    hasDigit: boolean,
    hasUppercaseLetter: boolean,
    hasNoConsecutiveLetters: boolean,
}