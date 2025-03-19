import { useEffect } from "react";

const modifierKeys: { [key: string]: keyof KeyboardEvent } = {
  ctrl: "ctrlKey",
  shift: "shiftKey",
  alt: "altKey",
  meta: "metaKey",
};

export function useKeyPress(keys: string | string[], callback: () => void, modifier?: string) {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const keyPressed = Array.isArray(keys) ? keys : [keys];
      const isModifierValid = modifier ? (event[modifierKeys[modifier]] as boolean) : true;

      if (keyPressed.includes(event.key) && isModifierValid) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keys, modifier, callback]);
}
