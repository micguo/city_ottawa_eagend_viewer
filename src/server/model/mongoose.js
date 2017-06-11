let mongoose = require('mongoose');
import setting from "./setting.json";
mongoose.connect(setting.dblink);

export default mongoose;