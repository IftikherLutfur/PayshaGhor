import { RegisterForm } from "@/components/modules/Register";

const Register = () => {
    return (
        <div className="bg-gray-300">
            <section className="p-6 dark:bg-gray-300 dark:text-gray-800">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <RegisterForm/>
                    </div>
                    <img src="https://specials-images.forbesimg.com/imageserve/5f7e003aa12e21a6ade608b1/960x0.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Register;