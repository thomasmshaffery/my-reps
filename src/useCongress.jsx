import { useEffect, useState } from "react";

export function useCongress(state) {
  const [congress, setCongress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchCongress() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.congress.gov/v3/member/${state}?format=json&limit=60&currentMember=true&api_key=${key}`
        );
        if (!res.ok) throw new Error("Unable to get Congress.");

        const data = await res.json();
        setCongress(data.members);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    }
    // fetchCongress();
  }, []);
}
