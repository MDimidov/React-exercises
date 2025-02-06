export function Games({
    name,
    imgUrl,
    genre,
}) {
    return (
        <div className="allGames-info">
            <img src={imgUrl} />
            <h6>{genre}</h6>
            <h2>{name}</h2>
            <a href="#" className="details-button">Details</a>
        </div>
    )
}