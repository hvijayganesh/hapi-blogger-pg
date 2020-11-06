'use strict' 

class Post {
  constructor(appData) {
    this.tx = appData.pgp;
  }

  async create(data) {
    const me = this;
    try {
      let result = await me.tx.one(
        'INSERT INTO posts (text) VALUES ($1) returning id',
        [data.text]);
      return result;
    } catch (error) {
      console.error('Error during Create', data);
      throw error;
    }
  }
}

module.exports = Post;