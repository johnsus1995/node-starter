import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "../dtos/post.dto";
import { PostService } from "../services/post.service";

class PostController {
  public postService = new PostService();

  public createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const postData: CreatePostDto = req.body;
      const userId = req.user.id;
      const data = await this.postService.createPost(postData, userId);
      res.status(200).json({
        message: "post created",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public fetchPost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.postService.fetchPost();
      res.status(200).json({
        message: "post fetched",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public fetchPostById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.postService.fetchPostById(req.params.id);
      res.status(200).json({
        message: "post fetched",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public updatePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const updateData = req.body as CreatePostDto;

      const data = await this.postService.updatePost(
        updateData,
        req.params.id,
        req.user.id
      );
      res.status(200).json({
        message: "post updated",
        data,
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };

  public deletePost = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.postService.deletePost(req.params.id, req.user.id);
      res.status(200).json({
        message: "post deleted",
      });
    } catch (error: any) {
      res
        .status(error.status ?? 500)
        .json({ message: error.message ?? "something went wrong" });
    }
  };
}

export default PostController;
