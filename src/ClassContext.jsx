import { createContext, useReducer } from "react";

export const ClassContext = createContext({
  classes: [],
  teacher: [],
  addclass: () => {},
  deleteclass: () => {},
  addteacher: () => {},
  deleteteacher: () => {},
});

const AddclassReducer = (currentTeachers, action) => {
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

const AddteacherReducer = (currentTeachers, action) => {
  let newTeachers = currentTeachers;
};

export const ClassProvider = ({ children }) => {
  const [classes, dispatchsetaddclass] = useReducer(AddclassReducer, []);
  const [teacher, dispatchsetaddteacher] = useReducer(AddteacherReducer, []);

  const addclass = (className, capacity, classTeacher) => {
    const newTeacherAction = {
      type: "NEW_TEACHER",
      payload: {
        className,
        capacity,
        classTeacher,
      },
    };
    dispatchsetaddclass(newTeacherAction);
  };

  const deleteclass = (className) => {
    const deleteTeacherAction = {
      type: "DELETE_TEACHER",
      payload: {
        className,
      },
    };
    dispatchsetaddclass(deleteTeacherAction);
  };

  const addteacher = (info, subjects, classes, number, details) => {
    const addteacherAction = {
      type: "ADD_TEACHER",
      payload: {
        info,
        subjects,
        classes,
        number,
        details,
      },
    };
    dispatchsetaddteacher(addteacherAction);
  };

  const deleteteacher = () => {};

  return (
    <ClassContext.Provider
      value={{
        classes,
        teacher,
        addclass,
        deleteclass,
        addteacher,
        deleteteacher,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
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
