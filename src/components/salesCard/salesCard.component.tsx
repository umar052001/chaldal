import Image from "next/image";
import styles from "./salesCard.module.css";

export const SalesCard: React.FC = () => 
{
    return (
        <div className={styles.conatiner}>
        <div className={styles.icon_order}>
            <Image src="static/icons/Icon_Order.png" alt="" />
        </div>

        <div className={styles.number}>75</div>

        <div className={styles.total_order}>Total Orders</div>

        <div className={styles.background_icon}></div>

        <div className={styles.icon}>
            <Image src="static/icons/Icon.png" alt="" />
        </div>

        <div className="analysis">4% (30 days)</div>
        </div>
    );
};
