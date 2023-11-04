const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pineapple.jpg" alt="pineapple" width="100px" height="100px" />
                    <div>Photo by <a href="AUTHOR_LINK">Fernando Andrade</a> on <a href="https://unsplash.com/photos/ripe-pineapple-fruit-nAOZCYcLND8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
                </div>
            <a href ="/places">
                <button className="btn-primary">Places Page</button>
            </a>
            </main>
        </Def>
    )
}

module.exports = home