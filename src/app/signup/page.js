'use client';
import Link from 'next/link';
import styles from './signup.module.css';
import { useState } from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MdxLogo = () => (
  <div className={styles.logo}>
    <Link href='/'>
      <span className={styles.logo1}>M</span>
      <span className={styles.logo2}>V</span>
      <span className={styles.logo3}>X</span>
    </Link>
  </div>
);

export default function SignUpPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Lógica para validar a senha em tempo real
  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[@!$&_]/.test(password),
  };

  const PasswordCriterion = ({ isValid, text }) => (
    <li className={`${styles.criterion} ${isValid ? styles.valid : ''}`}>
      {isValid ? <FaCheckCircle /> : <FaTimesCircle />}
      <span>{text}</span>
    </li>
  );

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <MdxLogo />
        <h1 className={styles.title}>Crie a sua conta. É grátis!</h1>

        <div className={styles.socialLogin}>
          <button className={styles.socialButton}>
            <FcGoogle size={24} />
            Continuar com o Google
          </button>
          <button className={styles.socialButton}>
            <FaFacebook size={24} color='#1877F2' />
            Continuar com o Facebook
          </button>
        </div>

        <div className={styles.separator}>OU</div>

        <p className={styles.subtitle}>
          Nos informe alguns dados para que possamos melhorar a sua experiência
          na MDX.
        </p>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor='cpf'>
              CPF <IoInformationCircleOutline />
            </label>
            <input
              type='text'
              id='cpf'
              name='cpf'
              placeholder='000.000.000-00'
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='fullName'>Nome completo</label>
            <input type='text' id='fullName' name='fullName' required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='nickname'>Como você quer ser chamado(a)?</label>
            <input
              type='text'
              id='nickname'
              name='nickname'
              placeholder='Exemplo: João S.'
            />
            <small>Aparecerá em seu perfil, anúncios e chats.</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='birthdate'>Data de nascimento</label>
            <input
              type='text'
              id='birthdate'
              name='birthdate'
              placeholder='dd/mm/aaaa'
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' required />
            <small>Enviaremos um e-mail de confirmação.</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='password'>Senha</label>
            <div className={styles.passwordWrapper}>
              <input
                /*Mostrar e ocultar senha */
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeIcon}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className={styles.passwordCriteria}>
            <p>Para sua segurança, crie uma senha com no mínimo:</p>
            <ul>
              <PasswordCriterion
                isValid={validations.length}
                text='8 ou mais caracteres'
              />
              <PasswordCriterion
                isValid={validations.uppercase}
                text='Uma letra maiúscula'
              />
              <PasswordCriterion
                isValid={validations.lowercase}
                text='Uma letra minúscula'
              />
              <PasswordCriterion
                isValid={validations.number}
                text='Um número'
              />
              <PasswordCriterion
                isValid={validations.special}
                text='Um caracter especial (exemplo: @!$&)'
              />
            </ul>
          </div>

          <button type='submit' className={styles.submitButton}>
            Cadastre-se
          </button>
        </form>

        <p className={styles.loginLink}>
          Já tem uma conta? <Link href='/signin'>Entrar</Link>
        </p>
      </div>
    </div>
  );
}
