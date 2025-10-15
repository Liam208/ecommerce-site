import NavBar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <section class="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Have questions or need support? Reach out to our team and we'll get
            back to you as soon as possible.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
