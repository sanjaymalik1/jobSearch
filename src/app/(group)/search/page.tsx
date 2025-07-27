//@ts-nocheck
import JobCard from "@/components/jobCard";
import Link from "next/link";

// async function fetchJobs(query,page=1) {
//   const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}&num_pages=1&country=us&date_posted=all`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "a3b0e1b27cmsh8eef118d54daa23p1842a5jsn1b2d49aada41",
//       "x-rapidapi-host": "jsearch.p.rapidapi.com",
//     },
//   };

//   const response = await fetch(url, options);
//   console.log(response);

//   const result = await response.json();
//   console.log(response);

//   const data = result.data;
//   return data;
// }

async function fetchJobs(query, page = 1) {
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}&num_pages=1&country=us&date_posted=all`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a3b0e1b27cmsh8eef118d54daa23p1842a5jsn1b2d49aada41",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    // 1. Check if the API request was successful
    if (!response.ok) {
      console.error(
        "Failed to fetch jobs:",
        response.status,
        response.statusText
      );
      return []; // Return an empty array on failure to prevent crash
    }

    const result = await response.json();

    // 2. Ensure result.data exists and is an array before returning
    return result.data || [];
  } catch (error) {
    console.error("An error occurred while fetching jobs:", error);
    return []; // Return an empty array on any other error
  }
}

export default async function Search({ searchParams }) {
  const query = searchParams.query;
  const page = searchParams.page || 1;
  if (!query) {
    return (
      <div>
        <h1>Are you looking for jobs?</h1>
        <h1>Search for your prefences</h1>
      </div>
    );
  }
  const data = await fetchJobs(query, page);
  console.log(data);

  return (
    <div>
      <div>
        {data.map((job) => {
          return <JobCard key={job.job_id} job={job} />;
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {page > 1 && (
          <Link
            href={`/search?query=${query}&page=${page - 1}`}
            style={{
              width: 40,
              height: 40,
            }}
          >
            Prev
          </Link>
        )}

        <Link
          href={`/search?query=${query}&page=1`}
          style={{
            width: 40,
            height: 40,
          }}
        >
          1
        </Link>

        <Link
          href={`/search?query=${query}&page=2`}
          style={{
            width: 40,
            height: 40,
          }}
        >
          2
        </Link>

        <Link
          href={`/search?query=${query}&page=3`}
          style={{
            width: 40,
            height: 40,
          }}
        >
          3
        </Link>

        <Link
          href={`/search?query=${query}&page=4`}
          style={{
            width: 40,
            height: 40,
          }}
        >
          4
        </Link>

        <Link
          href={`/search?query=${query}&page=5`}
          style={{
            width: 40,
            height: 40,
          }}
        >
          5
        </Link>

        {page < 5 && (
          <Link
            href={`/search?query=${query}&page=${parseInt(page) + 1}`}
            style={{
              width: 40,
              height: 40,
            }}
          >
            Next
          </Link>
        )}

        {page != 1 && (
          <Link
            href={`/search?query=${query}&page=1`}
            style={{
              width: 50,
              height: 40,
            }}
          >
            Home
          </Link>
        )}
      </div>
    </div>
  );
}
