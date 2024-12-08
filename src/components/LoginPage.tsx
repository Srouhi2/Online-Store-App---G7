import React from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebaseConfig";

const LoginPage = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In successful. User:", user);
      alert(`Welcome, ${user.displayName}!`);
      // Redirect user or handle login state
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
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Online App Store
      </h1>

      {/* Login Form */}
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
        <form>
          {/* Username Input */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#6b7280",
              }}
            >
              Username, or mail
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username, or mail"
              style={{
                width: "90%",
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                outline: "none",
                fontSize: "1rem",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "#594ae9")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "#d1d5db")
              }
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#6b7280",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              style={{
                width: "90%",
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                outline: "none",
                fontSize: "1rem",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "#594ae9")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "#d1d5db")
              }
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#594ae9",
              color: "white",
              padding: "0.75rem",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "500",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#473bcf")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor =
                "#594ae9")
            }
          >
            Log in
          </button>
        </form>

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

        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.75rem",
            backgroundColor: "#4285F4", // Google Blue
            color: "white",
            borderRadius: "50px", // Rounded button
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            marginBottom: "1.5rem",
            transition: "background-color 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#357ae8")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4285F4")
          }
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
          Sign In with Google
        </button>

        {/* Forgot Password */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              color: "#594ae9",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration =
                "underline")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration = "none")
            }
          >
            You forgot the password?
          </a>
        </div>
      </div>

      {/* Sign Up Link */}
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem" }}>
          You don’t have an account?{" "}
          <Link
            to="/signup"
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
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
