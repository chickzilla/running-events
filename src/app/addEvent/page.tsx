"use client";

import CreateEventForm from "@/components/CreateEvent/CreateEventForm";
import DetailForm from "@/components/CreateEvent/DetailForm";
import DateandLocationForm from "@/components/CreateEvent/DateandLocationForm";
import PackageForm from "@/components/CreateEvent/PackageForm";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Event } from "@/interface";
import { useRouter } from "next/navigation";
import uploadFile from "@/libs/uploadFile";
import createEvent from "@/libs/createEvent";

export default function CreateEventPage() {
  const [selectName, setSelectName] = useState<string>("");
  const [selectType, setSelectType] = useState<string[]>([]);
  const [allDescription, setAllDescription] = useState<string>("DESCRIPTION");
  const [selectProvince, setSelectProvince] = useState<string>("Bangkok");
  const [selectDate, setSelectDate] = useState<string>("");
  const [selectTime, setSelectTime] = useState<string>("");
  const [selectPackage, setSelectPackage] = useState<string[]>([]);
  const [selectPicture, setSelectPicture] = useState<string>("No picture");
  const [selectlatitude, setSelectlatitude] = useState<number>(11.0);
  const [selectlongitude, setSelectlongitude] = useState<number>(11.0);

  const [selectPictureFile, setSelectPictureFile] = useState<File | null>(null);

  const router = useRouter();

  const [submit, setSubmit] = useState<boolean>(false);

  const SubmitHandler = async () => {
    setSubmit(true);
    if (
      !selectName ||
      !selectType ||
      !allDescription ||
      !selectProvince ||
      !selectDate ||
      !selectTime ||
      !selectPackage ||
      !selectPictureFile ||
      !selectlatitude ||
      !selectlongitude
    ) {
      alert("Please fill all information");
    } else {
      const data: Event = {
        id: "0",
        name: selectName,
        type: selectType,
        description: allDescription,
        province: selectProvince,
        date: selectDate,
        time: selectTime,
        package: selectPackage,
        picture: selectPicture,
        latitude: selectlatitude,
        longitude: selectlongitude,
      };
      try {
        const file = await uploadFile(selectPictureFile);
        //console.log(file.url);
        data.picture = file.url;
        const response = await createEvent(data);
        //console.log(response);
        router.push("/");
        //console.log(selectPictureFile);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="bg-neutral-100 w-full h-[250vh] flex flex-col items-center py-[70px] text-black">
      <div className="w-[100%] h-[100%] flex flex-col items-center pt-[60px] space-y-10">
        <div className="text-4xl text-black font-semibold w-[60%] h-[5%]">
          New Event
        </div>
        <CreateEventForm
          SetParentName={(value: string) => {
            setSelectName(value);
          }}
          SetParentType={(value: string[]) => {
            setSelectType(value);
          }}
        />
        <DetailForm
          setParentDescription={(value: string) => {
            setAllDescription(value);
          }}
          setParentPicture={(value: File) => {
            setSelectPictureFile(value);
          }}
        />
        <DateandLocationForm
          setParentDate={(value: string) => {
            setSelectDate(value);
          }}
          setParentProvince={(value: string) => {
            setSelectProvince(value);
          }}
          setParentTime={(value: string) => {
            setSelectTime(value);
          }}
        />
        <PackageForm
          setParentPackage={(value: string[]) => {
            setSelectPackage(value);
          }}
        />
        <div className="w-[60%] h-[5%] flex flex-col items-center ">
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100%" }}
            onClick={SubmitHandler}
            className="hover:bg-[#CD5C5C] bg-[#B22222] text-xl text-white"
          >
            Add new
          </Button>
        </div>
      </div>
    </main>
  );
}
