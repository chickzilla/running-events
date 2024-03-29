//import { BackendUrl } from "@/const";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getEventsByProvince(province: string) {
  //console.log("backend url", BackendUrl);

  const response = await fetch(
    `${BackendUrl}/event/province?province=${province}`
  );
  if (!response.ok) {
    throw new Error("Fail to fetch event by province");
  }

  return await response.json();
}
