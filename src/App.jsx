import React, { useState } from "react";
import { IncompleteArea } from "./compornents/IncompleteArea";
import { CompleteArea } from "./compornents/CompleteArea";
import { InputTodo } from "./compornents/InputTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // spliceは第１引数に指定した数、第２引数に指定した数字分削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickDeleteCompleteArea = (index) => {
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個までだぞ〜。消化しろ〜。
        </p>
      )}

      <IncompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea
        Todos={completeTodos}
        Buck={onClickBuck}
        Delete={onClickDeleteCompleteArea}
      />
    </>
  );
};
