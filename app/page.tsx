import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <Link href={"/auth/signin"}>You can Log In</Link>;
  } else {
    return (
      <div>
        <button className="bg-red-800 p-4 rounded">Hello World</button>
        <Link href={"/auth/signout"}>You can Log Out</Link>;
      </div>
    );
  }
}
