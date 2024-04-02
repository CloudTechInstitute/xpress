import Booking from "@/components/booking-form";
import Credit from "@/components/credit-form";
import Trips from "@/components/dataTable";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Userprofile from "@/components/user-profile";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export default function Profile() {
  return (
    <div className="bg-gray-100 h-screen w-full ">
      <div className="max-w-6xl flex justify-center gap-4 p-4">
        <div className="hidden md:block md:w-[20%]">
          <Card>
            <CardContent>
              <div className="bg-white py-3">
                <div className="flex justify-between items-center mb-2">
                  <div>Info</div>
                  <div className="text-xl">
                    <PiDotsThreeVerticalBold />
                  </div>
                </div>
                <div className="flex justify-center items-center mb-2">
                  <div className="h-32 w-32 rounded-full bg-gray-300 "></div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm font-bold">Master Xdee</p>
                  <p className="text-gray-400 text-xs">Director</p>
                </div>
                <hr></hr>
                <div className="mt-3">
                  <p className="text-gray-400 text-xs">Gender</p>
                  <p className="text-sm">Male</p>
                </div>
                <div className="mt-3">
                  <p className="text-gray-400 text-xs">Age</p>
                  <p className="text-sm">20 years</p>
                </div>
                <div className="mt-3">
                  <p className="text-gray-400 text-xs">Area</p>
                  <p className="text-sm">Ashaiman</p>
                </div>
                <div className="mt-3">
                  <p className="text-gray-400 text-xs">Telephone</p>
                  <p className="text-sm">059 241 9783</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-[80%]">
          <div className="flex justify-between gap-5 mb-4">
            <Card className="bg-white p-4 w-full">
              <CardContent>
                <p className="mb-2 uppercase text-xs text-gray-400">
                  Current status
                </p>
                <p className="text-md">Online</p>
              </CardContent>
            </Card>
            <Card className="bg-white p-4 w-full">
              <CardContent>
                <p className="mb-2 uppercase text-xs text-gray-400">
                  Current Balance
                </p>
                <p className="text-md">Ghc 500.00</p>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Tabs defaultValue="book" className="w-full">
              <TabsList className="grid w-full grid-cols-4 p-0">
                <TabsTrigger value="book">Book</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="credit">Credit</TabsTrigger>
                <TabsTrigger value="table">Trips</TabsTrigger>
              </TabsList>
              <TabsContent value="book">
                <Booking />
              </TabsContent>
              <TabsContent value="profile">
                <Userprofile />
              </TabsContent>
              <TabsContent value="credit">
                <Credit />
              </TabsContent>
              <TabsContent value="table">
                <Trips />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
