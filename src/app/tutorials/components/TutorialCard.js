export default function TutorialCard({ tutorial }) {
  return (
    <article>
      <h2>{tutorial.title}</h2>

      <p>{tutorial.description}</p>

      <a href={`/tutorials/${tutorial.slug}`}>
        Read tutorial
      </a>
    </article>
  );
}