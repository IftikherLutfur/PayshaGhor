const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-16 px-4 sm:px-6 lg:px-8">
      
      {/* About Section */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          About Poysha Ghor
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed text-center">
          <span className="font-semibold">Poysha Ghor</span> is your trusted digital finance solution. 
          We aim to make money transfers, payments and online financial services easier, faster, and more secure for everyone in Bangladesh.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and businesses by providing a seamless 
              financial experience through innovative and secure digital solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted digital finance platform that connects 
              people with smarter financial services anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Security", "Innovation", "Transparency", "Customer Success"].map((value) => (
            <span
              key={value}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {value}
            </span>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-bold text-lg">Iftikher Lutfur Abdullah</h3>
            <p className="text-gray-500">Founder & Full-Stack Developer</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-bold text-lg">John Doe</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="font-bold text-lg">Jane Smith</h3>
            <p className="text-gray-500">Lead UX/UI Designer</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full max-w-5xl mt-10">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-start">
            <details className="border rounded-lg">
              <summary className="px-4 py-6 cursor-pointer font-medium text-gray-800">
                What is Poysha Ghor?
              </summary>
              <p className="px-4 pb-6 text-gray-600">
                Poysha Ghor is a digital finance platform designed to simplify online payments and money transfers securely across Bangladesh.
              </p>
            </details>

            <details className="border rounded-lg">
              <summary className="px-4 py-6 cursor-pointer font-medium text-gray-800">
                Is my information secure?
              </summary>
              <p className="px-4 pb-6 text-gray-600">
                Yes! We use advanced encryption and industry standards to ensure your data and digital transactions remain safe.
              </p>
            </details>

            <details className="border rounded-lg">
              <summary className="px-4 py-6 cursor-pointer font-medium text-gray-800">
                How can I contact support?
              </summary>
              <p className="px-4 pb-6 text-gray-600">
                You can reach our support team anytime from the Contact page. We’re always here to help!
              </p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
