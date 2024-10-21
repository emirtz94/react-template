import { Configuration } from "webpack-dev-middleware";
import merge from "webpack-merge";
import { common } from "./webpack.common";

const developmentConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: {
        errorDetails: true,
    }
};

export default merge(common, developmentConfig);