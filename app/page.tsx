import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <form role="search">
        <SearchInput />
      </form>
      <Button>Submit</Button>
      <Button size="sm">Submit</Button>
      <Button size="lg">Submit</Button>
      <Button size="icon">i</Button>
      <Button variant="destructive">Submit</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Submit</Button>
      <Button variant="secondary">Submit</Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        i
      </Button>
    </main>
  );
}
