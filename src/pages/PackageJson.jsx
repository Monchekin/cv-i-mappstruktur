const name = import.meta.env.VITE_NAMN;
const name2 = import.meta.env.VITE_NAMN2;

export default function PackageJson() {
  return (
    <section>
      <h2>package.json</h2>
      <pre>{`{
  "name": "${name2}",
  "version": "1.0.0",
  "description": "Frontendutvecklare med passion för tillgänglighet och användarvänlig design.",
  "main": "src/App.jsx",
  "scripts": {
    "start": "utveckla med hjärta",
    "build": "bygga för användbarhet"
  },
  "keywords": [
    "frontend",
    "tillgänglighet",
    "React",
    "kognitiv design"
  ],
  "author": "${name}",
  "license": "MIT"
}`}</pre>
    </section>
  );
}
