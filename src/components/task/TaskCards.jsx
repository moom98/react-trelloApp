import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const TaskCards = () => {
	// タスクカードの1つ目を作っておく
	const [taskCardsList, setTaskCardList] = useState([
		{
			id: "0",
			draggableId: "item0",
		},
	]);

	const handleDragEnd = (result) => {
		// タスクカードの並び替え
		// ドラッグが終了したら
		// ドラッグ元とドラッグ先のindexを取得する
		const { source, destination } = result;
		// ドラッグ元とドラッグ先が同じ場合は何もしない
		if (!destination || source.index === destination.index) {
			return;
		}
		// ドラッグ元の要素を取得する
		const dragTask = taskCardsList[source.index];
		// ドラッグ元の要素を削除する
		taskCardsList.splice(source.index, 1); //[2,3]
		// ドラッグ先の位置にドラッグ元の要素を追加する
		taskCardsList.splice(destination.index, 0, dragTask); // [2,1,3]
		// stateを更新する
		setTaskCardList([...taskCardsList]);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided) => (
					<div className="taskCardsArea" {...provided.droppableProps} ref={provided.innerRef}>
						{/* タスクカードを動的に生成する */}
						{taskCardsList.map((taskCard, index) => (
							<TaskCard
								key={taskCard.id}
								index={index}
								taskCard={taskCard}
								taskCardsList={taskCardsList}
								setTaskCardList={setTaskCardList}
							/>
						))}
						{provided.placeholder}
						<AddTaskCardButton taskCardsList={taskCardsList} setTaskCardList={setTaskCardList} />
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
