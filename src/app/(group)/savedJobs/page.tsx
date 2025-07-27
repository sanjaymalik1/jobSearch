//@ts-nocheck
"use client"
import { useContext, useEffect, useState } from "react"
import JobCard from "@/components/jobCard";
import { SavedJobsContext } from "../layout";

export default function SavedJobs(){
    // const [savedJobs,setSavedJobs] = useState([])
    const {savedJobs} = useContext(SavedJobsContext)

    // useEffect(()=>{
    //     let storedJobs = localStorage.getItem("savedJobs");
    //     storedJobs = storedJobs ? JSON.parse(storedJobs) : [];
    //     setSavedJobs(storedJobs)
    // },[])
    if(!savedJobs){
        return(
            <div>
                <h1>You haven't saved any job yet!</h1>
            </div>
        )
    }
    return(
        <div>
            <h1>Your Saved Jobs:</h1>
            {
                savedJobs.map((job)=>{
                    return <JobCard key={job.job_id} job={job}/>
                })
            }
        </div>
    )
}