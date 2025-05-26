const name = import.meta.env.VITE_NAMN;
const email = import.meta.env.VITE_EMAIL;
const location = import.meta.env.VITE_LOCATION;

export default function ContactConfig() {
  return (
    <section>
      <h2>contact.config.js</h2>
      <pre>{`
      export const contact = {
      name: "${name}",
      email: "${email}",
      location: "${location}"
};`}</pre>

      <p>
        🔗{' '}
        <a
          href='https://www.linkedin.com/in/lina-barthelson-018741183/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
