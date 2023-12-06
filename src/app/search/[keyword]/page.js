import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { apiLibs } from "@/libs/apiLibs";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await apiLibs("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <h1 className="text-color-primary text-2xl">Search Movies</h1>
        <Header title={`Pencarian untuk ${decodedKeyword}`} linkTitle="" linkHref="" />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
