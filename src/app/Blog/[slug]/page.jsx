import Image from "next/image";
import styles from "./singlePost.module.css"
const SinglePostPage  = () => {
    return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/19841819/pexels-photo-19841819/free-photo-of-a-narrow-street-with-many-colorful-rugs-and-carpets.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.avatar}>
       <Image src="https://images.pexels.com/photos/19841819/pexels-photo-19841819/free-photo-of-a-narrow-street-with-many-colorful-rugs-and-carpets.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
         width={50} height={50} 
         className={styles.avatar} />
         <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
         </div>
         <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
         </div>
      </div>
      <div className={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    </div>;
  };
  
  export default SinglePostPage;