"use client";

import { motion } from "framer-motion";
import { formVariants } from "@/lib/variants";
import { projectTypes } from "@/lib/projectTypes";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, ContactFormValues } from "./contactSchema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
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

      form.reset();
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
        space-y-12
      "
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Input placeholder="Your Name" {...form.register("name")} />

      <Input placeholder="Email Address" {...form.register("email")} />

      <Input placeholder="Company Name" {...form.register("company")} />

      <select
        {...form.register("projectType")}
        className="
          h-10
          w-full
          rounded-md
          border
          bg-background
          px-3
        "
      >
        <option value="">Select Project Type</option>

        {projectTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <Textarea
        rows={6}
        placeholder="Tell us about your project..."
        {...form.register("message")}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
