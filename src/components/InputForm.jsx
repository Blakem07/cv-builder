import "../styles/InputForm.css";
import PersonalDetails from "./PersonalDetails";

export default function InputForm({ form, onChange }) {
  return (
    <div className="input-form-container">
      <PersonalDetails form={form} onChange={onChange} />
    </div>
  );
}
