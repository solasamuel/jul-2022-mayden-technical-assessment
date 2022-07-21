const axios = require('axios');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.getGroceries = catchAsyncErrors( async (req, res, next) => {

    const { data } = await axios.get('https://dev.tescolabs.com/grocery/products/', {
        headers: {
            "Ocp-Apim-Subscription-Key": process.env.SUBSCRIPTION_KEY,
        },
        params: {
            "query": 'HEALTH',
            "offset": 0,
            "limit": 50,
        }
    })


    res.status(200).json({
        success: true,
        groceries: data.uk.ghs.products.results
    })
})