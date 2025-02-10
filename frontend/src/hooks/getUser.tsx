import { useEffect, useState } from "react";
import { userApi } from "../utils/api";

interface userData {
  id: string;
  email: string;
  name: string;
  password: string;
  quote: string;
}

export const getUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<userData>({
    id: "",
    email: "",
    name: "",
    password: "",
    quote: "",
  });

  useEffect(() => {
    userApi(
      localStorage.getItem("token") || "",
      import.meta.env.VITE_GET_USER_API_URL
    )
      .then((response) => {
        setUser(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return {loading, user};
};
