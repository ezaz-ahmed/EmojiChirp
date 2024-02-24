import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className=" p-4 flex items-center justify-between relative">
      <aside>
        <Link href="/" className=" text-xl font-bold">
          Dorik
        </Link>
      </aside>

      <nav className=" hidden md:flex gap-6">
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/docs">Documentation</Link>
        <Link href="/feature">Feature</Link>
      </nav>

      <aside>
        <Link
          href="/agency"
          className=" bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
      </aside>
    </div>
  );
};

export default Navigation;
