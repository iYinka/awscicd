import React, { useState } from "react";
import styles from "./styles/Login.module.css";
import { Input, Row, Col, Alert, notification, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import { LoginVendor } from "../../store/actions/authAction";
// import { ButtonLoader } from "../../components/buttons";
// import Spinner from "../../components/spinner";
import { LoadingOutlined } from "@ant-design/icons";

const LoginLayout = (props) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [notify, setNotify] = useState({
        type: "",
        message: "",
    });
    const antIcon = (
        <LoadingOutlined style={{ fontSize: "20", color: "#ffffff" }} spin />
    );

    const openNotification = (dataObject) => {
        notification.open({
            type: dataObject.type,
            message: `${dataObject.title}`,
            description: dataObject.description,
            placement: dataObject.placement,
        });
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };

    return (
        <div className={styles.bck}>
            <div className={styles.alert}>
                {isOpen && (
                    <Alert
                        type={notify.type}
                        message={notify.message}
                        closable
                        onClose={handleClose}
                    />
                )}
            </div>

            <Row style={{ minHeight: "100vh" }}>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    style={{ overflow: "auto", height: "100vh" }}
                >
                    <div className={styles.formHolder}>
                        <img src="/images/logo.svg" alt="" />
                        <h2 data-testid="eContact">eContact</h2>

                        <div className={styles.inputHolder}>
                            <label htmlFor="email">Email Address</label>
                            <Input
                                id="email"
                                // data-testid="email"
                                autoComplete="on"
                                placeholder="Enter Email Address"
                                required
                                value={values.email}
                                onChange={(e) => {
                                    setValues({
                                        ...values,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div
                            className={`${styles.inputHolder} ${styles.pass} password`}
                        >
                            <label htmlFor="password">Password</label>
                            <Input.Password
                                id="password"
                                // data-testid="password"
                                placeholder="Enter Password"
                                required
                                value={values.password}
                                onChange={(e) => {
                                    // validatePassword(e.target.value);
                                    setValues({
                                        ...values,
                                        password: e.target.value,
                                    });
                                }}
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                            />
                        </div>
                        {values.password === "" ? (
                            ""
                        ) : (
                            <h3 style={{ color: "red" }}>{msg}</h3>
                        )}
                        <div className={styles.forgot_pass}>
                            <p>
                                {/* <Link href="/forgot-password">
                                    Forgot Password
                                </Link> */}
                            </p>
                        </div>

                        <button
                            // data-testid="signin"
                            className={styles.loaderBtn}
                            onClick={() => ValidateUser()}
                            disable={isLoading === true ? true : false}
                        >
                            {isLoading === false ? (
                                "Sign In"
                            ) : (
                                <>
                                    <span className={styles.blink_me}>
                                        Signing In...
                                    </span>{" "}
                                    <Spin indicator={antIcon} />
                                </>
                            )}
                        </button>
                        {/* <div class="card social-block">
                            <button onClick={googleAuth}>
                                <div class="card-body">
                                    <a
                                        class="btn btn-block btn-social btn-facebook"
                                        href="/auth/google"
                                        role="button"
                                    >
                                        <i class="fab fa-facebook"></i>
                                        Sign In with Google
                                    </a>
                                </div>
                            </button>
                        </div> */}

                        <div
                            className={styles.signUpDiv}
                            // data-testid="signup"
                        >
                            <p>
                                Don't have an account?{" "}
                                <Link to="/register">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </Col>

                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className={styles.columns}
                >
                    <div className={styles.bg}>
                        <img src="/images/login.png" alt="" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default LoginLayout;
