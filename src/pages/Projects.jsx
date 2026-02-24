export default function Projects() {
    // Mock data for your KCSE projects
    const projectList = [
        { id: 1, title: "Revision Hub", desc: "Past papers and marking schemes." },
        { id: 2, title: "Grade Predictor", desc: "Calculate your mean grade instantly." },
        { id: 3, title: "Study Timer", desc: "Pomodoro timer for intensive sessions." }
    ];

    return (
        <div className="projects">
            <h1>Our KCSE 2026 Projects</h1>
            <div className="project-grid">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};