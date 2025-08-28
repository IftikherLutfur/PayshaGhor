import { LoginForm } from "@/components/modules/Loginform";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Login Form Section */}
          <div className="">
            
            <LoginForm />
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <img
              src="https://specials-images.forbesimg.com/imageserve/5f7e003aa12e21a6ade608b1/960x0.jpg"
              alt="Login Banner"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
