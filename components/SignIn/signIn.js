import React from "react";
import styles from "./signin.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { SiginSchema } from "./SiginSchema";
import { toast } from "react-toastify";
import Router from "next/router";
const Signin = () => {
  const SigninFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SiginSchema,
    onSubmit: async (values, onSubmitProps) => {
      console.log(values, "values>>>>>>");
      toast.success("Login Successfully", { position: "top-center" });
      // Router.push("/dashboard");
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.signin}>
            <div className={styles.left}>
              <div className={styles.profile}>
                <div className={styles.image}>
                  <Image
                    src="/profile.svg"
                    alt="Profile Pic"
                    width={200}
                    height={50}
                  />
                </div>
                <div className={styles.heading}>Welcome</div>
              </div>
              <form
                className={styles.form}
                onSubmit={SigninFormik.handleSubmit}
              >
                <div className={styles.InputDiv}>
                  <input
                    type="email"
                    className={
                      SigninFormik.touched.email
                        ? styles.inputPlace
                        : styles.orginput
                    }
                    placeholder={
                      SigninFormik.errors.email
                        ? SigninFormik.errors.email
                        : "Email *"
                    }
                    {...SigninFormik.getFieldProps("email")}
                  />
                </div>
                <div className={styles.InputDiv}>
                  <input
                    className={
                      SigninFormik.errors.password
                        ? styles.inputPlace
                        : styles.orginput
                    }
                    type="password"
                    placeholder={
                      SigninFormik.errors.password
                        ? SigninFormik.errors.password
                        : "Password *"
                    }
                    {...SigninFormik.getFieldProps("password")}
                  />
                </div>

                <div className={styles.forgetpassword}>
                  <Link href="/forget-password">Forget Password?</Link>
                </div>
                <div className={styles.submitbtn}>
                  <button type="submit">Login</button>
                </div>
              </form>
              <div className={styles.signup}>
                Dont have an Account ? &nbsp;
                <Link href="/sign-up">SignUp</Link>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.bgimage}>
                <Image
                  src="/Rectangle.svg"
                  width={330}
                  height={490}
                  alt="Pic"
                />
              </div>
              <div className={styles.profileman}>
                <Image
                  src="/profile-man.svg"
                  width={200}
                  height={200}
                  alt="Pic"
                />
              </div>
              <div className={styles.lampshade}>
                <Image src="/lampshade.svg" width={90} height={100} alt="Pic" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
