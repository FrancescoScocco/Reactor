import Card from "../Card/Card"

export default function List({games}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {games.map(game => {
                        return (
                            <Card game={game} key={game.id}  />
                        )
                    })}
                </div>
            </div>
        </>
    )
}