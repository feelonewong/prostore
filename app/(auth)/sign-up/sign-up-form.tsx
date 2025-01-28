"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signUpDefaultValues } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const SignUpForm = () => {
  const [data, acition] = useActionState(signUpUser, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign Up"}
      </Button>
    );
  };
  return (
    <form className="space-y-6" action={acition}>
      <Input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Please enter your name"
          defaultValue={signUpDefaultValues.name}
          required
        ></Input>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          autoComplete="email"
          placeholder="Please enter your email"
          defaultValue={signUpDefaultValues.email}
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
          defaultValue={signUpDefaultValues.password}
          required
        ></Input>
      </div>
      <div>
        <Label htmlFor="password">Confirm Password</Label>
        <Input
          name="confirmPassword"
          id="password"
          type="password"
          autoComplete="confirmPassword"
          placeholder="Please enter your password"
          defaultValue={signUpDefaultValues.confirmPassword}
          required
        ></Input>
      </div>
      <div>
        {/*<Button variant="default" className="w-full">*/}
        {/*  Sign in*/}
        {/*</Button>*/}
        <SignUpButton />
      </div>
      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" target="_self" className="link font-bold">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
