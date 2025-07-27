//@ts-nocheck
"use client";

import { Button } from "@radix-ui/themes";
import { useContext, useEffect, useState } from "react";
import { SavedJobsContext } from "@/app/(group)/layout";

export default function SaveBtn({ job }) {
    const {savedJobs,setSavedJobs} = useContext(SavedJobsContext);
    const [isSaved,setIsSaved] = useState(false)

    useEffect(()=>{
        // let preJobs = localStorage.getItem("savedJobs");
        // preJobs = preJobs ? JSON.parse(preJobs) : [];
        console.log(savedJobs);
        
        const isAlreadySaved = savedJobs?.find((elem) => elem.job_id === job.job_id);

        if(isAlreadySaved){
            setIsSaved(true)
        }
    },[])

    function handleUnsave(){
        // let preJobs = localStorage.getItem("savedJobs");
        // preJobs = preJobs ? JSON.parse(preJobs) : [];

        const updatedArray = [...savedJobs].filter((item) => item.job_id != job.job_id)

        localStorage.setItem("savedJobs", JSON.stringify(updatedArray))
        setSavedJobs(updatedArray);
        setIsSaved(false)
    }

  function handleSave() {
    // let preJobs = localStorage.getItem("savedJobs");
    // preJobs = preJobs ? JSON.parse(preJobs) : [];

    const updatedArray = savedJobs.push(job);
    localStorage.setItem("savedJobs", JSON.stringify(updatedArray));

    setSavedJobs(updatedArray)
    setIsSaved(true)

    // const isAlreadySaved = preJobs.find((elem) => elem.job_id === job.job_id);
    // if (!isAlreadySaved) {
      

      
    // }
    
  }
  return(
    <div>
        {
        isSaved ? <Button onClick={handleUnsave}>Unsave</Button> : <Button onClick={handleSave}>Save</Button>
        }
    </div>
    
    )
}
