const name = import.meta.env.VITE_NAMN;

export default function AppInfo() {
  return (
    <section>
      <h2>App.jsx</h2>
      <p>
        <strong>{name}</strong>
        <br />
        Frontendutvecklare med fokus på tillgänglighet, användbarhet och
        samspelet mellan människan och teknik.
      </p>
    </section>
  );
}
