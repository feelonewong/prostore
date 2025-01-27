"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signInDefaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const CredentialsSignInForm = () => {
  const [data, acition] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Sign In..." : "Sign In"}
      </Button>
    );
  };
  return (
    <form className="space-y-6" action={acition}>
      <Input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Please enter your email"
          defaultValue={signInDefaultValues.email}
          required
        ></Input>
      </div>
      <div>
        <Label htmlFor="password">password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          autoComplete="password"
          placeholder="Please enter your password"
          defaultValue={signInDefaultValues.password}
          required
        ></Input>
      </div>
      <div>
        {/*<Button variant="default" className="w-full">*/}
        {/*  Sign in*/}
        {/*</Button>*/}
        <SignInButton />
      </div>
      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" target="_self" className="link font-bold">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
