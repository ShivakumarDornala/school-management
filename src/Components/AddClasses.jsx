import React from "react";
import AddTeacher from "./AddTeacher";

const AddClasses = ({ addteacher }) => {
  return (
    <div>
      {addteacher.map((teacher, index) => (
        <AddTeacher
          key={index}
          name={teacher.name}
          capacity={teacher.capacity}
          classTeacher={teacher.Teacher}
        />
      ))}
    </div>
  );
};

export default AddClasses;
