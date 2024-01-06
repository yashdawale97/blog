export default function About({isHome}) {
    return (<div>
        About
        <p>You are in {isHome ? "Home" : "About"} page</p>
    </div>)
}