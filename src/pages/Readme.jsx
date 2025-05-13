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

## 🗂️ Projektstruktur

/public
  └ Lina_Barthelson-CV.pdf                # PDF för nedladdning
/src
 ┣ /components                            # Återanvändbara UI-komponenter
 ┃  ┣ AboutMe.jsx                         # Beskriver mig som utvecklare
 ┃  ┣ Skills.jsx                          # Tekniker och kompetens
 ┃  ┣ Languages.jsx                       # Språkkunskaper
 ┃  ┣ Interests.jsx                       # Personliga intressen
 ┃  ┣ References.jsx                      # Referensinfo
 ┃  ┣ FolderStructure.jsx                 # Dynamiskt träd för navigation
 ┃  ┗ DownloadCV.jsx                      # Knapp för att ladda ner PDF
 ┣ /pages                                 # Informationsfiler som visas i trädet
 ┃  ┣ Education.jsx                       # Min utbildningsbakgrund
 ┃  ┣ Experience.jsx                      # Arbetslivserfarenhet
 ┃  ┣ Internship.jsx                      # Praktikplats på Begripsam
 ┃  ┣ App.jsx                             # Intro/översikt över mig själv
 ┃  ┣ ContactConfig.jsx                   # Kontaktinformation i kodform
 ┃  ┣ PackageJson.jsx                     # "npm-paket"-beskrivning av mig
 ┃  ┣ Readme.jsx                          # Denna fil – beskrivning av projektet
 ┃  ┗ IndexHtml.jsx                       # Exempel på semantisk HTML-struktur
 ┣ App.css                                # Övergripande styling
 ┗ main.jsx                               # Inträde för React-appen

README.md                                 # Dokumentation och struktur

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
