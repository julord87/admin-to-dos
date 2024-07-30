import { TabBar } from "@/components/TabBar";


export const metadata = {
 title: 'Cookies Page',
 description: 'Cookies Page',
};

export default function CookiesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <div className="flex flex-col">
            <span className="text-3xl mb-3">Tabs</span>  
            <TabBar /> 
        </div>
   


    </div>
  )
}
