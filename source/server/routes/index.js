
import boardsRoutes from './boards'
import columnsRoutes from './columns'
import cardsRoutes from './cards'
import userRoutes from './user'
import toolsRoutes from './tools'
import authRoutes from './auth'


const routes = server => (
  server
    .use('/api/v1/boards', boardsRoutes)
    .use('/api/v1/cards', columnsRoutes)
    .use('/api/v1/cards', cardsRoutes)
    .use('/api/v1/user', userRoutes)
    .use('/api/v1/tools', toolsRoutes)
    .use('/auth/v1', authRoutes)
)


export default routes
