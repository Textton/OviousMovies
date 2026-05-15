import MovieList from "@/components/MovieList";
import Player from "@/components/Player";
import SearchList from "@/components/SearchList";
import Trending from "@/components/Trending/Trending";
import TVPlayer from "@/components/TVPlayer";
import TVShowList from "@/components/TVShowList";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/Movies" element={<MovieList />} />
      <Route path="/TVShows" element={<TVShowList />} />
      <Route path="/search/:searchName" element={<SearchList />} />
      <Route path="/player/:playerId" element={<Player />} />
      <Route path="/tvplayer/:tvplayerId" element={<TVPlayer />} />
    </Routes>
  );
};

export default AllRoutes;