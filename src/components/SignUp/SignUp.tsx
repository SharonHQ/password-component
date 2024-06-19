const SignUp = ()=> {
    return (
        <form>
        <label htmlFor="username">
            Name
        <input
            type="text"
            name="username"
            placeholder="Username"
        />
        </label>
        <label htmlFor="email">
            Email
        <input
            type="email"
            name="email"
            placeholder="Email"
        />
        </label>
        <label htmlFor="password">
            Password
        <input
            type="password"
            name="password"
            placeholder="Password"
        />
        </label>
        <button type="submit">Register</button>
    </form>
    )
}

export default SignUp