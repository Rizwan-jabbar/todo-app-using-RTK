import { Route, Routes }  from "react-router-dom";
import  Header  from "./components/header/header";
import  Login  from "./components/login/login";
import  Register  from "./components/register/register";
import  TaskForm  from "./components/taskForm/taskForm";
import  ProtectedRoute  from "./protectedRoute/protectedRoute";

function App() {
  return (
    <>
      <Routes>

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={
            <>
              <Header />
              <TaskForm />
            </>
          } />
        </Route>

        {/* ✅ Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
