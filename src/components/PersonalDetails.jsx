import "../styles/PersonalDetails.css";

export default function PersonalDetails({ form, onChange }) {
  return (
    <form className="personal-details">
      <h1>Personal Details</h1>
      <h3>Full Name</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => onChange(e, "name")}
          value={form.name}
          placeholder="Enter your full name"
        />
      </div>
      <h3>Email</h3>
      <div className="input-group">
        <input
          type="email"
          className="form-control"
          onChange={(e) => onChange(e, "email")}
          value={form.email}
          placeholder="Enter your email"
        />
      </div>
      <h3>Phone Number</h3>
      <div className="input-group">
        <input
          type="tel"
          className="form-control"
          onChange={(e) => onChange(e, "phone")}
          value={form.phone}
          placeholder="Enter your phone number"
        />
      </div>
      <h3>Address</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => onChange(e, "address")}
          value={form.address}
          placeholder="Enter your address"
        />
      </div>
    </form>
  );
}
