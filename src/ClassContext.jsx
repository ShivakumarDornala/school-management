import { createContext, useReducer } from "react";

export const ClassContext = createContext({
  classes: [],
  teacher: [],
  addclass: () => {},
  deleteclass: () => {},
  addteacher: () => {},
  deleteteacher: () => {},
  editclass: () => {},
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
  } else if (action.type === "DELETE_CLASS") {
    newTeachers = currentTeachers.filter(
      (item) => item.name !== action.payload.className,
    );
  } else if (action.type === "UPDATE_CLASS") {
    newTeachers = currentTeachers.map((item) =>
      item.name === action.payload.originalName
        ? {
            ...item,
            capacity: action.payload.capacity,
            Teacher: action.payload.classTeacher,
          }
        : item,
    );
  }
  return newTeachers;
};

const AddteacherReducer = (currentTeachers, action) => {
  let newTeachers = currentTeachers;
  if (action.type === "ADD_TEACHER") {
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
    const newClassAction = {
      type: "NEW_CLASS",
      payload: {
        className,
        capacity,
        classTeacher,
      },
    };
    dispatchsetaddclass(newClassAction);
  };

  const editclass = (originalName, className, capacity, classTeacher) => {
    const editClassAction = {
      type: "UPDATE_CLASS",
      payload: {
        originalName,
        className,
        capacity,
        classTeacher,
      },
    };
    dispatchsetaddclass(editClassAction);
  };

  const deleteclass = (className) => {
    const deleteClassAction = {
      type: "DELETE_CLASS",
      payload: {
        className,
      },
    };
    dispatchsetaddclass(deleteClassAction);
  };

  const addteacher = (info, subjects, classes, number, details) => {
    // console.log(
    //   `New Teacher Added ${info}, ${subjects}, ${classes}, ${number}, ${details}`,
    // );
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

  const deleteteacher = (info) => {
    const deleteteacherAction = {
      type: "DELETE_TEACHER",
      payload: {
        info,
      },
    };
    dispatchsetaddteacher(deleteteacherAction);
  };

  return (
    <ClassContext.Provider
      value={{
        classes,
        teacher,
        addclass,
        deleteclass,
        addteacher,
        deleteteacher,
        editclass,
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

// export const Teachers = ({ info, subjects, classes, number, details }) => {
//   return (
//     <tr className="hover:bg-gray-50 odd:bg-gray-100 even:bg-white">
//       <td className="p-4 ">{info}</td>
//       <td className="p-4">{subjects}</td>
//       <td className="p-4 font-semibold">{classes}</td>
//       <td className="p-4 font-semibold">{number}</td>
//       <td className="p-4 font-semibold">{details}</td>

//       <td className="p-4 ">
//         <div className="flex justify-center gap-2">
//           <button className="text-blue-600 hover:bg-blue-100 rounded-full p-2 cursor-pointer">
//             <Edit size={16} />
//           </button>

//           <button
//             className="text-red-600 hover:bg-red-100 rounded-full p-2 cursor-pointer"
//             //onClick={() => deleteclass(name)}
//           >
//             <Trash2 size={16} />
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// };
