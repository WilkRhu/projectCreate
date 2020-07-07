const db = require("../../../config/connection/index");

const productsPaginate = async (req, res) => {
    try {
        const reqData = req.query;
        const pagination = {};
        const per_page = reqData.per_page || 10;
        const page = reqData.current_page || 1;
        if (page < 1) page = 1;
        const offset = (page - 1) * per_page;
        return Promise.all([
            db.count('* as count').from("products").first(),
            db.select("*").from("products").offset(offset).limit(per_page)
        ]).then(([total, rows]) => {
            var count = total.count;
            var rows = rows;
            pagination.total = count;
            pagination.per_page = per_page;
            pagination.offset = offset;
            pagination.to = offset + rows.length;
            pagination.last_page = Math.ceil(count / per_page);
            pagination.current_page = page;
            pagination.from = offset;
            pagination.data = rows;
            return res.status(200).json({
                data: pagination.data, 
                total: pagination.total, 
                total_date: pagination.data.length,
                total_page: pagination.last_page
            });
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }

}
module.exports = productsPaginate;