import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function OrganizeDetail({
  eventDetail,
}: {
  eventDetail: string;
}) {
  return (
    <div className="w-[70%] text-black dark:text-gray-200 space-y-5 ">
      <h1 className="text-2xl font-bold">About the Event 🏃‍♂️🌟</h1>
      <div className="text-base indent-16 text-gray-800 dark:text-gray-300 w-[100%]">
        {eventDetail}
      </div>
    </div>
  );
}
