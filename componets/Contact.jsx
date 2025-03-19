export default function Contact() {
    return (
      <section className="py-16 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto mt-6 bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full p-4 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full p-4 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full p-4 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }