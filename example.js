const { page = 1, limit = 10 } = req.query;

const posts = await Posts.find()
  .limit(limit * 1)
  .skip((page - 1) * limit)
  .exec();

// get total documents in the Posts collection
const count = await Posts.count();

// return response with posts, total pages, and current page
res.json({
  posts,
  totalPages: Math.ceil(count / limit),
  currentPage: page,
});
