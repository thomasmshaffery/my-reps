import { useEffect, useState } from "react";
// import key from "./key";

export function useCongress(state) {
  const [congress, setCongress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const key = import.meta.env.VITE_API_KEY;

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCongress() {
        if (state == "Choose a State" || state == null) {
          setCongress([]);
          return { congress, isLoading, error };
        }

        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.congress.gov/v3/member/${state}?format=json&limit=60&currentMember=true&api_key=${key}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Unable to get Congress.");

          const data = await res.json();
          setCongress(data.members);
        } catch (err) {
          console.log(err);

          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }

        return function () {
          controller.abort();
        };
      }
      fetchCongress();
    },
    [state]
  );
  return { congress, isLoading, error };
}
