const {validatePassword} = require('./validation');

describe('validatePassword', () => {
    test('should return all true for a valid password', () => {
        const password = 'A1!b2@c3#';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: true,
            hasDigit: true,
            hasUppercaseLetter: true,
            hasNoConsecutiveLetters: true,
        });
    });

    test('should return false for missing special character', () => {
        const password = 'A1b2c3d4';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: false,
            hasDigit: true,
            hasUppercaseLetter: true,
            hasNoConsecutiveLetters: true,
        });
    });

    test('should return false for missing digit', () => {
        const password = 'Abcdef!';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: true,
            hasDigit: false,
            hasUppercaseLetter: true,
            hasNoConsecutiveLetters: true,
        });
    });

    test('should return false for missing uppercase letter', () => {
        const password = 'abcdef1!';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: true,
            hasDigit: true,
            hasUppercaseLetter: false,
            hasNoConsecutiveLetters: true,
        });
    });

    test('should return false for consecutive letters', () => {
        const password = 'A1!!bb';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: true,
            hasDigit: true,
            hasUppercaseLetter: true,
            hasNoConsecutiveLetters: false,
        });
    });

    test('should return false for all conditions not met', () => {
        const password = 'aaa';
        const result = validatePassword(password);
        expect(result).toEqual({
            hasSpecialChar: false,
            hasDigit: false,
            hasUppercaseLetter: false,
            hasNoConsecutiveLetters: false,
        });
    });
});
