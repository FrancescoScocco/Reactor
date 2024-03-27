import GenreLink from "../GenreLink/GenreLink";

export default function GenreList({ genres }) {
    return (
        <ul className='d-flex flex-column list-unstyled '>
            {genres && genres.results.map(genre => (
                <GenreLink key={genre.slug} genre={genre} />
            ))}
        </ul>
    );
}
