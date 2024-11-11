const GREETING = ['Hello world!','Welcome!','Clouds Hide, The birds come!'];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(math.random() * GREETING.length)],
    });
};
