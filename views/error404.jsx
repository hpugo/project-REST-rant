const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="/images/404.jpeg" alt="kevin James Meme" class="foFOfo"></img>
            </main>
        </Def>
    )
}

module.exports = error404