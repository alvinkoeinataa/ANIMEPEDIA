import FavChar from "@/components/AnimeList/FavChar";
import Header from "@/components/AnimeList/Header";

import { apiLibs } from "@/libs/apiLibs";

export default async function Char() {
  const charData = await apiLibs("top/characters");

  return (
    <>
      <section>
        <Header title="Favourite Characters" linkTitle="" linkHref="" />
        <FavChar api={charData} />
      </section>
    </>
  );
}
