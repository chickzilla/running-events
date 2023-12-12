import SearchBar from "@/components/SearchBar";
import HomeCard from "@/components/HomeCard";
import Banner from "@/components/Banner";
import HomeHeader from "@/components/HomeHeader";

export default function Home() {
  return (
    <main className="bg-neutral-100 w-full h-[100vh] mt-[50px] flex flex-col justify-around items-center">
      <HomeHeader />
      <HomeCard />
      <SearchBar />
      <Banner />
    </main>
  );
}
