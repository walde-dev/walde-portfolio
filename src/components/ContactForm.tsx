import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  name: string;
  email: string;
  html: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [emailSent, setEmailSent] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  // Mutations
  const {
    mutateAsync: sendEmail,
    isLoading: sendEmailLoading,
    isSuccess: sendEmailSuccess,
  } = useMutation({
    mutationFn: async (variables: Inputs) => {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: variables.name,
          email: variables.email,
          html: variables.html,
        }),
      });
      if (res.status === 429) {
        setRateLimited(true);
        return;
      }
      return res.json();
    },
    onSuccess: () => {
      setEmailSent(true);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    sendEmail(data);
  };

  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      <span
        className={`${
          emailSent && !rateLimited ? "opacity-100" : "-mt-4 opacity-0"
        } dark:text-gray-200 text-gray-700 text-left font-medium transition-all duration-500 ease-in`}
      >
        Your message has been sent. Thank you!
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${
          emailSent && !rateLimited
            ? "invisble opacity-0"
            : "visible opacity-100"
        } flex w-full flex-col space-y-4 transition-all duration-100 ease-in`}
      >
        <div className="flex flex-col justify-center space-y-2">
          <label className="text-left text-lg font-medium" htmlFor={"name"}>
            Your Name
          </label>
          <input
            id="name"
            className="rounded-md border-2 dark:border-gray-600 border-gray-800 dark:bg-black bg-white px-3 py-2 focus:shadow-none focus:outline-violet-700 focus:ring-violet-700"
            type="text"
            placeholder="John"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <label className="text-left text-lg font-medium" htmlFor={"email"}>
            Your Email
          </label>
          <input
            id="email"
            className="rounded-md border-2 dark:border-gray-600 border-gray-800 dark:bg-black bg-white px-3 py-2 focus:shadow-none focus:outline-violet-700 focus:ring-violet-700"
            type="email"
            placeholder="john@company.co"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <label className="text-left text-lg font-medium" htmlFor={"html"}>
            Your Message
          </label>
          <textarea
            {...register("html", { required: true })}
            id={"html"}
            className="rounded-md border-2 dark:border-gray-600 border-gray-800 dark:bg-black bg-white px-3 py-2 focus:shadow-none focus:outline-violet-700 focus:ring-violet-700"
            placeholder={
              "Hey! Great work! Lets get together and build something!"
            }
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-[#965de9] to-[#6358ee] px-3 py-2 focus:shadow-none focus:outline-violet-700 font-medium text-gray-200  focus:ring-violet-700 disabled:opacity-30 md:w-[150px]"
          disabled={sendEmailLoading || sendEmailSuccess || rateLimited}
        >
          {sendEmailLoading ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin"
            >
              <path
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                stroke="black"
                strokeOpacity="0.3"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 3C16.9706 3 21 7.02944 21 12"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            "Send"
          )}
        </button>
      </form>
      {rateLimited && (
        <span className="mt-4 w-full text-center font-medium md:text-left">
          You&apos;ve sent too many emails. Please try again later.
        </span>
      )}
    </div>
  );
}
