/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ClientsController from '#controllers/clients_controller'
import AddressesController from '#controllers/addresses_controller'
import ProductsController from '#controllers/products_controller'
import SalesController from '#controllers/sales_controller'
import UsersController from '#controllers/users_controller'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.resource('/products', ProductsController).apiOnly()
    router.post('/user', [UsersController, 'store'])
    router.post('/login', [UsersController, 'login'])
    router
      .group(() => {
        router.resource('/clients', ClientsController).apiOnly()
        router.resource('/address', AddressesController).apiOnly()
        router.resource('/products', ProductsController).apiOnly()
        router.put('/products/:id/softDelete', [ProductsController, 'softDelete'])
        router.post('clients/sale', [SalesController, 'store'])
        router.post('/address/:id', [AddressesController, 'store'])
      })
      .use(middleware.auth())
  })
  .prefix('/api')
