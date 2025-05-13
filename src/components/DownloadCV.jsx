// /src/components/DownloadCV.jsx
export default function DownloadCV() {
    return (
      <section style={{ marginTop: "2rem" }}>
        <h2>Ladda ner mitt riktiga CV (PDF)</h2>
        <a
          href="/Lina_Barthelson-CV.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#4FC3F7",
            color: "#121212",
            borderRadius: "4px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          📄 Ladda ner PDF
        </a>
      </section>
    );
  }
  