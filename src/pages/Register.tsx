import loginPhoto from "../assets/Registration.png"
import { RegisterForm } from "@/components/modules/Register";

const Register = () => {
  return (
   <div className="min-h-screen bg-gradient-to-t from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
  <section className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
    
    {/* Image Section */}
    <div className="flex items-center justify-center bg-blue-400/80 p-6 lg:p-10">
      <img
        src={loginPhoto}
        alt="Registration Banner"
        className="w-full max-w-md rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Form Section */}
    <div className="flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-md ">
        <RegisterForm />
      </div>
    </div>
  </section>
</div>


  );
};

export default Register;
