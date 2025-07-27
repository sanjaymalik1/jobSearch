//@ts-nocheck
import { data } from "@/mockdata";
import JobCard from "@/components/jobCard";

async function fetchParticularJob(id) {
  const url =
    `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&country=us`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a3b0e1b27cmsh8eef118d54daa23p1842a5jsn1b2d49aada41",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url,options);
  const job = await response.json();
  return job.data[0];
}
export default async function Home({ params }) {
  const id = decodeURIComponent(params.id);

  const job = await fetchParticularJob(id);
  console.log(job);
  
//   console.log(id);

  // const job = data.find((job)=> job.job_id == id)

  // console.log(job)
  return (
    <JobCard job={job}/>
  );
}
