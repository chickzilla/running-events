import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function HomeCardItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-center m-auto">
      <div className="w-full h-[60%]">
        <DirectionsRunIcon
          className="icon transition-transform transform-gpu hover:scale-110 hover:cursor-pointer"
          sx={{ color: "red", width: "100%", height: "100%" }}
        />
      </div>
      <div className="text-black h-[20%] w-full">{title}</div>
      <div className="text-black text-gray-500 h-[20%] w-full">
        {description}
      </div>
    </div>
  );
}