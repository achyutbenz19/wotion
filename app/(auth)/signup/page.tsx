"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, SignUpFormSchema } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { MailCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { actionSignupUser } from "@/lib/serverActions/auth-actions";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const constExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(() => {
    clsx("bg-primary"),
      {
        "bg-red-500/10": constExchangeError,
        "border-red-500/50": constExchangeError,
        "text-red-700": constExchangeError,
      };
  }, []);

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData,
  ) => {
    const { error } = await actionSignupUser(formData);
    if (error) {
      setErrorMessage(error.message);
      form.reset();
    } else {
      setConfirmation(true);
    }
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (errorMessage) setErrorMessage("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
      >
        <Link
          href="/"
          className="
          w-full
          flex
          justify-left
          items-center"
        >
          {/* <Image
            src={Logo}
            alt="wotion Logo"
            width={50}
            height={50}
          /> */}
          <span
            className="font-semibold
          dark:text-white text-4xl first-letter:ml-2"
          >
            wotion.
          </span>
        </Link>
        <FormDescription
          className="
        text-foreground/60"
        >
          An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
        <Button type="submit" className="w-full p-6" disabled={isLoading}>
          {!isLoading ? "Create Account" : "Loading"}
        </Button>
        <span className="self-container">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Log In
          </Link>
        </span>
        {(confirmation || constExchangeError) && (
          <>
            <Alert className={confirmationAndErrorStyles!}>
              {!constExchangeError && <MailCheck className="h-4 w-4" />}
              <AlertTitle>
                {constExchangeError ? "Invalid Link" : "Check your email."}
              </AlertTitle>
              <AlertDescription>
                {constExchangeError || "An email confirmation has been sent."}
              </AlertDescription>
            </Alert>
          </>
        )}
      </form>
    </Form>
  );
};

export default page;
