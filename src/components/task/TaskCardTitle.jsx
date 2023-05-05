import React from "react";
import { useState } from "react";

export const TaskCardTitle = () => {
	const [isClick, setIsClick] = useState(false);
	const [inputCardTitle, setInputCardTitle] = useState("Today");

	// タイトルをクリックしたらフォームを表示
	const handleClick = () => {
		setIsClick(true);
	};

	// フォームに入力した値を取得
	const handleChange = (e) => {
		setInputCardTitle(e.target.value);
	};

	// フォームを送信したらフォームを閉じる
	const handleSubmit = (e) => {
		// ページの更新を防ぐ
		e.preventDefault();
		setIsClick(false);
	};

	// カーソルが外れたらフォームを閉じる
	const handleBlur = () => {
		setIsClick(false);
	};

	return (
		<div onClick={handleClick} className="taskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input
						className="taskCardTitleInput"
						autoFocus
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						value={inputCardTitle}
						maxLength={10}
					/>
				</form>
			) : (
				<h3>{inputCardTitle}</h3>
			)}
		</div>
	);
};
