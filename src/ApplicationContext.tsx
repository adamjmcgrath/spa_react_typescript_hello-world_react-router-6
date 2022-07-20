import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";

interface ContextProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  toggle: false,
  setToggle: () => null,
};

export const AppContext = createContext<ContextProps>(defaultState);

const AppContextProvider: React.FC = ({ children }) => {

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log('toggle', toggle);
  }, [toggle])

  return <AppContext.Provider value={{toggle, setToggle}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
