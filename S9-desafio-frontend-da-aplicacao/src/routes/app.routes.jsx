import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { Details } from "../pages/Details";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
