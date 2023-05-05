import React, { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({ taskCardsList, setTaskCardList, taskCard, index }) => {
	const [inputText, setInputText] = useState("");
	const [taskList, setTaskList] = useState([]);
	return (
		<Draggable draggableId={taskCard.id} index={index}>
			{(provided) => (
				<div className="taskCard" ref={provided.innerRef} {...provided.draggableProps}>
					<div className="taskCardHead" {...provided.dragHandleProps}>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCardsList={taskCardsList}
							setTaskCardList={setTaskCardList}
							taskCard={taskCard}
						/>
					</div>
					<TaskAddInput
						inputText={inputText}
						setInputText={setInputText}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
					<Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
				</div>
			)}
		</Draggable>
	);
};
