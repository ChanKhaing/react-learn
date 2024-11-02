// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Input,
  Radio,
  RadioGroup,
  Textarea,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

import { Pencil, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Controller } from "react-hook-form";

export default function Editprofilechan() {
  const profile = {
    name: "Maung Gyi",
    role: "Super Admin",
    username: "@maunggyi",
    gender: "Male",
    phone: "0912345678",
    email: "maunggyi@gmail.com",
    address: "No.13, Mingalar Street, Yangon.",
    avatarUrl: "/placeholder.svg",
  };
  return (
    <div className="container p-4 mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm mb-6">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          App
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          Admin
        </Link>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
        <span className="text-foreground">Edit profile</span>
      </nav>

      <div className="grid md:grid-cols-[1fr,300px] gap-6  ">
        {/* Main Content */}
        <Card className=" pl-[56px] w-[773px] h-[572px]">
          <h1 className="text-3xl font-semibold ">Edit profile</h1>

          {/* Content edit profile input box here start  */}
          <div className="flex flex-col w-[669px] h-[358px]   gap-[24px] mt-[24px]">
            <div className="flex">
              <label className="flex items-center text-lg justify-center pr-[18px]">
                Name
              </label>
              {/* <div className="w-[529px] h-[42px] border border-hidden"> */}
              <Input className="   bg-red-500 border border-hidden" />
              {/* </div> */}
            </div>
            <div className="flex">
              <label className="flex items-center text-lg justify-center pr-[18px]">
                Email
              </label>
              <Input className="  " placeholder="Enter text" />
            </div>{" "}
            <div className="flex">
              <label className="flex items-center text-lg justify-center pr-[18px]">
                Phone
              </label>
              <Input className="  w-[529px] h-[42px] " />
            </div>{" "}
            <div className="flex">
              <label className="flex items-center text-lg justify-center pr-[18px]">
                Gender
              </label>
              <RadioGroup orientation="horizontal">
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
              </RadioGroup>
            </div>
            <div className="flex">
              <label className="flex items-center text-lg justify-center pr-[18px]">
                Address
              </label>
              <Textarea
                isDisabled
                labelPlacement="outside"
                placeholder="Enter your description"
                defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                className="max-w-xs"
              />
            </div>
          </div>
          {/* Content edit profile  input box here end  */}
        </Card>

        {/* Sidebar */}
        <div className="space-y-4 w-[280px] h-[135px]  ml-[44px] z-">
          <nav className="flex flex-col space-y-2">
            <Button
              href="/account/edit"
              variant="light"
              className="justify-start"
            >
              Account Information
            </Button>
            <Button
              href="/account/edit"
              variant="light"
              className="justify-start"
            >
              Edit Profile
            </Button>
            <Button
              href="/account/password"
              variant="light"
              className="justify-start"
            >
              Change Password
            </Button>
          </nav>
        </div>
        {/* Sidebar end  */}
      </div>
    </div>
  );
}
