import { Link, NavLink, useLocation } from "react-router";

export function WhatsappPage() {
  const path = useLocation();

  const dummyData = Array.from({ length: 100 }, () => ({}));

  return (
    <div>
      <h1>{path.pathname}</h1>

      <div className="flex flex-col gap-3 my-4">
        <Link to="/tes">Tes</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="flex gap-2 flex-wrap">
        {dummyData.map((_, i) => (
          <NavLink
            key={i}
            to={`${i}`}
            className="p-4 rounded-md bg-pink-200 hover:cursor-pointer w-28 "
          >
            <p key={i}>Data {i}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
