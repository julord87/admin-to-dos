import WidgetItem from "@/components/WidgetItem";
import {SignIn} from "@/components/Sign-in";

export default function DashboardPage() {
  return (
    <div className="gird gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title={""} children={undefined} />
      <SignIn />
    </div>
  );
}