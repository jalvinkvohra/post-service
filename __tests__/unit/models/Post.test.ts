import sequelize from "../../../src/config/db";
import Post from "../../../src/models/post";

const initDatabase = async () => {
  await sequelize.authenticate();
  await sequelize.drop();
  await sequelize.sync();
};

beforeAll(async () => {
  await initDatabase();
});

describe("Post modal tests", () => {
  it("Create new post", async () => {
    const post = await Post.create<Post>({
      title: "Test",
      active: true
    });

    expect(post).toBeInstanceOf(Post);
    expect(post.id).not.toBeNull();

    expect(post.title).toEqual("Test");
    expect(post.active).toBeTruthy();

    await post.destroy();
  });

  it("Get post", async () => {
    const post = await Post.create<Post>({
      title: "Get Post Test",
      active: false,
      description: " This is get post description"
    });

    expect(post.id).not.toBeNull();

    const foundPost = await Post.findOne({
      where: { title: "Get Post Test" }
    });

    expect(foundPost).toBeInstanceOf(Post);
    expect(foundPost?.id).toEqual(post.id);

    await foundPost?.destroy();
  });
});
