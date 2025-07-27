//@ts-nocheck
"use client"

import Header from "@/components/header";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useState , useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import auth from "@/services/firebaseAuth";

const UserContext = createContext<User>();
export const SavedJobsContext = createContext(null)

export default function Layout({ children }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
//   const [isSaved,setIsSaved] = useState(false)
    const [savedJobs,setSavedJobs] = useState([])
  const router = useRouter();
    console.log(savedJobs);
    
  useEffect(function () {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ...
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        // ...
        router.push("/signin");
      }
      //   setLoading(false)

      // if(!user){
      //   router.push("/signin")
      // }
    });

    const saveJobsToContext = ()=>{
        let jobsInLocalStorage = localStorage.getItem("savedJobs")
        jobsInLocalStorage = jobsInLocalStorage ? JSON.parse(jobsInLocalStorage) : [];
        setSavedJobs(jobsInLocalStorage)
        console.log(savedJobs);
        
    }

    saveJobsToContext();
    return () => unsuscribe();
  }, []);

  //   if (!user) {
  //     return (
  //       <div>
  //         <h1>Loading...</h1>
  //       </div>
  //     );
  //   }
  return (
    <UserContext.Provider value={user}>
        <SavedJobsContext.Provider value={{savedJobs,setSavedJobs}}>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
            <Header />
            { children }
        </div>
        
      )}
      </SavedJobsContext.Provider>
    </UserContext.Provider>
  );
}
