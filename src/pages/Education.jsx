const Description1 = import.meta.env.VITE_H3_EDUCATION1;
const Description2 = import.meta.env.VITE_H3_EDUCATION2;
const Description3 = import.meta.env.VITE_H3_EDUCATION3;

const Year1 = import.meta.env.VITE_P_EDUCATION1;
const Year2 = import.meta.env.VITE_P_EDUCATION2;
const Year3 = import.meta.env.VITE_P_EDUCATION3;

export default function Education() {
  return (
    <section>
      <h2>Utbildning</h2>
      <ul>
        <li className='li_education'>
          <h3 className='h3_education '>{Description1}</h3>
        </li>
        <p className='p_education'>{Year1}</p>

        <li className='li_education'>
          <h3 className='h3_education '>{Description2}</h3>
        </li>
        <p className='p_education'> {Year2}</p>

        <li className='li_education'>
          <h3 className='h3_education '>{Description3}</h3>
        </li>
        <p className='p_education'>{Year3}</p>
      </ul>
    </section>
  );
}
