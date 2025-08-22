import { Logo } from "@/assets/logo";

const Footer = () => {
    return (
       <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-start items-center lg:gap-8">
     <Logo/>
     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed dolorum vero veritatis laudantium error iste reiciendis! Cupiditate, quo quidem! Eligendi repellat porro ipsum. Exercitationem veniam iure atque dignissimos quo.</h1>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-8">
      <div className="sm:flex sm:justify-between">
        <p className="text-xs text-gray-500">&copy; 2025. Company Name. All rights reserved.</p>

        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;