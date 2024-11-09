import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { style } from "../../types/styles";
import "./styles.css";

interface NavListProps {
  navList: { [key: string]: string };
  className?: string;
}

export const NavList = ({
  navList,
  className,
}: NavListProps): React.ReactNode => {
  const navigation = useNavigate();
  const listContect: string[] = ["Home", "New Arriaves", "About us"];
  const [active, setActive] = useState<number>(0);

  const handleClick = (idx: number, item: string) => {
    setActive(idx);
    Object.keys(navList).forEach((key) => {
      if (key === item.replace(/\s/g, "").toLowerCase()) {
        navigation(navList[key]);
        console.log(navList);
      }
    });
  };

  return (
    <div className={className && className}>
      <ul className="navlist-styles-1">
        {listContect &&
          listContect.map((item, idx) => (
            <li className="navlist-styles-2" key={idx}>
              <a
                onClick={() => handleClick(idx, item)}
                className={`navlist-styles-3 ${
                  idx == active ? "font-bold md:text-[1.06rem]" : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
