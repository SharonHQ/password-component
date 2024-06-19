import { useState } from "react";
import { SignUpData} from "./SignUp.types.ts";

const SignUp = ()=> {
    //Handle the form data
    const [formData, setFormData] = useState<SignUpData>({
        username: '',
        email: '',
        password: '',
    });

     //Handle changes in the form and update the state
     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
        <label htmlFor="username">
            Name
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
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