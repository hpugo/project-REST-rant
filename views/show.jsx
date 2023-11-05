const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <ul>
                    <li>{data.place.pic}</li>
                    <li>{data.place.city}</li>                    
                    <li>{data.place.state}</li>
                    <li>{data.place.cuisine}</li>
                </ul>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
            
        </Def>
    )
}
module.exports = show