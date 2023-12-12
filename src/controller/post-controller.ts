import { NextFunction, Request, Response } from "express";
import Post from "../models/post";
import { NotFoundException } from "../exceptions/not-found.exception";

class PostController {
  async create(req: Request, res: Response) {
    const body = req.body;
    const post = await Post.create(body);

    res.status(201).send(post);
  }

  async get(req: Request, res: Response) {
    const posts = await Post.findAll();
    res.send({ data: posts });
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (post === null) {
      next(new NotFoundException());
      return;
    }

    res.send(post);
  }
}

export default PostController;
