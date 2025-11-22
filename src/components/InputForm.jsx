import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";

export default function InputForm({ form, onChange }) {
  return (
    <div className="input-form-container">
      <PersonalDetails form={form} onChange={onChange} FormInput={FormInput} />
    </div>
  );
}

/**
 * A reusable form input component that handles user input.
 *
 * @param {Object} props - The props for the input component.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.field - The name of the field to be updated (e.g., "name", "email").
 * @param {string} props.type - The type of the input (e.g., text, email).
 * @param {string} props.placeholder - The placeholder text for the input field.
 *
 * @returns {JSX.Element} - A JSX element representing the input field.
 */
function FormInput({ value, onChange, field, type, placeholder }) {
  return (
    <div className="input-group">
      <input
        type={type}
        className="form-control"
        onChange={(e) => onChange(e, field)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
