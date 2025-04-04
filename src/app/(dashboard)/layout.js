

import DashboardSide from "@/components/DashboardSide";
const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-12 bg-gray-100 ">
                <aside className="col-span-2 bg-blue-200">
                    <DashboardSide/>
                </aside>
                <section className="col-span-10 ">
                   
                    {children}
                </section>
            </div>
        </>
    );
}
export default DashboardLayout