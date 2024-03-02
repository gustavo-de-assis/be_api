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

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'world',
      }
    })
    router.resource('/clients', ClientsController).apiOnly()
    router.resource('/address', AddressesController).apiOnly()

    router.resource('/products', ProductsController).apiOnly()
  })
  .prefix('/api')
