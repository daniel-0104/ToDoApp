import styles from "./footer.module.css";
export default function Footer({completedTodo, totalTodo}){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todo : {completedTodo}</span>
            <span className={styles.item}>Total Todo : {totalTodo}</span>
        </div>
    );
}