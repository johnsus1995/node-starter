import { NextFunction, Request, Response } from "express";
import { CreatePostDto } from "../dtos/post.dto";
import { PostService } from "../services/post.service";

class PostController {
  public postService = new PostService();

  public createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postData: CreatePostDto = req.body;
      const userId = req.user.id
      const data = await this.postService.createPost(postData,userId);
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

}

export default PostController;
