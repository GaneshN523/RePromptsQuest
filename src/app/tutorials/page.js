import tutorialsData from "./data/tutorials.json";
import TutorialCard from "./components/TutorialCard";

export default function TutorialsPage() {
  return (
    <section>
      <h1>{tutorialsData.title}</h1>

      <p>{tutorialsData.description}</p>

      <div>
        {tutorialsData.tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.slug}
            tutorial={tutorial}
          />
        ))}
      </div>
    </section>
  );
}