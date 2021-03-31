import { useEffect, useState } from "react";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";
import { api } from "../services/api";
import "../styles/sidebar.scss";

interface SideBarProps {
  selectedGenreId: number;
  setSelectedGenreId: (idNumber: number) => void;
  setSelectedGenre: (genre: GenreResponseProps) => void;
}

export function SideBar({
  selectedGenreId,
  setSelectedGenre,
  setSelectedGenreId,
}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
