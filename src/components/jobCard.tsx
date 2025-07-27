//@ts-nocheck
"use client";

import { Button } from "@radix-ui/themes";
import Link from "next/link";
import SaveBtn from "./saveBtn";

export default function JobCard({ job }) {
  // console.log(job)

  return (
    
      <div
        style={{
          height: 300,
          width: 200,
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 8,
        }}
      >
        <Link style={{height: "80%",}} href={`/jobs/${job.job_id}`}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: 14,
              // alignSelf:"center"
            }}
          >
            {job.job_title}
          </h2>
          <p>{job.employer_name}</p>
          <h2>{job.job_employment_type}</h2>
        </div>
        </Link>
        <SaveBtn job={job}/>
        
      </div>
    
  );
}
