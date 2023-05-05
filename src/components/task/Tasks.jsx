import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const Tasks = ({ taskList, setTaskList }) => {
	const handleDragEnd = (result) => {
		// ドラッグが終了したら
		// ドラッグ元とドラッグ先のindexを取得する
		const { source, destination } = result;
		// ドラッグ元とドラッグ先が同じ場合は何もしない
		if (!destination || source.index === destination.index) {
			return;
		}
		// ドラッグ元の要素を取得する
		const dragTask = taskList[source.index];
		// ドラッグ元の要素を削除する
		taskList.splice(source.index, 1); //[2,3]
		// ドラッグ先の位置にドラッグ元の要素を追加する
		taskList.splice(destination.index, 0, dragTask); // [2,1,3]
		// stateを更新する
		setTaskList([...taskList]);
	};
	return (
		<div>
			{/* ドラッグ可能エリア */}
			<DragDropContext onDragEnd={handleDragEnd}>
				{/* ドラッグ要素のwrapper 中身は関数である必要がある*/}
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{taskList.map((task, index) => (
								// keyにユニークな値を振るのを忘れない
								<div key={task.id} className="taskCardTitle">
									<Task task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};
