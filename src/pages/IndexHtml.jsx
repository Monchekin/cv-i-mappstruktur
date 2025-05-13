export default function IndexHtml() {
  return (
    <section>
      <h2>index.html</h2>
      <div className='code-content'>
        <pre>{`
  <!DOCTYPE html>
  <html lang="sv">
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content="Lina Barthelsons digitala CV som mappstruktur." />
      <meta name="author" content="Lina Barthelson" />
      <title>Lina Barthelson – Frontendutvecklare</title>
    </head>
    <body>
     <h1>Välkommen till mitt CV i mappstruktursform</h1>
    <p>
      Det här är en interaktiv presentation av mig, Lina Barthelson.  
      Du kan klicka dig igenom mappstrukturen för att läsa mer om  
      min erfarenhet, kompetens och utbildning.  
      Du kan även ladda ner mitt faktiska CV som PDF.
    </p>

    </body>
  </html>`}</pre>
      </div>
    </section>
  );
}
