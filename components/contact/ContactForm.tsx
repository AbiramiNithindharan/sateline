"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { formVariants } from "@/lib/variants";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  getInterestOptions,
  budgetOptions,
  timelineOptions,
} from "@/lib/contact";
import { contactSchema, type ContactSchema } from "@/lib/contact";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { InputField, SelectField, TextareaField } from "../form";
import { LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const interestOptions = getInterestOptions();
  const interest = searchParams.get("ProjectType") ?? "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      company: "",
      ProjectType: "",
      budget: "",
      timeline: "",
      message: "",
    },
  });
  useEffect(() => {
    if (!interest) return;

    const exists = interestOptions.some((item) => item.value === interest);

    if (!exists) return;

    form.setValue("ProjectType", interest);
  }, [interest, interestOptions, form]);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);

      form.reset({
        name: "",
        email: "",
        company: "",
        ProjectType: interest,
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        rounded-3xl
        border
        bg-background
        p-8
        shadow-sm
        md:space-y-8
        space-y-4
      "
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <InputField
          id="name"
          label="Full Name"
          placeholder="John Doe"
          required
          registration={form.register("name")}
          error={form.formState.errors.name?.message}
        />
      </div>
      <div className="space-y-2">
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
          registration={form.register("email")}
          error={form.formState.errors.email?.message?.toString()}
        />
      </div>

      <div className="space-y-2">
        <InputField
          id="company"
          label="Company Name"
          placeholder="ABC Solutions Pvt Ltd"
          required
          registration={form.register("company")}
          error={form.formState.errors.company?.message?.toString()}
        />
      </div>

      <div className="space-y-2">
        <SelectField
          id="ProjectType"
          label="Project Type"
          placeholder="Select Project Type"
          required
          options={interestOptions}
          registration={form.register("ProjectType")}
          error={form.formState.errors.ProjectType?.message?.toString()}
        />
      </div>
      <div className="space-y-2">
        <SelectField
          id="budget"
          label="Budget Limit"
          placeholder="Select Budget(Optional)"
          options={budgetOptions}
          registration={form.register("budget")}
          error={form.formState.errors.budget?.message?.toString()}
        />
      </div>

      <div className="space-y-2">
        <SelectField
          id="timeline"
          label="Timeline for Project"
          placeholder="Select Timeline(Optional)"
          options={timelineOptions}
          registration={form.register("timeline")}
          error={form.formState.errors.timeline?.message?.toString()}
        />
      </div>

      <div className="space-y-2">
        <TextareaField
          id="message"
          label="Project Details"
          placeholder="Tell us about your project, business goals, required features, timeline, and any additional information..."
          required
          rows={6}
          registration={form.register("message")}
          error={form.formState.errors.message?.message?.toString()}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              className="
          mr-2
          h-4
          w-4
          animate-spin
        "
            />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  );
}
