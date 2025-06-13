import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, []);

    return (
        <>
            <h1 className=" border-t-[50px] border-t-[red] text-[white] bg-black text-[40px] text-center">
                포켓몬 도감
            </h1>
            <nav className=" py-[10px] border-b-[3px]  flex gap-[20px] justify-center">
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
            <main className=" bg-[darkgray] flex flex-wrap gap-4 justify-center pt-6 pd-b">
                <Suspense fallback={<div> . . . loading </div>}>
                    <Routes>
                        <Route path={"/"} element={<Main />}></Route>
                        <Route path={"/detail/:pokemonId"} element={<Detail />}></Route>
                        <Route path={"/favorite"} element={<Favorite />}></Route>
                        <Route path={"/search"} element={<Search />}></Route>
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
