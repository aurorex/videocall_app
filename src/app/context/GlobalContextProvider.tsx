'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    appId: string,
    token: string,
    channel: string,
    setAppId: Dispatch<SetStateAction<string>>,
    setToken: Dispatch<SetStateAction<string>>,
    setChannel: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>({
    appId: '',
    setAppId: (): string => '',
    token: '',
    setToken: (): string => '',
    channel: '',
    setChannel: (): string => '',
})

export const GlobalContextProvider = ({ children }: any) => {
    const [channel, setChannel] = useState("");
    const [appId, setAppId] = useState("");
    const [token, setToken] = useState("");

    return (
      <GlobalContext.Provider 
        value={{ 
          channel, 
          appId, 
          token,
          setChannel,
          setAppId,
          setToken, 
      }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
export const useGlobalContext = () => useContext(GlobalContext);