import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Slider from "@/components/AnimeList/Slider";
import Top from "@/components/AnimeList/Top";
import { apiLibs, getNested, nested, reproduce } from "@/libs/apiLibs";

export default async function Home() {
  const topAnime = await apiLibs("top/anime", "limit=15");
  // let recommend = await getNested("recommendations/anime", "entry");
  // recommend = reproduce(recommend, 15);

  // let recomManga = await getNested("recommendations/manga", "entry");
  // recomManga = reproduce(recomManga, 15);

  // let popPromos = await getNested("watch/promos/popular", "entry");
  // popPromos = nested(popPromos, 15);

  // let promos = await getNested("watch/promos", "entry");
  // promos = nested(promos, 15);

  // let epi = await getNested("watch/episodes", "entry");
  // epi = nested(epi, 15);

  const seasonNow = await apiLibs("seasons/now", "limit=15");

  return (
    <>
      <Top api={seasonNow} />
      <section>
        <Header title="Popular Anime" linkTitle="Lihat Semua" linkHref="/popular" />
        <Slider api={topAnime} />
      </section>

      <section>
        <Header title="Seasons Now" linkTitle="" linkHref="" />
        <Slider api={seasonNow} />
      </section>

      {/* <section>
        <Header title="Rekomendasi" linkTitle="" linkHref="" />
        <Slider api={recommend} />
      </section>

      <section>
        <Header title="Popular Promos" linkTitle="" linkHref="" />
        <Slider api={popPromos} />
      </section>

      <section>
        <Header title="Promos" linkTitle="" linkHref="" />
        <Slider api={promos} />
      </section>

      <section>
        <Header title="Anime with Episode" linkTitle="" linkHref="" />
        <Slider api={epi} />
      </section> */}
    </>
  );
}
