function validateRequestBody(req, res, next) {
  const { title, completed } = req.body;
  // console.log('Hello from middleware')
  //   console.log(title, completed);
  if (!title && !completed) {
    return res.status(400).json({ error: "Title and status are required" });
  }
  if (typeof completed !== Boolean) {
    return res.status(400).json({ error: "Completed should be true or false" });
  }
  next();
}

module.exports = validateRequestBody;
