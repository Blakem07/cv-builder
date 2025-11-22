import "../styles/PersonalDetails.css";

export default function PersonalDetails({ form, onChange, FormInput }) {
  return (
    <form className="personal-details">
      <h1>Personal Details</h1>
      <h3>Full Name</h3>
      <FormInput
        value={form.name}
        onChange={onChange}
        field="name"
        type="text"
        placeholder="Enter your full name"
      />
      <h3>Email</h3>
      <FormInput
        value={form.email}
        onChange={onChange}
        field="email"
        type="email"
        placeholder="Enter your email"
      />
      <h3>Phone Number</h3>
      <FormInput
        value={form.phone}
        onChange={onChange}
        field="phone"
        type="text"
        placeholder="Enter your phone number"
      />
      <h3>Address</h3>
      <FormInput
        value={form.address}
        onChange={onChange}
        field="address"
        type="text"
        placeholder="Enter your address"
      />
    </form>
  );
}
