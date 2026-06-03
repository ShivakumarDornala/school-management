import { createContext, useReducer } from "react";

export const ClassContext = createContext({
  teacher: [],
  addteacher: () => {},
  deleteteaher: () => {},
});

const AddTeacherReducer = (currentTeachers, action) => {
  let newTeachers = currentTeachers;
  if (action.type === "NEW_TEACHER") {
    newTeachers = [
      ...currentTeachers,
      {
        name: action.payload.className,
        capacity: action.payload.capacity,
        Teacher: action.payload.classTeacher,
      },
    ];
  } else if (action.type === "DELETE_TEACHER") {
    newTeachers = currentTeachers.filter(
      (item) => item.name !== action.payload.className,
    );
  }
  return newTeachers;
};

export const ClassProvider = ({ children }) => {
  const [teacher, dispatchsetaddteacher] = useReducer(AddTeacherReducer, []);

  const addteacher = (className, capacity, classTeacher) => {
    const newTeacherAction = {
      type: "NEW_TEACHER",
      payload: {
        className,
        capacity,
        classTeacher,
      },
    };
    dispatchsetaddteacher(newTeacherAction);
  };

  const deleteteaher = (className) => {
    const deleteTeacherAction = {
      type: "DELETE_TEACHER",
      payload: {
        className,
      },
    };
    dispatchsetaddteacher(deleteTeacherAction);
  };

  // const handleAddTeacher = (className, capacity, classTeacher) => {
  //   console.log(`New Teacher Added ${className}, ${capacity}, ${classTeacher}`);
  //   const addnewteacher = [
  //     ...addteacher,
  //     { name: className, capacity: capacity, Teacher: classTeacher },
  //   ];
  //   dispatchsetaddteacher(addnewteacher);
  // };

  // const handleDeleteTeacher = () => {};

  return (
    <ClassContext.Provider value={{ teacher, addteacher, deleteteaher }}>
      {children}
    </ClassContext.Provider>
  );
};
