import { forwardRef, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  containerClassName?: string;
  showLockIcon?: boolean;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ className, containerClassName, showLockIcon = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={cn("relative", containerClassName)}>
        {showLockIcon && (
          <div className="absolute left-3 top-0 flex h-full items-center text-muted-foreground">
            <Lock className="h-4 w-4" />
          </div>
        )}
        <Input
          type={showPassword ? "text" : "password"}
          className={cn(showLockIcon ? "pl-10" : "", "pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          <span className="sr-only">{showPassword ? "Ocultar senha" : "Mostrar senha"}</span>
        </Button>
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";
