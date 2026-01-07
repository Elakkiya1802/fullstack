function StudentCard({ name, dept, cgpa }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{dept}</p>
      <p>CGPA: {cgpa}</p>
      <p>{cgpa >= 8 ? "Excellent" : "Needs Improvement"}</p>
    </div>
  );
}

function PropsDemo() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Props Demo</h1>
      <StudentCard name="Elakkiya" dept="ECE" cgpa={8.5} />
    </div>
  );
}

export default PropsDemo;
