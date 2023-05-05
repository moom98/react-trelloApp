import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
	const handleSubmit = (e) => {
		// uuidを使ってユニークなidを生成する
		const taskId = uuid();

		e.preventDefault();
		// カードを追加する
		setTaskList([
			// 既存のカードを展開して、
			...taskList,
			{
				// 新しいカードを配列に追加する
				id: taskId,
				// strings型の値を追加する
				draggableId: `task-${taskId}`,
				text: inputText,
			},
		]);

		// カードを追加したら入力欄を空にする
		setInputText("");
	};

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="taskAddInput"
					type="text"
					placeholder="add a task"
					value={inputText}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};
