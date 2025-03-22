export default function Hero() {
  const projects = [
    {
      id: 1,
      title: "WAI ARIA",
      img: "wai-aria.png",
      desc: "This is my project about inserting Wai aria user friendly!!.",
      link: "https://github.com/MouzB/WAI_ARIA",
    },
    {
      id: 2,
      title: "Amazon Quiz",
      img: "Amazonquiz.jpeg",
      desc: "Play Amazon Quiz: Challenge yourself with questions about Academy Award winners, iconic moments, and cinematic history",
      link: "https://github.com/MouzB/Amazon-oscars25Quiz",
    },
  ];

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Hi, I&apos;m <br></br> Mohamed Bulhan
            </span>
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            A beginner developer learning and growing by building fun projects.
          </p>
          <div>
            <a
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 hover:opacity-80 text-white"
            >
              See My Work
            </a>
          </div>
        </div>

        <div className="col-span-5 flex justify-center sm:justify-end">
          <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex items-center justify-center">
            <img
              src="/hero-img.png"
              alt="Hero image of Mohamed Bulhan"
              className="w-full h-full object-cover"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-gray-100">
        <div className="flex justify-center mb-12">
          <div className="bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold text-center">See My Work</h2>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-12">
          My Projects
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-white shadow-lg rounded-lg w-80"
            >
              <img
                src={project.img}
                alt={`Preview of ${project.title} project`}
                className="rounded-t-lg"
              />
              <div className="card-body p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-blue-900 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
