exports.getGroceries = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all health related groceries in the TESCO database.'
    })
}