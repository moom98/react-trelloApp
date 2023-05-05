import React from "react";

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardList, taskCard }) => {
	const taskCardDeleteButton = (id) => {
		// 1. タスクカードのidと一致するタスクカードを削除する
		// 2. タスクカードのidと一致しないタスクカードを残す
		setTaskCardList(taskCardsList.filter((taskCard) => taskCard.id !== id));
	};
	return (
		<div className="taskCardDeleteButtonArea">
			<button className="taskCardDeleteButton" onClick={() => taskCardDeleteButton(taskCard.id)}>
				<i className="fas fa-xmark"></i>
			</button>
		</div>
	);
};
