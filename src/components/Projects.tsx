export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-lg">Project Title</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Short description of your project goes here.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded-lg">
          <h3 className="font-semibold text-lg">Project Title</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Short description of your project goes here.
          </p>
        </div>
      </div>
    </section>
  );
}
