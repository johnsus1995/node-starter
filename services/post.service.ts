import { CreatePostDto } from "../dtos/post.dto";
import { Post } from "../models/Post";

export class PostService {
  public async createPost(data: CreatePostDto, userId: number): Promise<any> {
    const newPost = await Post.create({
      title: data.title,
      description: data.description,
      userId: userId,
    });
    return newPost
  }
}
