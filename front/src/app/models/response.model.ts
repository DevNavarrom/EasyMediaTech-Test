export class ResponsePosts<T> {
  limit!: number;
  posts!: T;
  skip!: number;
  total!: number;
}