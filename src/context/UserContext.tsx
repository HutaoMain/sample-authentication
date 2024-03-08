import { createContext, useEffect, useReducer, Dispatch } from "react";

type AuthUser = {
  username: string;
  name: string;
};

type State = {
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: AuthUser }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

const INITIAL_STATE: State = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  loading: false,
  error: null,
};

export const AuthContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const AuthReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
