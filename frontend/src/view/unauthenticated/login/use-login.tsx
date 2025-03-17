import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchLogin } from "./fetch-login";
import { useToast } from "@/hook/use-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCookies, setCookies } from "@/utils/cookies";
import { LoginSchema, LoginSchemaType } from "@/schema/login";
import { validationToken } from "@/middleware/validation-token";

export function useLoginForm() {
  const navigate = useNavigate();
  const { showError } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      setCookies("ITU", data?.token!);
      navigate("/home");
    },
    onError: (error) => showError(error.message || "Ocorreu um erro ao tentar logar"),
  });

  useEffect(() => {
    const cookies = getCookies("ITU");

    if (!cookies) {
      return;
    }

    const tokenValid = validationToken(cookies);

    if (!tokenValid) {
      return;
    }

    navigate("/home");
  }, []);

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    onSubmit: (data: LoginSchemaType) => mutate(data),
  };
}
