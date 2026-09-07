import homeData from "../data/home.json";

export default function Hero() {
  return (
    <section>
      <h1>{homeData.title}</h1>

      <p>{homeData.description}</p>
    </section>
  );
}