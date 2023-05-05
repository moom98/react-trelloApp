import React, { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = ({ taskCardsList, setTaskCardList, taskCard }) => {
	const [inputText, setInputText] = useState("");
	const [taskList, setTaskList] = useState([]);
	return (
		<div className="taskCard">
			<div className="taskCardHead">
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
	);
};
