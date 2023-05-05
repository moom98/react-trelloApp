import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardList }) => {
	const addTaskCard = () => {
		const taskCardId = uuid();
		// タスクカードを追加する
		//
		setTaskCardList([
			...taskCardsList,
			{
				id: taskCardId,
				draggableId: `item${taskCardId}`,
			},
		]);
	};
	return (
		<div className="AddTaskCardButtonArea">
			<button className="AddTaskCardButton" onClick={addTaskCard}>
				+
			</button>
		</div>
	);
};
