import { AuthBranding } from "@/components/auth/AuthBranding";
import { AuthForms } from "@/components/auth/AuthForms";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full overflow-hidden">
      <AuthBranding />
      <AuthForms />
    </main>
  );
}
