import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import { useAuth } from "../../contexts/AuthContext";
import { signin } from "../../api/auth";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogin = () => {
    signin({ username, password })
      .then((res) => {
        auth.login(res.accessToken);
        navigate("/dashboard/home");
      })
      .catch(() => alert("الرجاء التأكد من صحة المعلومات"));
  };
  return (
    <div className="bodyy">
      <div id="loginform">
        <h2 id="headerTitle">تسجيل الدخول</h2>
        <div>
          <div class="row">
            <label>الاسم</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="اسم المستخدم"
            />
          </div>
          <div class="row">
            <label>كلمة الدخول</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="كلمة الدخول"
            />
          </div>

          <div id="button" class="row">
            <button onClick={handleLogin}>تأكيد</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
