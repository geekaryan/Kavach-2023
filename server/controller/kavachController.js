const kavach = require("./../model/Kavach");

exports.get = async (req, res) => {
  try {
    const items = await kavach.find();
    res.status(200).json({
      status: "success",
      length: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await kavach.create(req.body);
    res.status(200).json({
      status: "success",
      length: item.length,
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
