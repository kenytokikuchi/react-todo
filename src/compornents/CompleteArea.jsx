import React from "react";

export const CompleteArea = (props) => {
  const { Todos, Buck, Delete } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => Buck(index)}>戻す</button>
              <button onClick={() => Delete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
