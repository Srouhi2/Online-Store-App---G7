import React from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebaseConfig";
 // Adjust path if needed

const SignUpPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In successful. User:", user);
      alert(`Welcome, ${user.displayName}!`);
      // Redirect user or save user details to database if needed
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Online App Store
      </h1>

      <p
        style={{ marginBottom: "1.5rem", textAlign: "center", color: "#6c757d" }}
      >
        Sign up to see all products
      </p>

      {/* Sign-Up Form */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "1.5rem",
        }}
      >
        {/* Google Sign-Up Button */}
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem",
            backgroundColor: "#4285F4",
            color: "white",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            marginBottom: "1.5rem",
            transition: "background-color 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#357ae8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4285F4")}
        >
          <img
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="Google logo"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "10px",
            }}
          />
          Sign Up with Google
        </button>

        {/* OR Divider */}
        <div
          style={{
            margin: "1.5rem 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <hr style={{ flex: 1, borderColor: "#d1d5db" }} />
          <span
            style={{
              margin: "0 1rem",
              color: "#6b7280",
              fontSize: "0.875rem",
            }}
          >
            or
          </span>
          <hr style={{ flex: 1, borderColor: "#d1d5db" }} />
        </div>

        {/* Sign-Up Form Fields */}
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "90%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
                marginBottom: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Full name"
              style={{
                width: "90%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
                marginBottom: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "90%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
                marginBottom: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "90%",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
                marginBottom: "1rem",
                outline: "none",
              }}
            />
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            style={{
              width: "97%",
              padding: "0.75rem",
              backgroundColor: "#594ae9",
              color: "white",
              fontSize: "1rem",
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>

        {/* Terms and Policy */}
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.875rem",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          By signing up, you agree to our Terms, Data Policy, and Cookie Policy.
        </p>
      </div>

      {/* Login Link */}
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem" }}>
          You have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#594ae9",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration = "underline")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration = "none")
            }
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
