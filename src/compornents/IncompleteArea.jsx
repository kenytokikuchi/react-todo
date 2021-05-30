import React from "react";

export const IncompleteArea = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* map関数ｍの第２引数でキーを指定できる */}
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡したいときはアロー関数を入れる */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
