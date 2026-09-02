import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { services, site } from "@/lib/site";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(25),
  email: z.string().trim().email("Enter a valid email").max(255),
  address: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us briefly what's happening").max(1200),
});

const field =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Request received. We'll call you back shortly.", {
        description: `Need it handled now? Call ${site.phone} — we answer 7AM to 7PM daily.`,
      });
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="firstName" placeholder="First name *" error={errors['firstName']} />
        <Field name="lastName" placeholder="Last name *" error={errors['lastName']} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field name="phone" type="tel" placeholder="Phone number *" error={errors['phone']} />
        <Field name="email" type="email" placeholder="Email *" error={errors['email']} />
      </div>
      <Field name="address" placeholder="Service address" error={errors['address']} />
      <div>
        <select name="service" defaultValue="" className={field} aria-label="Service needed">
          <option value="">Service needed?</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us what the door is doing *"
          className={field}
        />
        {errors['message'] && <p className="mt-1 text-xs text-destructive">{errors['message']}</p>}
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-md bg-primary px-6 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "Sending…" : "Request my free estimate"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Or call <a href={site.phoneHref} className="font-semibold text-foreground">{site.phone}</a> — open daily 7AM–7PM.
      </p>
    </form>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  placeholder: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <input name={name} type={type} placeholder={placeholder} aria-label={placeholder} className={field} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
