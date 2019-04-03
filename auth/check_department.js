module.exports = department => (req, res, next) => {
  if (req.decodedToken && req.decodedToken.departments.include(department)) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
