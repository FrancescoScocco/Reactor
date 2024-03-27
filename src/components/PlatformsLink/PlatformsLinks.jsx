import { Link } from 'react-router-dom';

export default function PlatformsLink({ platform }) {
    return (
        <li className="mb-2">
            <Link className='text-color text-decoration-none me-4' to={`/platform/${platform.id}`} >{platform.name}</Link> 
        </li>
    );
}
