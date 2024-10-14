import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Users, BookOpen, MessageCircle, UserCheck, BarChart2, Settings, Shield } from 'lucide-react';
import { getStudents, getCourses } from '../services/api';

// Componentes para cada sección del panel de administración
const Dashboard = () => {
  const [stats, setStats] = useState({ students: 0, teachers: 0, courses: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const students = await getStudents();
        const courses = await getCourses();
        setStats({
          students: students.length,
          teachers: 0, // Implementar cuando tengamos la API de profesores
          courses: courses.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Principal</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold">Estudiantes</h3>
          <p className="text-2xl">{stats.students}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold">Profesores</h3>
          <p className="text-2xl">{stats.teachers}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold">Cursos</h3>
          <p className="text-2xl">{stats.courses}</p>
        </div>
      </div>
    </div>
  );
};

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Alumnos</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="py-2 px-4 border-b">{student._id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AcademicManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión Académica</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Curso</th>
            <th className="py-2 px-4 border-b">Profesor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="py-2 px-4 border-b">{course._id}</td>
              <td className="py-2 px-4 border-b">{course.name}</td>
              <td className="py-2 px-4 border-b">{course.teacher ? course.teacher.username : 'No asignado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ... (resto del código sin cambios)

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="flex items-center p-2 rounded hover:bg-gray-700">
                <BarChart2 className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/alumnos" className="flex items-center p-2 rounded hover:bg-gray-700">
                <Users className="mr-2" /> Alumnos
              </Link>
            </li>
            <li>
              <Link to="/admin/academico" className="flex items-center p-2 rounded hover:bg-gray-700">
                <BookOpen className="mr-2" /> Académico
              </Link>
            </li>
            <li>
              <Link to="/admin/comunicacion" className="flex items-center p-2 rounded hover:bg-gray-700">
                <MessageCircle className="mr-2" /> Comunicación
              </Link>
            </li>
            <li>
              <Link to="/admin/profesores" className="flex items-center p-2 rounded hover:bg-gray-700">
                <UserCheck className="mr-2" /> Profesores
              </Link>
            </li>
            <li>
              <Link to="/admin/reportes" className="flex items-center p-2 rounded hover:bg-gray-700">
                <BarChart2 className="mr-2" /> Reportes
              </Link>
            </li>
            <li>
              <Link to="/admin/configuracion" className="flex items-center p-2 rounded hover:bg-gray-700">
                <Settings className="mr-2" /> Configuración
              </Link>
            </li>
            <li>
              <Link to="/admin/seguridad" className="flex items-center p-2 rounded hover:bg-gray-700">
                <Shield className="mr-2" /> Seguridad
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/alumnos" element={<StudentManagement />} />
          <Route path="/academico" element={<AcademicManagement />} />
          <Route path="/comunicacion" element={<Communication />} />
          <Route path="/profesores" element={<TeacherManagement />} />
          <Route path="/reportes" element={<ReportsAnalysis />} />
          <Route path="/configuracion" element={<Configuration />} />
          <Route path="/seguridad" element={<Security />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;