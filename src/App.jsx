import { useState } from "react";
import InputForm from "./components/InputForm";
import OutputCV from "./components/OutputCV";
import "./App.css";

/**
 * Default CV data used to initialize application state.
 */
const defaultForm = {
  name: "Thomas A. Anderson",
  email: "thomas.anderson@gmail.com",
  phone: "+1 (212) 555-0152",
  address: "New York, NY, USA",
  education: [
    {
      id: 1,
      institution: "Zion Polytechnic University",
      degree: "BSc Computer Science",
      startDate: "2018-09",
      endDate: "2021-06",
      city: "New York, NY",
    },
    {
      id: 2,
      institution: "Nebuchadnezzar Institute of Technology",
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
      responsibilities:
        "Implemented core features and API integrations for client-facing products.\n" +
        "Authored unit and integration tests to improve reliability.\n" +
        "Collaborated with product and UX teams to refine requirements and delivery.",
    },
    {
      id: 101,
      company: "NeoTech Solutions",
      position: "Senior Software Engineer",
      startDate: "2023-07",
      endDate: "2023-12",
      city: "Los Angeles, CA",
      responsibilities:
        "Implemented core features and API integrations for client-facing products.\n" +
        "Authored unit and integration tests to improve reliability.\n" +
        "Collaborated with product and UX teams to refine requirements and delivery.",
    },
  ],
};

/**
 * Application entry point.
 *
 * Manages CV form state and coordinates input and preview rendering.
 */
function App() {
  const [form, setForm] = useState(defaultForm);
  const [openEducationId, setOpenEducationId] = useState(null);
  const [openExperienceId, setOpenExperienceId] = useState(null);

  /**
   * Updates a top-level form field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   * @param {string} field - Form field key to update
   */
  function handleFormChange(e, field) {
    let prevForm = { ...form };
    prevForm[field] = e.target.value;

    setForm(prevForm);
  }

  /**
   * Generic immutable item adder for array-based form sections used by handlers.
   *
   * Adds a new entry object inside the named array on the form state by
   * recreating the old array and including the new entry amongst the items
   *
   * @param {string} itemArrayName - E.g education or experience - allowing access to form properties
   * @param {Object} newEntry - Containing details experience/education item.
   */
  function itemEntryAdd(itemArrayName, newEntry) {
    setForm((prevForm) => ({
      ...prevForm,
      [itemArrayName]: [...prevForm[itemArrayName], newEntry],
    }));
  }

  /**
   * Generic immutable updater for array-based form sections used by handlers.
   *
   * Replaces one object inside a named array on the form state
   * by matching `id` and updating a single field.
   *
   * @param {string} itemArrayName - E.g education or experience - allowing access to form properties
   * @param {string} value - New value to assign
   * @param {number} id - Identifier of the specifc entry object
   * @param {string} field - Property name of the entry e.g, university, startDate, endDate
   */
  function itemEntryChange(itemArrayName, value, id, field) {
    setForm((prevForm) => ({
      ...prevForm,
      [itemArrayName]: prevForm[itemArrayName].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  }

  /**
   * Generic immutable deleter for array-based form sections used by handlers,
   *
   * Deletes one object inside names array on the form state
   * by matching `id` and deleting a single item.
   *
   */
  function itemEntryDelete(itemArrayName, id) {
    setForm((prevForm) => ({
      ...prevForm,
      [itemArrayName]: prevForm[itemArrayName].filter((edu) => edu.id !== id),
    }));
  }

  /**
   * Appends a new education entry and expands it.
   *
   * Delegates item addition to the generic item entry adder.
   */
  function handleAddUniversity() {
    const newUniversity = {
      id: Date.now(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
    };

    itemEntryAdd("education", newUniversity);

    setOpenEducationId(newUniversity.id);
  }

  /**
   * Generic function handling input changes for an entry field.
   *
   * Extracts the input value and delegates the update
   * to the generic item entry updater.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e
   * @param {number} id - Education entry identifier
   * @param {string} field - Field name to update on the entry
   */
  function handleEntryChange(e, itemArrayName, id, field) {
    const value = e.target.value;
    itemEntryChange(itemArrayName, value, id, field);
  }

  /**
   * Generic function to remove an entry from the form.
   *
   * Delegates the deletion to the generic item
   * entry deleter.
   *
   * @param {React.SyntheticEvent} e - Triggering event
   * @param {number} id - Education item identifier
   */
  function handleEntryDelete(e, itemArrayName, id) {
    e.preventDefault();
    itemEntryDelete(itemArrayName, id);
  }

  /**
   * Appends a new experience entry and expands it.
   *
   * Delegates item addition to the generic item entry adder.
   */
  function handleAddExperience() {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      responsibilities: ``,
      startDate: "",
      endDate: "",
      city: "",
    };

    itemEntryAdd("experience", newExperience);

    setOpenExperienceId(newExperience.id);
  }

  return (
    <>
      <InputForm
        form={form}
        onChange={handleFormChange}
        handleEntryChange={handleEntryChange}
        handleEntryDelete={handleEntryDelete}
        openEducationId={openEducationId}
        handleAddUniversity={handleAddUniversity}
        openExperienceId={openExperienceId}
        handleAddExperience={handleAddExperience}
      />
      <OutputCV form={form} />
    </>
  );
}

export default App;
