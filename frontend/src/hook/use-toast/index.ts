import { toast, ToastPromiseParams } from 'react-toastify';
import { configToast } from './config-toast';

export function useToast() {
    const showError = (message: string) => toast.error(message, configToast);
    const showSuccess = (message: string) => toast.success(message, configToast);
    const showInfo = (message: string) => toast.info(message, configToast);
    const showWarning = (message: string) => toast.warning(message, configToast);
    const showLoading = (promise: Promise<unknown>, messages: ToastPromiseParams<unknown>) => {
        toast.promise(promise, messages, configToast);
    };

    return { showError, showSuccess, showInfo, showWarning, showLoading };
}