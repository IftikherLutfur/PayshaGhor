const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Welcome to <span className="font-semibold">Poysha Ghor</span>! We are a team of passionate developers and entrepreneurs committed to providing top-notch financial services. Our mission is to simplify online transactions and make finance accessible to everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2025, Poysha Ghor started with a simple goal: to create an easy-to-use platform for digital transactions. Over time, we’ve grown into a trusted service, helping thousands of users securely manage their finances online.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Iftikher Lutfur Abdullah</h3>
            <p className="text-gray-500">Founder & Developer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Jane Smith</h3>
            <p className="text-gray-500">Lead Designer</p>
          </div>
        </div>
      </div>
       <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
