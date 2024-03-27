export default function Header({title= 'I nostri Giochi',}) {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-2">{title}</h1>
                </div>
            </div>
        </div>
    )
}