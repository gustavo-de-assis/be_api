/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProductsController from '#controllers/products_controller'

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'world',
      }
    })

    router.resource('/products', ProductsController).apiOnly()
    router.put('/products/:id/softDelete', [ProductsController, 'softDelete'])
  })
  .prefix('/api')
