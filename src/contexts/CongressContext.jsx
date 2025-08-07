import { createContext, useContext, useEffect, useState } from "react";

const CongressContext = createContext();

function CongressProvider({ children }) {
  const [congress, setCongress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCongress() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/1/posts`
        );
        if (!res.ok) throw new Error("Unable to get Congress.");

        const data = await res.json();
        setCongress(data);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCongress();
  }, []);

  return (
    <CongressContext.Provider
      value={{
        congress,
        isLoading,
      }}
    >
      {children}
    </CongressContext.Provider>
  );
}

function useCongress() {
  const context = useContext(CongressContext);
  if (context === undefined)
    throw new Error("CongressContext was used outside of CongressProvider.");
  return context;
}

export { CongressProvider, useCongress };
