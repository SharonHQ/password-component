import { useState } from "react";
import { validateEmail } from '../../utils/validation.ts';
import { SignUpData, SignUpProps} from "./SignUp.types.ts";

const SignUp: React.FC<SignUpProps> = ({onSubmit})=> {
    //Handle the form data
    const [formData, setFormData] = useState<SignUpData>({
        name: '',
        email: '',
        password: '',
    });

     //Handle the error messages, there are optionals
    const [errors, setErrors] = useState<Partial<SignUpData>>({});
    console.error(errors);

     //Handle changes in the form and update the state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email } = formData;

        const newErrors: Partial<SignUpData> = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email || !validateEmail(email)) newErrors.email = 'Valid email is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit(formData);
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
        />
        </label>
        <label htmlFor="email">
            Email
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
        />
        </label>
        <label htmlFor="password">
            Password
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
        />
        </label>
        <button type="submit">Register</button>
    </form>
    )
}

export default SignUp