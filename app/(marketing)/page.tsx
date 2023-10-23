import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Notion clone</h1>
      <p>
        <Link href="/test">
          <Button variant="default" size="sm">
            Send the ping
          </Button>
        </Link>
      </p>
    </main>
  );
}
