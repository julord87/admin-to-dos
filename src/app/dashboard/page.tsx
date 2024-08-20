import WidgetItem from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if( !session ) {
    redirect('api/auth/signin');
  }

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Usuario conectado - Server side">

        <div className="mt-2 flex sm:flex-col sm:items-center sm:gap-2 justify-center gap-4">
          <span className="font-bold">{session?.user?.name}</span>
          <span>{session?.user?.email}</span>
        </div>

      </WidgetItem>
    </div>
  );
}
