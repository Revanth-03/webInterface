import React, { useState } from "react";
import FieldComponent from "./FieldComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WebInterface = () => {
  // State hook to manage the list of fields
  const [fields, setFields] = useState([[
    {
      name: "person",
      type: "object",
      children: [
        { name: "Ravi", type: "String" },
        {
          name: "age",
          type: "Number",
        },
      ],
    },
    {
      name: "Rahul",
      type:"string"
    },
    {
      name:"Revanth",
      type:"object"
    }
  ]]);

  // Handler function to add a new field to the list
  const handleAddField = () => {
    setFields([...fields, {name:"add name",type:"string"}]);
  };

  // Handler function to delete a field from the list by its index
  const handleDeleteField = (index) => {
    toast.warning(
      "Be aware that once you deleted fields, it cannot be recovered.",
      {
        autoClose: 5000,
      }
    );
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  // Render function for the web interface
  return (
    <div className="web-interface">
      <div className="header">
        <big>Field name and type</big>
        <span>Add Fields</span>
        <button onClick={handleAddField}>+</button>
        <hr />
      </div>
      {fields.length > 0 ? (
        // Map over the list of fields and render a FieldComponent for each one
        fields.map((field,index) => (
          <FieldComponent
            key={index}
            index={index}
            field={field}
            handleDeleteField={handleDeleteField}
          />
        ))
      ) : (
        // Render a message if there are no fields in the list
        <p>Add Fields </p>
      )}
      <ToastContainer />
    </div>
  );
};

export default WebInterface;
