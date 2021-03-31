import { useState } from "react";

import Content from "./components/Content";
import { SideBar } from "./components/SideBar";

import "./styles/global.scss";
export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  const updateSelectedGenreId = (num: number) => {
    setSelectedGenreId(num);
  };

  const updateSelectedGenre = (currentGenre: GenreResponseProps) => {
    setSelectedGenre(currentGenre);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={updateSelectedGenreId}
        setSelectedGenre={updateSelectedGenre}
      />
      <Content
        selectedGenreId={selectedGenreId}
        selectedGenre={selectedGenre}
      />
    </div>
  );
}
