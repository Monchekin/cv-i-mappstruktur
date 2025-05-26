export default function Readme() {
  return (
    <section>
      <div className='code-block'>
        <h2 className='h2_ReadMe'>README.md</h2>
        {`# 📁 CV i mappstruktur

Det här är ett frontendprojekt byggt med React, där mitt CV presenteras som ett interaktivt filsystem – liknande hur det ser ut i en kodredigerare som VS Code.

## 🔧 Tekniker som använts

- React 19 (Client Components)
- Vite
- CSS (mörkt tema, responsiv design)
- Tillgänglighetsanpassning enligt WCAG 2.1
- PDF-nedladdning via <a download>

## 📝 Syfte

Syftet med detta projekt är att visa upp mitt CV på ett kreativt och utvecklarnördigt sätt – med struktur, tillgänglighet och återanvändbar kod i fokus.

## ♿ Tillgänglighet

Projektet är byggt med fokus på:
- Semantisk HTML
- Tabb-navigering
- Visuell hierarki
- Minimala kognitiva krav`}
      </div>
    </section>
  );
}
