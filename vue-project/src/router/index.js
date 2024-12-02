import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import EstudiantesList from '../views/EstudiantesList.vue'
import ProfesoresList from '../views/ProfesoresList.vue'
import CursosList from '../views/CursosList.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: 'estudiantes',
        name: 'estudiantes',
        component: EstudiantesList
      },
      {
        path: 'profesores',
        name: 'profesores',
        component: ProfesoresList
      },
      {
        path: 'cursos',
        name: 'cursos',
        component: CursosList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router