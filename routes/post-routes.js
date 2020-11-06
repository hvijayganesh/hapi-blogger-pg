'use strict'

const PostController = require('../controllers/post');

class PostRoutes {
  constructor(appData) {
    this.postController = new PostController(appData);
  }

  getPostRoutes = () => {
    return [
      {
        method: 'GET',
        path: '/posts',
        handler: this.postController.list
      },
      {
        method: 'POST',
        path: '/posts',
        handler: this.postController.create
      },
    ]
  }

  register(server) {
    server.route(this.getPostRoutes());
  }


}

module.exports = PostRoutes;