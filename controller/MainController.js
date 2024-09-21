const main = {
    index:(req, res) =>{
        res.render('index');
    },
    getStart:(req, res) => {
        res.render('getStart');
    },
    details:(req, res ) =>{
        res.render('details');
    },
    about:(req, res) => {
        res.render('about');
    },
    portfolio:(req, res) => {
        res.render('portfolio');
    },
    page2:(req, res) => {
        res.render('pages2');
    },
    page2_about:(req, res) => {
        res.render('page2_about');
    },
    page2_treatment:(req,res) => {
        res.render('page2_treatment');
    },
    page2_doctors:(req,res) => {
        res.render('page2_doctors');
    },
    page2_testimonial:(req,res) => {
        res.render('page2_testimonial');
    },
    page2_contact_us:(req,res) => {
        res.render('page2_contact_us');
    }

}
module.exports = main;