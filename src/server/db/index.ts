import * as mysql from "mysql";
import config from "../config";


const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        //DEBUG: console.log(sql)

        pool.query(query, values, (err, results) => {
            if(err) reject(err);
            else resolve(results);
        })
    })
}

import blogs from "./queries/blogs";
export default {
    blogs
}