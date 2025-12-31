import { useState } from "react";
import InputForm from "./components/InputForm";
import OutputCV from "./components/OutputCV";
import "./App.css";

const defaultForm = {
  name: "Thomas A. Anderson",
  email: "thomas.anderson@gmail.com",
  phone: "+1 (212) 555-0152",
  address: "New York, NY, USA",
  education: [
    {
      id: 1,
      university: "University of Example",
      degree: "BSc Computer Science",
      startDate: "2018-09",
      endDate: "2021-06",
      city: "New York, NY",
    },
    {
      id: 2,
      university: "Example Institute of Technology",
      degree: "MSc Software Engineering",
      startDate: "2021-09",
      endDate: "2023-06",
      city: "Los Angeles, CA",
    },
  ],
  experience: [
    {
      id: 102,
      company: "Matrix Systems",
      position: "Software Engineer",
      startDate: "2021-07",
      endDate: "2023-06",
      city: "Miami, FL",
      responsibilities: [
        "Implemented core features and API integrations for client-facing products",
        "Authored unit and integration tests to improve reliability",
        "Collaborated with product and UX teams to refine requirements and delivery",
      ],
    },
    {
      id: 101,
      company: "NeoTech Solutions",
      position: "Senior Software Engineer",
      startDate: "2023-07",
      endDate: "2023-12",
      city: "Los Angeles, CA",
      responsibilities: [
        "Led cross-functional teams to design and deliver scalable web applications",
        "Defined system architecture and mentored junior engineers on best practices",
        "Coordinated deployments, CI/CD pipelines, and performance optimizations",
      ],
    },
  ],
};

function App() {
  const [form, setForm] = useState(defaultForm);
  const [openEducationId, setOpenEducationId] = useState(null);

  /**
   * Handles changes to the form fields by updating the specific field in the form state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object generated when an input field changes.
   * @param {string} field - The name of the field to be updated (e.g., "name", "email", etc.).
   *
   * @returns {void} This function does not return anything; it updates the form state directly.
   */
  function handleFormChange(e, field) {
    let prevForm = { ...form };
    prevForm[field] = e.target.value;

    setForm(prevForm);
  }

  function handleUniversityChange(e, id, field) {
    const value = e.target.value;

    setForm((prevForm) => ({
      ...prevForm,
      education: prevForm.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  }

  function handleDeleteUniversity(e, id) {
    e.preventDefault();

    setForm((prevForm) => ({
      ...prevForm,
      education: prevForm.education.filter((edu) => edu.id !== id),
    }));
  }

  function handleAddUniversity() {
    const newUniversity = {
      id: Date.now(),
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
    };

    setForm((prevForm) => ({
      ...prevForm,
      education: [...prevForm.education, newUniversity],
    }));

    setOpenEducationId(newUniversity.id);
  }

  return (
    <>
      <InputForm
        form={form}
        onChange={handleFormChange}
        openEducationId={openEducationId}
        handleUniversityChange={handleUniversityChange}
        handleDeleteUniversity={handleDeleteUniversity}
        handleAddUniversity={handleAddUniversity}
      ></InputForm>
      <OutputCV form={form}></OutputCV>
    </>
  );
}

export default App;
