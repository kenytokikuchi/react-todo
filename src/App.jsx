import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["aaaaa", "iiiii"]);

  // テキストで入力した文字を変化させる関すを作成.値が入力されるたびuseStateの中が更新される
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // 入力した値を未完了リストに追加
  const onClickAdd = () => {
    if (todoText === "") return;
    // 未完了の領域に入力した値を代入する。今までの配列の値をスプレット構文にすると代入される
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDekete = (index) => {
    const newTodos = [...incompleteTodos];
    // spliceは第１引数に指定した数、第２引数に指定した数字分削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickDeketeCompleteArea = (index) => {
    const newTodos = [...completeTodos];
    // spliceは第１引数に指定した数、第２引数に指定した数字分削除する
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // spliceは第１引数に指定した数、第２引数に指定した数字分削除する
    newIncompleteTodos.splice(index, 1);
    // 完了リストの配列を入れる変数を作成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBuck = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        {/* 入力するたびに値を更新する処理を書く. onchangeを使用する */}
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
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
                <button onClick={() => onClickDekete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBuck(index)}>戻す</button>
                <button onClick={() => onClickDeketeCompleteArea(index)}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
