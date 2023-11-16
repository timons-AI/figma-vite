import { Button } from "@/components/ui/button";
import { DatePickerDemo } from "./date-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog } from "lucide-react";

const Hero = () => {
  return (
    <div className="self-stretch grow shrink basis-0 p-10 bg-white rounded-[14px] border border-zinc-300 flex-col justify-start items-start gap-2.5 flex">
      <div className="  flex p-3 justify-start items-start gap-2.5 w-full">
        <p className="text-2xl font-bold"> Zone Management </p>
      </div>
      {/* <div className=" rounded-[14px] border border-zinc-300 grid grid-cols-3 grid-rows-1 divide-x justify-start items-start  w-full">
        <div className="  p-2 flex items-center justify-items-center  ">
          <Button className=" w-full" variant="outline">
            Button
          </Button>
        </div>
        <div className="  p-2 flex items-center justify-items-center  ">
          <Button className=" w-full" variant="outline">
            Button
          </Button>
        </div>
        <div className="  p-2 flex items-center justify-items-center  ">
          <Button className=" w-full" variant="outline">
            Button
          </Button>
        </div>
      </div> */}
      <Tabs defaultValue="account" className=" w-full">
        <TabsList className=" w-full h-[60px] p-2  items-center">
          <TabsTrigger className=" flex-grow h-full" value="account">
            Account
          </TabsTrigger>
          <TabsTrigger className=" flex-grow h-full" value="password">
            Password
          </TabsTrigger>
          <TabsTrigger className=" flex-grow h-full" value="movie">
            Movie
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="movie">Change your movie here.</TabsContent>
      </Tabs>

      <div className=" rounded-[14px] border border-zinc-300 flex p-3 items-center flex-col gap-2.5 h-full w-full">
        <div className="p-3 w-full flex justify-between items-center gap-2.5">
          <p className=" text-zinc-500 font-semibold">Recommendation Date</p>
        </div>
        <div className="p-3 w-full flex flex-col justify-between  md:flex-row items-center gap-2.5 ">
          <DatePickerDemo />
          <Button variant="ghost" className=" w-full md:w-[200px] flex  gap-3">
            <Cog />
            Field Parameters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
