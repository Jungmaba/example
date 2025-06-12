import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, []);

    return (
        <>
            <h1 className="text-[40px] text-center">포켓몬 도감</h1>
            <nav className="flex gap-[20px] justify-center">
                <Link to={"/"}>메인</Link>
                <Link to={"favorite/"}>찜목록</Link>
                <div>
                    <span> 🔍 </span>
                    <input
                        onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
                        className=" w-[120px] border-b border-[darkgray] px-2"
                    />
                </div>
            </nav>
            <main className="flex flex-wrap gap-4 justify-center pt-6">
                <Routes>
                    <Route path={"/"} element={<Main />}></Route>
                    <Route path={"/detail/:pokemonId"} element={<Detail />}></Route>
                    <Route path={"/favorite"} element={<Favorite />}></Route>
                    <Route path={"/search"} element={<Search />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
