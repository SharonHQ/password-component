import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/validation.ts";
import { SignUpData, SignUpProps, SignUpErrors } from "./SignUp.types.ts";
import Form from "./Form.tsx";

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  //Handle the form data
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    password: "",
  });

  //Handle the error messages, there are optionals
  const [errors, setErrors] = useState<Partial<SignUpErrors>>({
    name: "",
    email: "",
    password: "",
  });

  //Handle changes in the form and update the state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //  handle form submission and validate if the form has errors set the errors else submit the form and reset the state
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password } = formData;

    const newErrors: Partial<SignUpErrors> = {};

    if (!name) newErrors.name = "Name is required";

    if (!email || !validateEmail(email))
      newErrors.email = "Valid email is required";
    
    if (Object.values(validatePassword(password)).some(value => !value)) {
      newErrors.password = "Invalid password";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  return (
    <Form handleSubmit={handleSubmit}
    formData={formData}
    handleChange={handleChange}
    errors={errors}
    />
  );
};

export default SignUp;
