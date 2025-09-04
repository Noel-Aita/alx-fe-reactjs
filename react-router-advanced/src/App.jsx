import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected profile route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic blog post route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
