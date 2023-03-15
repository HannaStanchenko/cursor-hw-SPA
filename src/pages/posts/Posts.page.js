import React from 'react';
import styles from './Posts.module.css'

const PostsPage = ({author}) => {
    return (
        <div className={styles["posts"]}>

            <div className={styles["post"]}>
                <div className={styles["post-header"]}>
                    <img className={styles["user-photo"]} src={author.photo} alt="author" width="50" height="50" />
                    <h4>{author.name}</h4>
                    <img src="https://cdn3.emoji.gg/emojis/7673-verified-grey.png" alt="verified" width="20" height="20" />
                    <p>{author.nickname}</p>
                    <p>{author.date}</p>
                </div>
                
                <div className={styles["post-main"]}>
                    <p>{author.content}</p>
                    <img className={styles["user-image"]} src={author.image} alt="content" width={350} />
                </div>

                <div className={styles["post-footer"]}>
                    <div className={styles["post-footer-block"]}>
                        <i className="fi fi-rr-comments"></i>
                        <p>428</p>
                    </div>

                    <div className={styles["post-footer-block"]}>
                        <i className="fi fi-rr-arrows-retweet"></i>
                        <p>146</p>
                    </div>

                    <div className={styles["post-footer-block"]}>
                        <i className="fi fi-rs-heart"></i>
                        <p>887</p>
                    </div>

                    <div className={styles["post-footer-block"]}>
                        <i className="fi fi-rr-bookmark"></i>
                    </div>
                
                </div>

            </div>
        </div>
    );
};

export default PostsPage;

