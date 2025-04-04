import CardComponent from "@/components/card";
import DashboardHeader from "@/components/DashboardHeader";
import TopHeader from "@/components/TopHeader";
import { getUser } from "../../../../service/workspace-service";

export default async function DashbaordPage({searchParams}) {
  const user = await getUser(); 
  const title = (await searchParams).name || 'HRD Design';
  const token = user?.token;
  console.log("user name==========",user.payload.username);

  return (
    <>
      <DashboardHeader title={title} name={user.payload.username} email={user.payload.email} profile={user.payload.profile}/>
      <div className="w-[90%] m-auto flex justify-between mt-6">
        <TopHeader title="HRD Design" token={token} />
      </div>
      <div className="grid grid-cols-3 w-[90%] m-auto">
        <CardComponent />
      </div>
    </>
  );
}
