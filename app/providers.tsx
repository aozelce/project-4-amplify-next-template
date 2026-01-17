"use client";

import AuthenticatorWrapper from "./AuthenticatorWrapper";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatorWrapper>{children}</AuthenticatorWrapper>;
}
