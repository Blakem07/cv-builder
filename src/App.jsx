import { useState } from "react";
import InputForm from "./components/InputForm";
import OutputCV from "./components/OutputCV";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "Thomas A. Anderson",
    email: "ThomasAnderson@gmail.com",
    phone: "+44 3245 5521 5521",
    address: "Lower Downtown, Capital City, USA",
    education: [
      {
        id: 1,
        university: "University of Example",
        degree: "BSc Computer Science",
        startDate: "2018-09",
        endDate: "2021-06",
        city: "London",
      },
      {
        id: 2,
        university: "Example Institute of Technology",
        degree: "MSc Software Engineering",
        startDate: "2021-09",
        endDate: "2023-09",
        city: "Manchester",
      },
    ],
  });

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

  return (
    <>
      <InputForm
        form={form}
        onChange={handleFormChange}
        handleUniversityChange={handleUniversityChange}
      ></InputForm>
      <OutputCV form={form}></OutputCV>
    </>
  );
}

export default App;
