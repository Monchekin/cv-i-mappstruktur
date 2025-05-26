const Description = import.meta.env.VITE_ABOUTEME;

export default function AboutMe() {
  return (
    <section>
      <h2>Om mig</h2>
      <p>{Description}</p>
    </section>
  );
}
