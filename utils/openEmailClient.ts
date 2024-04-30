// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

export const openEmailClient = ({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) => {
  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    body
      .trim()
      .split("\n")
      .map((s) => s.trim())
      .join("\n")
  ).replaceAll("%0A", "%0D%0A")}`;

  console.log(mailtoLink);

  window.open(mailtoLink);
};
