import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";

const useToast = () => {
    const { show: Toast, showToast } = useContext(ToastContext);
    return { Toast, showToast };
}

export default useToast;