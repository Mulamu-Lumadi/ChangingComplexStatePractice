import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleTyping = (event) => {
    const { value, name } = event.target;
    setContact((preVal) => {
      if (name == "fName") {
        return {
          fName: value,
          lName: preVal.lName,
          email: preVal.email,
        };
      } else if (name == "lName") {
        return {
          fName: preVal.fName,
          lName: value,
          email: preVal.email,
        };
      } else if (name == "email") {
        return {
          fName: preVal.fName,
          lName: preVal.lName,
          email: value,
        };
      }
    });
  };
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleTyping}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleTyping}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleTyping}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
