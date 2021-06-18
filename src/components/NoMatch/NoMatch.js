import { useLocation } from "react-router-dom";

function NoMatch() {
  let { pathname } = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;
