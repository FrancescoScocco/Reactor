import { Link } from 'react-router-dom';

export default function GenreLink({ genre }) {
    return (
        <li className="mb-2">
            <Link className='text-color text-decoration-none me-4' to={`/genre/${genre.slug}`}>{genre.name}</Link>
        </li>
    );
}
