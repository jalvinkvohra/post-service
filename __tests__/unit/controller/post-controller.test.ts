import request from "supertest";
import sequelize from "../../../src/config/db";
import { app } from "../../../src/config/app";
import Post from "../../../src/models/post";

const initDatabase = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};

beforeAll(async () => {
  await initDatabase();
});

describe("GET /posts", () => {
  it("Should return 200 status on successful response", () => {
    request(app).get("/posts").expect(200);
  });

  it("Should return list of posts with status 200", async () => {
    const post = await Post.create({
      title: "Post 1",
      description: "Post description",
      active: true
    });
    const response = await request(app).get("/posts").expect(200);

    expect(response.body.data.length).toBeGreaterThanOrEqual(1);

    await post.destroy();
  });
});

describe("POST /posts", () => {
  it("Should create new posts and send 201 response", async () => {
    await request(app)
      .post("/posts")
      .send({
        title: "Test Post Title",
        description: "Test Post Description",
        active: true
      })
      .expect(201);
  });

  it("Should validate the request for required parameters and send 400 response", async () => {
    const response = await request(app).post("/posts").send({}).expect(400);

    expect(response.body).toMatchObject({
      errors: [{ field: "title", message: "required_error" }]
    });
  });
});

describe("POST /posts/{id}", () => {
  it("Should return post by specific id and 200 response", async () => {
    const payload = { title: "Test post created", active: false };

    const post = await Post.create(payload);

    const response = await request(app).get(`/posts/${post.id}`).expect(200);

    expect(response.body.title).toEqual(payload.title);
    expect(response.body.description).toBeNull();
    expect(response.body.active).toBeFalsy();
  });

  it("Should return 404 for invalid post id", async () => {
    await request(app).get("/posts/123").expect(404);
  });
});

// describe("Post Controller Test", () => {
//   it("GET /Posts", () => {
//     request(app).get("/posts").expect(200);
//   });

//   it("GET /posts/{id}", () => {
//     request(app).get("/posts/1").expect(200);
//   });

//   it("Create new post", () => {
//     request(app).post("/posts").expect(201);
//   });

//   it("Update post", () => {
//     request(app).put("/posts").expect(200);
//   });

//   it("Delete post", () => {
//     request(app).delete("/posts").expect(204);
//   });
// });
