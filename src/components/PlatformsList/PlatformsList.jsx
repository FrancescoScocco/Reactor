import PlatformsLink from "../PlatformsLink/PlatformsLinks"


export default function PlatformsList({platforms}) {
    return (
        <ul className='d-flex flex-column list-unstyled '>
            {platforms && platforms.results.map(platform=> (
                <PlatformsLink key={platform.id} platform={platform} />
            ))}
        </ul>
    );
}