'use strict'

const Post = require('../models/post');


class PostController {
  constructor(appData) {
    this.appData = appData;
    this.post = new Post(appData);
  }

  list = async (req, h) => {
    try {
      return null;
    } catch(err) {
      return { err: err };
    }
  }
  
  create = async (req, h) => {
    try {
      const postData = {
        text: req.payload.text
      };
  
      let post = await this.post.create(postData);
      return {
        message: 'Dog created successfully',
        post: post
      }
    } catch(err) {
      return { err: err };
    }
  }
}

module.exports = PostController;