import WidgetItem from "@/components/WidgetItem";
import getServerSession from "next-auth"; // Importa getServerSession directamente
import { authOptions } from "../../../auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if(!session) redirect("/api/auth/signin");

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title={""} children={undefined}>
        {/* Contenido del WidgetItem */}
      </WidgetItem>
    </div>
  );
}
