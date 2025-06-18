"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import FormFieldComponent from "./FormFieldComponent";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up"
        ? z.string().min(5, "Name must be at least 5 characters")
        : z.string().optional(),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      if (type === "sign-in") {
        router.push("/");
        console.log("sign in values", values);
      }
      if (type === "sign-up") {
        router.push("/sign-in");
        console.log("sign up values", values);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        `${type === "sign-in" ? "Signed in" : "Signed up"} successfully!`
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!");
    } finally {
      setLoading(false);
    }
  }
  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[300px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flow-row gap-6 justify-center items-center">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="rotate-90 rounded-full p-2 border-2 border-[#9a6efe]"
          />
          <h2 className="text-light-100 font-bold text-3xl">NexView AI</h2>
        </div>
        <h3 className="text-[20px] font-medium text-muted-foreground rounded-lg border-1 border-purple-100 p-2 shadow-md shadow-[#9a6efe]">
          Interview smarter. Grow faster. Powered by AI.
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-4 space-y-8 form"
          >
            {!isSignIn && (
              <FormFieldComponent
                control={form.control}
                name="name"
                placeholder="Enter Your Name"
                label="Username"
              />
            )}
            <FormFieldComponent
              control={form.control}
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              type="email"
            />
            <FormFieldComponent
              control={form.control}
              name="password"
              placeholder="Enter Your Password"
              label="Password"
              type="password"
            />
            <Button disabled={loading} className="btn" type="submit">
              {loading ? (
                <>
                  <Loader className="animate-spin w-4 h-4" />
                  <p className="text-light-800 font-bold">Please Wait...</p>
                </>
              ) : (
                <p className="text-light-800 font-bold">Submit</p>
              )}
            </Button>
          </form>
          <p className="text-center">
            {isSignIn ? "Don't have an account?" : "Have an account already?"}
            <Link
              href={isSignIn ? "/sign-up" : "/sign-in"}
              className="text-user-primary ml-2 font-semibold underline hover:cursor-pointer"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
