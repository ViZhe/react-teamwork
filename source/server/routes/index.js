
import boardsRoutes from './boards'
import columnsRoutes from './columns'
import cardsRoutes from './cards'
import userRoutes from './user'
import toolsRoutes from './tools'
import authRoutes from './auth'


const routes = (app) => {
  app.use('/api/v1/boards', boardsRoutes)
  app.use('/api/v1/cards', columnsRoutes)
  app.use('/api/v1/cards', cardsRoutes)
  app.use('/api/v1/user', userRoutes)
  app.use('/api/v1/tools', toolsRoutes)
  app.use('/auth/v1', authRoutes)
}


export default routes
