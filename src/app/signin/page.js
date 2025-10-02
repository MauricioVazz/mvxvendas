import styles from './signin.module.css'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

export default function Signin() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Entre na sua conta e negocie com segurança!</h2>
                <p>Acesse e aproveite uma experiência segura dentro da MVX</p>

                <div className={styles.socialLogin}>
                    <button className={styles.google}>
                        <FcGoogle size={20}/>
                    </button>
                    <button className={styles.facebook}>
                        <FaFacebookF size={20}/>
                    </button>
                </div>

                <div className={styles.divider}>
                    <span>Ou conect com</span>
                </div>

                <label htmlFor='email'>Email</label>
                <input type="email" id="email" placeholder='Digite seu email' />

                <button className={styles.loginBtn}>Acessar</button>
                <p className={styles.register}>
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>

            <p className={styles.terms}>
                Ao continuar, você concorda com nossos <a href="#">Termos de uso</a> e a <a href="#">Política de Privacidade</a> da MVX e seus parceiros, e em receber comunicações da MVX.
            </p>
        </div>
    )
}