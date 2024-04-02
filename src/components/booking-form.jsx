import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Booking() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md text-gray-400">Book ride</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="md:flex justify-between gap-4">
          <div className="w-full mb-4 md:mb-0">
            <label className="text-xs text-gray-400">
              Pick Up point
            </label>
            <select className="p-2 outline outline-1 outline-gray-200 rounded w-full">
              <option dsabled hidden selected>
                Choose one
              </option>
              <option>Adjiringanor</option>
              <option>Circle</option>
              <option>Ashaiman</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-xs text-gray-400">
              Drop Off
            </label>
            <select className="p-2 outline outline-1 outline-gray-200 rounded w-full">
              <option dsabled hidden selected>
                Choose one
              </option>
              <option>Ashaiman</option>
              <option>Tema</option>
              <option>Spintex</option>
            </select>
          </div>
        </div>
        <div className="">
          <label className="text-xs text-gray-400">Choose Vehicle</label>
          <select className="p-2 outline outline-1 outline-gray-200 rounded w-full">
            <option dsabled hidden selected>
              Choose one
            </option>
            <option>GT-1440-23 | 8:30am</option>
            <option>GT-1440-23 | 8:30am</option>
            <option>GT-1440-23 | 8:30am</option>
          </select>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Book</Button>
      </CardFooter>
    </Card>
  );
}
