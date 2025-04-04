import React from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import TopHeader from '@/components/TopHeader'
import CardComponent from '@/components/card'
import { getUser } from '../../../../service/workspace-service'
    export default async function DetailWorkspace({searchParams}) {
      const user = await getUser(); 
      
      console.log("user name==========",user.payload.username);
      const title = (await searchParams).name || 'HRD Design';
    
    const id = (await searchParams).id || ''
  return (
    <>
          <DashboardHeader title={title} name={user.payload.username} email={user.payload.email} profile={user.payload.profile}/>
      <div className=" w-[90%] m-auto flex justify-between mt-6">
          <TopHeader id={id} title={title}/>
      </div>
      <div className="grid grid-cols-3 w-[90%] m-auto">
            {/* <CardComponent/> */}
        
      </div>
    </>
  )
}
