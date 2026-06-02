import { createContext, useState } from "react";

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [addteacher, setaddteacher] = useState([]);

  const handleAddTeacher = (className, capacity, classTeacher) => {
    console.log(`New Teacher Added ${className}, ${capacity}, ${classTeacher}`);
    const addnewteacher = [
      ...addteacher,
      { name: className, capacity: capacity, Teacher: classTeacher },
    ];
    setaddteacher(addnewteacher);
  };

  return (
    <ClassContext.Provider value={{ addteacher, handleAddTeacher }}>
      {children}
    </ClassContext.Provider>
  );
};
