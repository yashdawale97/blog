export default function Home({ heading, name, isHome }) {
  return (
    <>
      <h1>{heading}</h1>
      <p>Mr. {name}</p>
      <p>You are in {isHome ? "Home" : "About"} page</p>
    </>
  );
}
