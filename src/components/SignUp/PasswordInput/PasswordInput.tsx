import {useState} from 'react'
import PasswordErrors from './PasswordErrors';

const PasswordInput = ({formData, handleChange}) => {
// This state is used to show or hidden password on the form
const [showPassword, setShowPassword] = useState(false)

return (
    <div>
        <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-dark-gray">
            Password
            </label>
        </div>
    <div className="mt-2">
    <input
        id="hs-toggle-password-with-checkbox"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
        minLength={8}
        maxLength={16}
        value={formData.password}
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-light-purple placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
    />
    <div className="flex mt-2 justify-end">
        <input
        data-hs-toggle-password='{"target": "#hs-toggle-password-with-checkbox"}'
        id="hs-toggle-password-checkbox"
        type="checkbox"
        onChange={(e) => setShowPassword(e.target.checked)}
        className="shrink-0 mt-0.5 border-gray rounded text-gray focus:ring-purple checked:bg-purple"
        />
        <label
        htmlFor="hs-toggle-password-checkbox"
        className="text-sm text-gray ms-3"
        >
        Show password
        </label>
    </div>
    <div className="box-border mb-1.5 py-1.5 px-3 text-sm">
        <PasswordErrors formData={formData}/>
    </div>
    </div>
    </div>
    
);
};

export default PasswordInput