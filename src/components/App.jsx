//Changes after submitting
//uncomment the below code to see it change on the fly (of course first comment the uncommeted code first)

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [newHeading, setNewHeading] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);

    if (name === "fName") {
      setContact({ fName: value, lName: contact.lName, email: contact.email });
    } else if (name === "lName") {
      setContact({ fName: contact.fName, lName: value, email: contact.email });
    } else {
      setContact({ fName: contact.fName, lName: contact.lName, email: value });
    }
  }

  function handleSubmit() {
    setNewHeading(contact);
  }

  return (
    <div className="container">
      <h1>
        Hello {newHeading.fName} {newHeading.lName}
      </h1>
      <p>{newHeading.email}</p>
      {/* <form> */}
      <input
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        value={contact.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        value={contact.lName}
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        value={contact.email}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* </form> */}
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     // console.log(name);
//     // console.log(value);

//     if (name === "fName") {
//       setContact({ fName: value, lName: contact.lName, email: contact.email });
//     } else if (name === "lName") {
//       setContact({ fName: contact.fName, lName: value, email: contact.email });
//     } else {
//       setContact({ fName: contact.fName, lName: contact.lName, email: value });
//     }
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={contact.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={contact.lName}
//         />
//         <input
//           name="email"
//           onChange={handleChange}
//           placeholder="Email"
//           value={contact.email}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
