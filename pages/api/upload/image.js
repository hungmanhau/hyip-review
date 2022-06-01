import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/static/images",
    filename: (req, file, cb) => {
      cb(null, `${req.body.projectName}-screenshot-${req.body.index}.jpg`);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("image"));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
