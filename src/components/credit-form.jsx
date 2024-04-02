import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Credit() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md text-gray-400">Buy Credit</CardTitle>
        <CardDescription>Buy credits to be used later</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="md:flex justify-center items-center gap-4 mb-4">
            <input
              type="text"
              className="p-2 outline outline-1 outline-gray-200 rounded w-full mb-4 md:mb-0"
              placeholder="enter amount"
            />
            <input
              type="text"
              className="p-2 outline outline-1 outline-gray-200 rounded w-full"
              value="50 travels"
              disabled
            />
          </div>
          <input
            type="text"
            className="p-2 outline outline-1 outline-gray-200 rounded w-full"
            placeholder="enter phone number"
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}
