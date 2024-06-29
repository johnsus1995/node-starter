// import { CreatePostDto } from "../dtos/post.dto";
// import { Post, PostAttributes } from "../models/Post";
// import { User } from "../models/User";

// export class PostService {
//   public async createPost(data: CreatePostDto, userId: number): Promise<any> {
//     const newPost = await Post.create({
//       title: data.title,
//       description: data.description,
//       userId: userId,
//     });
//     return newPost;
//   }

//   public async fetchPost(): Promise<PostAttributes[]> {
//     const posts = await Post.findAll({
//       attributes: ["id", "title", "description"],
//     });
//     return posts;
//   }

//   public async fetchPostById(id: string): Promise<PostAttributes | null> {
//     const posts = await Post.findOne({
//       where: { id: id },
//       include: [
//         { model: User, attributes: ["id", "name", "email"], as: "user" },
//       ],
//     });
//     return posts;
//   }

//   public async updatePost(
//     data: CreatePostDto,
//     id: string,
//     userId: string
//   ): Promise<PostAttributes> {
//     const post = (await Post.findOne({
//       where: { id: id },
//     })) as any;

//     if (!post) {
//       throw { status: 404, message: "post not found" };
//     }

//     if (post.userId !== userId) {
//       throw {
//         status: 403,
//         message: "you don't have permission to update this post",
//       };
//     }

//     const updatedPost = await Post.update(data, {
//       where: { id },
//       returning: true,
//     });
//     return updatedPost[1][0];
//   }

//   public async deletePost(id: string, userId: string): Promise<void> {
//     const post = (await Post.findOne({
//       where: { id: id },
//     })) as any;

//     if (!post) {
//       throw { status: 404, message: "post not found" };
//     }

//     if (post.userId !== userId) {
//       throw {
//         status: 403,
//         message: "you don't have permission to update this post",
//       };
//     }
//     await Post.destroy({ where: { id } });
//   }
// }
