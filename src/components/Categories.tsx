import React, {useState} from "react";

type CategoriesPropsType = {
  items: Array<string>;
  onClick: any;
};

const Categories: React.FC<CategoriesPropsType> = ({items, onClick}) => {
  const [active, setActive] = useState(0);
  return (
    <div className="categories">
      <ul>
        {/* <li className="active">Все</li> */}
        {items.map((x, y) => {
          return (
            <li
              onClick={() => {
                onClick(x);
                setActive(y);
              }}
              key={`${x}_${y}`}
              className={y == active ? "active" : ""}
            >
              {x}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
