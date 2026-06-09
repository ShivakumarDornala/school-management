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
  if (action.type === "NEW_CLASS") {
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
  if (action.type === "NEW_TEACHER") {
    newTeachers = [
      ...currentTeachers,
      {
        info: action.payload.info,
        subjects: action.payload.subjects,
        classes: action.payload.classes,
        number: action.payload.number,
        details: action.payload.details,
      },
    ];
  } else if (action.type === "DELETE_TEACHER") {
    newTeachers = currentTeachers.filter(
      (item) => item.info !== action.payload.info,
    );
  }
  return newTeachers;
};

export const ClassProvider = ({ children }) => {
  const [classes, dispatchsetaddclass] = useReducer(AddclassReducer, []);
  const [teacher, dispatchsetaddteacher] = useReducer(AddteacherReducer, []);

  const addclass = (className, capacity, classTeacher) => {
    const newTeacherAction = {
      type: "NEW_CLASS",
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
      type: "DELETE_CLASS",
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
