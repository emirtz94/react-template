import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, DefinePlugin } from "webpack";

import dotenv from "dotenv";
dotenv.config();

export const common: Configuration = {
    entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}