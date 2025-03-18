"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted/50",
        outline: "border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  iconClassName?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      description,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      error,
      className,
      containerClassName,
      labelClassName,
      inputContainerClassName,
      iconClassName,
      variant,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className={cn("space-y-2", containerClassName)}>
        {label && (
          <div className="flex justify-between">
            <Label htmlFor={inputId} className={cn("font-medium", labelClassName)}>
              {label}
            </Label>
            {description && <span className="text-xs text-muted-foreground">{description}</span>}
          </div>
        )}
        <div className={cn("relative flex items-center", inputContainerClassName)}>
          <div className="absolute left-3 flex items-center gap-2">
            {LeadingIcon && <LeadingIcon className={cn("h-4 w-4 text-muted-foreground", iconClassName)} />}
            {TrailingIcon && <TrailingIcon className={cn("h-4 w-4 text-muted-foreground", iconClassName)} />}
          </div>
          <Input
            id={inputId}
            className={cn(
              inputVariants({ variant }),
              (LeadingIcon || TrailingIcon) && "pl-10",
              LeadingIcon && TrailingIcon && "pl-16",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";
