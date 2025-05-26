import '../App.css';
const Intern = import.meta.env.VITE_H3_INTERNSHIP;
const Description = import.meta.env.VITE_P_INTERNSHIP;

export default function Internship() {
  return (
    <section>
      <h2>Praktik</h2>

      <h3>{Intern} </h3>
      <p className='p_internship'>{Description}</p>
    </section>
  );
}
