import styles from "./ContactForm.module.scss"
import Button from "../../../components/Button/Button"

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoSection}>
                    <p className={styles.contactInfoHeading}>PHONE</p>
                    <p className={styles.contactInfoText}>+48 888 555 777</p>
                </div>
                <div className={styles.contactInfoSection}>
                    <p className={styles.contactInfoHeading}>ADDRESS</p>
                    <p className={styles.contactInfoText}>ul. Lumumby 10, Lodz</p>
                </div>
                <div className={styles.contactInfoSection}>
                    <p className={styles.contactInfoHeading}>EMAIL</p>
                    <p className={styles.contactInfoText}>email@gmail.com</p>
                </div>
            </div>
            <form action="" className={styles.form}>
                <div className={styles.formUserInfo}>
                    <div className={styles.formUser}>
                        <label htmlFor="name">
                            <input id="name" type="text" placeholder="Name" />
                        </label>
                    </div>
                    <div className={styles.formUser}>
                        <label htmlFor="email">
                            <input id="email" type="email" placeholder="Email" />
                        </label>
                    </div>
                    <div className={styles.formUser}>
                        <label htmlFor="tel">
                            <input id="tel" type="tel" placeholder="Phone" />
                        </label>
                    </div>
                </div>
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" placeholder="Message"></textarea>
                <div className={styles.btn}>
                    <Button style="buttonOrange">SEND</Button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm