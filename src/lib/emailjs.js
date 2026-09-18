import emailjs from "@emailjs/browser";

function requireEnv(name) {
  const value = import.meta.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}. Add it to .env and redeploy.`);
  }
  return value;
}

export async function sendContactForm(params) {
  const serviceId = requireEnv("VITE_EMAILJS_SERVICE_ID");
  const templateId = requireEnv("VITE_EMAILJS_TEMPLATE_ID");
  const publicKey = requireEnv("VITE_EMAILJS_PUBLIC_KEY");

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: params.name,
      company: params.company || "—",
      email: params.email,
      phone: params.phone || "—",
      topic: params.topic,
      message: params.message,
      reply_to: params.email,
    },
    { publicKey },
  );
}

export function isEmailJsConfigured() {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID
      && import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      && import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
}
