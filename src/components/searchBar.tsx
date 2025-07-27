//@ts-nocheck
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function SearchBar(){
    const [search,setSearch] = useState("")
    const router = useRouter()
    function handleSubmit(e){
        e.preventDefault();

        if(!search) return;

        router.push(`/search?query=${search}`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" name="query" placeholder="Enter your choice.."/>
                <button>Find</button>
            </form>
        </div>
    )
}