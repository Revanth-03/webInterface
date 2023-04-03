import React, { useState, useEffect } from "react";
import "../styles/FieldComponent.scss";

const FieldComponent = ({ parentId, onRemove, handleDeleteField, index ,field = {}) => {
  // State variables
  const {name = "add string",type = "string",children=[]} = field;
  const [showAddButton, setShowAddButton] = useState(false);
  const [fieldType, setFieldType] = useState(type||"string");
  const [fieldComponents, setFieldComponents] = useState(children?children.map((child)=><FieldComponent field{child} />):[]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(name||"add name");

  // Update showAddButton based on fieldType
  useEffect(() => {
    setShowAddButton(fieldType === "object");
  }, [fieldType]);

  // Handle changes to fieldType dropdown
  const handleFieldTypeChange = (event) => {
    setFieldType(event.target.value);
     // If fieldType is not an object, hide the Add button and remove any nested child components
    if (event.target.value !== "object") {
      setShowAddButton(false);
      setFieldComponents([]);
    }
  };

  // Handle click of Add button
  const handleAddButtonClick = () => {
    setFieldComponents([
      ...fieldComponents,
      <FieldComponent key={fieldComponents.length} onRemove={handleRemove} />,
    ]);
  };

  // Handle click of input field
  const handleInputClick = () => {
    setIsEditMode(true);
  };

  // Handle changes to input field
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // Handle click of Save button
  const handleSave = () => {
    setIsEditMode(false);
    console.log(value);
  };

  // Handle click of Remove button
  const handleRemove = () => {
    onRemove && onRemove();
  };

  // Render component
  return (
    <div className={`field-component  ${parentId ? "child" : "parent"} `}>
      {/* Render input field in edit mode or view mode */}
      {isEditMode ? (
        <>
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleInputChange(e);
                e.target.blur(); // blur the input field
              }
            }}
            onBlur={handleSave}
            autoFocus //  autoFocus attribute
            maxLength={30} //  maxLength attribute
          />
        </>
      ) : (
        <div onClick={handleInputClick}>
          {value.length === 0 ? "add name" : value}
        </div>
      )}

      {/* Render fieldType dropdown */}
      <select
        name="fieldType"
        value={fieldType}
        onChange={handleFieldTypeChange}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
        <option value="object">Object</option>
      </select>

      {/* Render Remove button based on props */}
      {(onRemove && (
        <button className="remove" onClick={handleRemove}>
          X
        </button>
      )) || (
        <button className="remove" onClick={() => handleDeleteField(index)}>
          X
        </button>
      )}

      {/* Render Add button if fieldType is object */}
      {showAddButton && (
        <button className="add" onClick={handleAddButtonClick}>
          +
        </button>
      )}

      {/* Render child field components */}
      {fieldComponents.map((childComponent, index) => (
        <div key={index}>
          {React.cloneElement(childComponent, {
            parentId: index,
            onRemove: () => {
              setFieldComponents(
                fieldComponents.filter((_, childIndex) => childIndex !== index)
              );
            },
          })}
        </div>
      ))}
    </div>
  );
};

export default FieldComponent;
