import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
	// ゴミ箱ボタンを押した時の処理
	const handleDelete = (id) => {
		// idが一致しないものだけを残す
		setTaskList(taskList.filter((task) => task.id !== id));
	};
	return (
		// ドラッグ可能な要素
		<Draggable index={index} draggableId={task.draggableId}>
			{(provided) => (
				<div
					className="taskBox"
					key={task.id}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
				>
					<p className="taskText">{task.text}</p>
					<button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
						<i className="fa-regular fa-trash-can"></i>
					</button>
				</div>
			)}
		</Draggable>
	);
};
