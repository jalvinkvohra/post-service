import { express } from "./app";
import PostController from "../controller/post-controller";
import { createPostValidator } from "../validator/post.validator";
import { validateRequest } from "./middleware";

const postController = new PostController();

const router = express.Router();

router.get("/posts", postController.get);

router.get("/posts/:id", postController.getById);

router.post(
  "/posts",
  ...createPostValidator,
  validateRequest,
  postController.create
);

export default router;
