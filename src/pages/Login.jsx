import  food from "..//assets/food.png";

const Login = () => {


    return (
        <main className="bg-orange-600 h-screen">
            <div className="flex rounded-lg justify-center">
                <img
                    src={food}
                    alt="logo"
                    className="md:h-3/4 py-10"
                />
            <section className="my-10 p-10 bg-white rounded-r-lg flex flex-col justify-center gap-5">
                <form
                    onSubmit={''}
                    className="flex flex-col items-center justify-center"
                >
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4 mb-6 md:mb-12">
                        <h1 className="text-orange-600 md:text-4xl text-2xl font-semibold">
                            Welcome Back
                        </h1>
                        <p className="text-black text-sm md:text-base font-normal">
                            Sign in to continue
                        </p>
                    </div>
                    <div className="w-full max-w-[30rem] grid grid-cols-1 gap-4">
                        <input
                            className="border-2 border-orange-600 rounded-lg"
                            label="Email"
                            name="email"
                            type="email"
                            register={''}
                            errors={''}
                            autoComplete="email"
                            placeholder="Email..."
                            id="email"
                        />
                        <input
                            className="border-2 border-orange-600 rounded-lg"
                            label="Password"
                            name="password"
                            type="password"
                            register={''}
                            errors={''}
                            placeholder="Password..."
                            id="current-password"
                            autoComplete="current-password"
                        />
                    </div>
                </form>
                    <button
                        className="w-full mt-6  bg-orange-600 px-3 text-white rounded-full"
                    >
                        Login
                    </button>
                    <div className="w-full  grid grid-cols-1 gap-4">
                        <h5 className="text-sm lg:text-xl font-medium">
                            Don{`'`}t have an Account?{" "}
                            <a className="text-gray-600 text-sm lg:text-xl font-bold" href="/signup">
                                Sign Up
                            </a>
                        </h5>
                    </div>
            </section>
            </div>
        </main>
    );
};

export default Login;