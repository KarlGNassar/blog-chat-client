import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: { $oid: "60b15ea947492076b4dc9b6a" },
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: ["60b15e9e47492076b4dc9b69"],
    isAdmin: false,
    username: "Ralph",
    email: "ralph@ralph.com",
    password: "$2b$10$dE0lXXQbGt7mmwyVW11/xeTeQ7x4WUIamuZUZ.GzdtEifxHQ7EM.6",
    createdAt: { $date: { $numberLong: "1622236841519" } },
    updatedAt: { $date: { $numberLong: "1622239222581" } },
    __v: { $numberInt: "0" },
    description: "Hello Friends!",
    city: "Beirut",
    from: "Lebanon",
    relationship: "2",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
