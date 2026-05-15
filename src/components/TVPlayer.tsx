import { useParams } from "react-router-dom";

const TVPlayer = () => {
  const { tvplayerId } = useParams();

  if (!tvplayerId) return <div>Missing TV player ID</div>;

  const movieURL = `https://www.vidking.net/embed/tv/${encodeURIComponent(tvplayerId)}/1/1`;

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        className="w-full h-full border-0"
        src={movieURL}
        title="TV show player"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TVPlayer;