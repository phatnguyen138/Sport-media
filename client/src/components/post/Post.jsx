import "./post.scss";
import {FiMoreHorizontal} from 'react-icons/fi';
import {MdOutlineFavorite, MdOutlineFavoriteBorder} from 'react-icons/md';
import {TfiCommentAlt} from 'react-icons/tfi'
import {BsFillShareFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Comment from '../comment/Comment'

import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TfiCommentAlt />
            12 Comments
          </div>
          <div className="item">
            <BsFillShareFill />
            Share
          </div>
        </div>
        {commentOpen && <Comment/>}
      </div>
    </div>
  );
};

export default Post;
