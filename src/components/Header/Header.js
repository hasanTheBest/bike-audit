import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log(typeof className);

  const classes = match
    ? className.concat(" bg-slate-700 text-slate-200")
    : className;

  return (
    <li>
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Header = () => {
  return (
    <nav className="bg-slate-800 shadow">
      <ul className="text-slate-300 flex max-w-4xl mx-auto justify-center gap-4">
        <CustomLink
          to="/"
          className="block p-3 transition-all hover:bg-slate-700 hover:text-slate-200 text-semibold tracking-wide"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/reviews"
          className="block p-3 transition-all hover:bg-slate-700 hover:text-slate-200 text-semibold tracking-wide"
        >
          Reviews
        </CustomLink>
        <CustomLink
          to="/dashboard"
          className="block p-3 transition-all hover:bg-slate-700 hover:text-slate-200 text-semibold tracking-wide"
        >
          Dashboard
        </CustomLink>
        <CustomLink
          to="/blog"
          className="block p-3 transition-all hover:bg-slate-700 hover:text-slate-200 text-semibold tracking-wide"
        >
          Blog
        </CustomLink>
      </ul>
    </nav>
  );
};

export default Header;
