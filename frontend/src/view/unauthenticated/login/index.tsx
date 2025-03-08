import { Button } from "@/components/ui/button";

export function ViewLogin() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button variant={"destructive"} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
