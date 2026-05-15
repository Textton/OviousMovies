import { useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();

  if (!playerId) return <div>Missing player ID</div>;

  const movieURL = `https://www.vidking.net/embed/movie/${encodeURIComponent(playerId)}?autoPlay=true&color=0278fd`;

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        className="w-full h-full border-0"
        src={movieURL}
        title="Movie player"
        loading="lazy"
        referrerPolicy="no-referrer"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Player;