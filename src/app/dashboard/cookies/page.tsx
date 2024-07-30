import { TabBar } from "@/components/TabBar";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Cookies Page',
 description: 'Cookies Page',
};

export default function CookiesPage() {

    const cookieStorre = cookies();
    const cookieTab = cookieStorre.get('currentTab')?.value ?? '1';
    

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <div className="flex flex-col">
            <span className="text-3xl mb-3">Tabs</span>  
            <TabBar currentTab={Number(cookieTab)}/> 
        </div>
   


    </div>
  )
}
