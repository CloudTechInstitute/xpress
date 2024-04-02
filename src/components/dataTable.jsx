import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Trips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md text-gray-400">Recent trips</CardTitle>
        <CardDescription>Display data table here</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}
