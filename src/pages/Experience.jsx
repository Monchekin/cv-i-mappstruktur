const Work1 = import.meta.env.VITE_H3_EXPERIENCE1;
const Work2 = import.meta.env.VITE_H3_EXPERIENCE2;
const Work3 = import.meta.env.VITE_H3_EXPERIENCE3;
const Work4 = import.meta.env.VITE_H3_EXPERIENCE4;

const Description1 = import.meta.env.VITE_P_EXPERIENCE1;
const Description2 = import.meta.env.VITE_P_EXPERIENCE2;
const Description3 = import.meta.env.VITE_P_EXPERIENCE3;
const Description4 = import.meta.env.VITE_P_EXPERIENCE4;


export default function Experience() {
  return (
    <section>
      <h2>Arbetslivserfarenhet</h2>
      <ul>
        <li className='li_experience'>
          <h3 className='h3_experience'>{Work1}</h3>{' '}
          <p className='p_experience'>{Description1}</p>
        </li>

        <li className='li_experience'>
          <h3 className='h3_experience'>{Work2}</h3>{' '}
          <p className='p_experience'>{Description2}</p>
        </li>

        <li className='li_experience'>
          <h3 className='h3_experience'>{Work3}</h3>
          <p className='p_experience'>{Description3}</p>
        </li>

        <li className='li_experience'>
          <h3 className='h3_experience'>{Work4}</h3>{' '}
          <p className='p_experience'>{Description4}</p>
        </li>
      </ul>
    </section>
  );
}
