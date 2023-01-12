import React from "react";
import CustomButton from "./UI/button/CustomButton";

const PostItem = ({ ...data }) => {
  return (
    <li className="posts__item">
      <div className="posts__item-content">
        <div className="posts__item-head">
          <p>{data.id}.</p>
          <h2>{data.title}</h2>
        </div>
        <p>{data.body}</p>
      </div>
      <div className="posts__item-btns">
        <CustomButton onClick={() => data.removePostFunc(data.id)}>
          Открыть
        </CustomButton>
        <CustomButton onClick={() => data.removePostFunc(data.id)}>
          Удалить
        </CustomButton>
      </div>
    </li>
  );
};

export default PostItem;
