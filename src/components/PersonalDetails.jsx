import "../styles/PersonalDetails.css";

export default function PersonalDetails() {
  return (
    <form className="personal-details">
      <h1>Personal Details</h1>
      <h3>Full Name</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your full name"
        />
      </div>
      <h3>Email</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your email"
        />
      </div>
      <h3>Phone Number</h3>
      <div className="input-group">
        <input
          type="tel"
          className="form-control"
          placeholder="Enter your phone number"
        />
      </div>
      <h3>Address</h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your address"
        />
      </div>
    </form>
  );
}
