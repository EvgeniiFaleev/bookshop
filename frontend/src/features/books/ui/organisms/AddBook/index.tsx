// import {FC} from "react";
// // import styles from "@ui/../../../features/authentification/AdminLogin/AdminLogin.module.scss";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faExclamation} from "@fortawesome/free-solid-svg-icons";
// import {IHookFormProps} from "@pages/AdminPage";
//
//
// interface IAddBokProps extends IHookFormProps {}
//
// export const AddBook:FC<IAddBokProps> = ({onSubmit, errors, register, required, clearError}) => (
//     <form onSubmit={onSubmit} className={styles.adminLogin}>
//       <h3>Admin Login</h3>
//       {errors.loginError && (
//           <span className={styles.mainError}>
//       <FontAwesomeIcon icon={faExclamation} />
//             {errors.loginError.message}
//     </span>
//       )}
//       <div>
//         <label>
//           <p>Login</p>
//           <input
//               ref={register({ required })}
//               type="text"
//               name="login"
//               onFocus={clearError}
//           />
//           {errors.login && (
//               <span className={styles.error}>
//           <FontAwesomeIcon icon={faExclamation} />
//           This field is required
//         </span>
//           )}
//         </label>
//       </div>
//       <div>
//         <label>
//           <p>Password</p>
//           <input
//               onFocus={clearError}
//               ref={register({ required: true })}
//               type="password"
//               name="password"
//           />
//           {errors.password && (
//               <span className={styles.error}>
//           <FontAwesomeIcon icon={faExclamation} />
//           This field is required
//         </span>
//           )}
//         </label>
//       </div>
//       <button type="submit">Login</button>
//     </form>
// );
//
// )
