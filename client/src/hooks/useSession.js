import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useSession = () => {
    return useContext(AuthContext);
};

export default useSession;