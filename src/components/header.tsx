import SearchBar from "./searchBar";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import LogoutButton from "./logoutButton";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        // flexDirection:"column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        padding: "0px 10px",
      }}
    >
      <Link href={"/"}>
        <h1>FindBestJob</h1>
      </Link>
      <SearchBar />
      <div className="flex gap-1">
        <LogoutButton />
        <Link href={"/savedJobs"}>
          {" "}
          <Button>SavedJobs</Button>
        </Link>
      </div>

      {/* <h1>SavedJobs</h1> */}
    </div>
  );
}
