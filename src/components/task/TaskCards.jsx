import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
	const [taskCardsList, setTaskCardList] = useState([
		{
			id: 0,
			draggableId: "item0",
		},
	]);
	return (
		<div className="taskCardsArea">
			{taskCardsList.map((taskCard) => (
				<TaskCard
					key={taskCard.id}
					taskCard={taskCard}
					taskCardsList={taskCardsList}
					setTaskCardList={setTaskCardList}
				/>
			))}
			{/* <TaskCard /> */}
			<AddTaskCardButton taskCardsList={taskCardsList} setTaskCardList={setTaskCardList} />
		</div>
	);
};
