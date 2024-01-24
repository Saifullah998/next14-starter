import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19841819/pexels-photo-19841819/free-photo-of-a-narrow-street-with-many-colorful-rugs-and-carpets.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.24</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
            <Link className={styles.link} href="/Blog/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard