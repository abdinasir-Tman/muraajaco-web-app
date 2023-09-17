import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muraajaco waa mobile app kaas oo loogu talagalay in ardeyda f4 ee soomaliya ka faideystaan.",
};

export default function About() {
  return (
    <h1 className="text-4xl text-pink-600 flex items-center justify-center">
      About Muraajaco App
    </h1>
  );
}
