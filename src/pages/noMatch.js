import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <div>
      <h4>Nothing to see here!</h4>

      <Link to="/">Go to the home page</Link>
    </div>
  );
}
