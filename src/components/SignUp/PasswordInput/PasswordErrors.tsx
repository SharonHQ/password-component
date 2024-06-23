import { validatePassword } from "../../../utils/validation";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

//Object with properties for validation password and message
const typesErrorPassword = {
hasDigit: "Has number 0-9",
hasSpecialChar: "Has special char !@#$%^&*",
hasUppercaseLetter: "Has uppercase letter",
hasNoConsecutiveLetters: "Has no consecutive letter",
};

// This function show all of the requirements and show colors depending if it's check (green) or bad(red) with their icons
const PasswordErrors = ({ formData }) => {
    
if (formData.password) {
    const errorsPassword = validatePassword(formData.password);
    return Object.keys(typesErrorPassword).map((typeError) => {
    const passwordReqsOk = errorsPassword[typeError];
    return (
        <div
        style={passwordReqsOk ? { color: "#72CB3B" } : { color: "#FF4444" }}
        key={typeError}
        >
        {passwordReqsOk ? (
            <CheckCircleOutlineIcon fontSize="small" />
        ) : (
            <HighlightOffIcon fontSize="small" />
        )}{" "}
        {typesErrorPassword[typeError]}
        </div>
    );
    });
}
};

export default PasswordErrors;
