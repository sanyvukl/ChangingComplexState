import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function change(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName };
      } else if (name === "lName") {
        return { lName: value, fName: prevValue.fName };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={change}
          name="fName"
          placeholder="First Name" /*  value={fullName.fName} */
        />
        <input
          onChange={change}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
