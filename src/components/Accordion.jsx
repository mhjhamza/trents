import React,{useEffect, useState} from 'react'

const Accordion = ({val,disable,jobs}) => {
    const [toggle,setToggle] = useState(false)  
    // console.log(val["FutureJobPredictions"])
    useEffect(()=>{
      if(disable){
        setToggle(false)
      }
    },[jobs])
  return (
    <div className="w-full bg-bg border-[1px] border-[#ECECEC] my-8 py-2 border-opacity-90">
          <div className="flex justify-between items-center p-2">
            <p className="text-lg font-medium">{jobs==""?val.JobsTrendingNowByIndustry:val[jobs]}</p>
            {!disable && <button className="bg-primary text-card text-2xl font-medium w-8 pb-1" onClick={()=>setToggle(val=>!val)}>{toggle?"-":"+"}</button>}
          </div>
          <div className={`${toggle ? "max-h-80": "max-h-0"} overflow-hidden transition-all duration-500`}>
            <div className='px-4 py-2'>
              <p className="text-medium font-medium text-primary py-1">Job Description</p>
              <p>{val.JobDescription}</p>
            </div>
            <div className="my-4 px-4 py-2">
            <p className="text-medium font-medium text-primary py-1">Profession Wage Per Area</p>
            <p>{val.ProfessionWagePerArea}</p>
            </div>
            <div className='px-4 py-2'>
              <p className="text-medium font-medium text-primary py-1">Living Wage Per Area</p>
              <p>{val.LivingWagePerArea}</p>
            </div>
          </div>
        </div>
  )
}

export default Accordion