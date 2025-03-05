import { Link } from "react-router";

export default function Home() {
  return (
    <div id="index-page">
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">the docs at reactrouter.com</a>.
      <div>
        <Link to={"/about"}>About this demo...</Link>
      </div>
    </div>
  );
}
