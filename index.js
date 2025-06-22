const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const appConfig = {
  status: "active", // Trạng thái: "active" (hoạt động) hoặc "inactive" (bảo trì)
  message: {
    vn: "App đang fix , ib e hùng để mở nhé",
  },
};

app.get("/status", (req, res) => {
  res.json(appConfig);
});

app.listen(port, () => {
  console.log(`Kill Switch server đang chạy tại http://localhost:${port}`);
});
