const mangaRoute = (req, res) => {
  res.send("Manga reader");
}

const jamesRoute = (req, res) => {
  res.send("James Gunn Superman");
}

module.exports = {
    jamesRoute,
    mangaRoute
};