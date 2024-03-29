const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function getEventsByOrganizer(
  organizerUsername: string,
  token: string
) {
  /*await new Promise((resolve) => {
    setTimeout(resolve, 4000);
  });*/
  const response = await fetch(
    `${BackendUrl}/event/organizer?organizer=${organizerUsername}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Fail to fetch event by organizer");
  }

  return await response.json();
}
