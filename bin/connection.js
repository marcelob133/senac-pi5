const mongoose = require('mongoose')

//mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/mypetpass`, {useNewUrlParser: true})
//mongoose.connect(`mongodb+srv://mypetpass:segredodopetpass@cluster0-hygow.mongodb.net/test`, {useNewUrlParser: true})
mongoose.connect(`mongodb+srv://mynewpetpass:!1CarlsagaN1!@cluster0-lv8no.mongodb.net/test?retryWrites=true`)

module.exports = mongoose
