import { Link as RouterLink} from "react-router-dom";

const SignUp = () => {
    
    return (
        <main className="bg-orange-600 h-screen text-white flex flex-col">
            <section className="left-section">
                <div className="imgg">
                    <div className="vector"></div>
                </div>
            </section>
            <form onSubmit={''} className="mx-auto w-[90%] max-w-[60rem] mt-8">
                <div className="hdngs">
                    <h2>WELCOME TO WECHORA FOODS</h2>
                    <p>Register your account</p>
                </div>
                <input
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Name..."
                />
                <input
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Username..."
                />
                <input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email..."
                />
                {/* container for passwords */}
                <div className="w-full flex flex-col md:flex-row justify-between gap-[5%] items-center">
                    <div className="w-full">
                        <input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Password..."
                            id="new-password"
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            label=" Confirm Password"
                            name="confirm_password"
                            type="password"
                            autoComplete="new-password"
                            placeholder="Confirm Password..."
                            id="new_password"
                        />
                    </div>
                </div>
                <button >
                    Sign Up
                </button>{" "}
                <h5 className="mb-8">
                    Have an Account?
                    <RouterLink to="/login">
                        {" "}
                        <span>Login</span>
                    </RouterLink>
                </h5>
            </form>
        </main>
    );
};

export default SignUp;