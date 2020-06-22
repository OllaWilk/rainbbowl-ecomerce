exports.getCart = async (req, res) => {
    console.log('req', req);
    try {
        const result = await Post
          .find()
          .sort({ date: -1 });
        if (!result) res.status(404).json({ post: 'Not found' });
        else res.json(result);
      } catch (err) {
        res.status(500).json(err);
      }
};

exports.saveCart = async (req, res) => {

    try {
        const { products } = req.body;

        req.session.cart = {
            products: products,
        };
        req.session.save();
        res.json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
};