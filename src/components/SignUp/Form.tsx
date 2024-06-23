import { FormProps } from "./SignUp.types";
import logo from "../../assets/images/logo-qventus.svg";
import PasswordInput from "./PasswordInput/PasswordInput";

const Form: React.FC<FormProps> = ({
  handleSubmit,
  formData,
  handleChange
}) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logo}
          alt="Qventus, Inc. Logo"
        />
        <h5 className="mt-10 text-light-gray">
          Welcome{formData.name && " " + formData.name}!
        </h5>
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-dark-gray">
          Create your account
        </h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-dark-gray"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-light-purple placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-dark-gray"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-dark-gray shadow-sm ring-1 ring-inset ring-light-purple placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <PasswordInput formData={formData} handleChange={handleChange}/>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-dark-purple px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                {" "}
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
