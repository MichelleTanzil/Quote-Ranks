// All necessary requires, such as the Quote model.
const Quote = require("mongoose").model("Quote");

// var moment = require("moment");

module.exports = {
  getAll: function(req, res) {
    Quote.find()
      .then(quotes => {
        console.log(quotes);
        res.json({ quotes: quotes });
      })
      .catch(err => res.json(err));
  },

  getOne: function(req, res) {
    console.log("quote id: " + req.params.id);
    Quote.findOne({ _id: req.params.id })
      .then(quote => {
        console.log("quote: ", quote);
        res.json(quote);
      })
      .catch(err => res.json(err));
  },
  createAuthor: function(req, res) {
    const quote = new Quote(req.body);
    quote
      .save()
      .then(quote => res.json(quote))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_quote", err.errors[key].message);
        }
        res.json(err);
      });
  },
  updateAuthor: function(req, res) {
    console.log("update quote id: " + req.params.id);
    req.body.updated_at = Date.now();
    Quote.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      context: "query"
    })
      .then(quote => res.json(quote))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("update_quote", err.errors[key].message);
        }
        res.json(err);
      });
  },
  getAllQuotes: function(req, res) {
    console.log("author: " + req.params.author);
    Quote.find({ id: req.params.id })
      .then(quotes => {
        if (quotes.quote) {
          console.log("quotes: ", quotes);
          res.json(quotes);
        }
      })
      .catch(err => res.json(err));
  },
  createQuote: function(req, res) {
    console.log(req.body, req.params);
    Quote.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { quotes: req.body } },
      { runValidators: true, context: "query" }
    )
      .then(quote => {
        quote.updated_at = Date.now();
        console.log("Updated quote! ", quote);
      })
      .catch(err => {
        res.json(err);
      });
  },
  deleteQuote: function(req, res) {
    Quote.findById({ _id: req.params.id })
      .then(data => {
        let quote = data.quotes.id(req.params.quoteid);
        console.log("quote:", quote);
        let index = data.quotes.indexOf(quote);
        data.quotes.splice(index, 1);
        console.log("data:", data);
        data.save();
      })
      .catch(err => res.json(err));
  },
  upvoteQuote: function(req, res) {
    Quote.findById({ _id: req.params.id })
      .then(data => {
        let quote = data.quotes.id(req.params.quoteid);
        quote.votes++;
        console.log(quote);
        data.save();
      })
      .catch(err => res.json(err));
  },
  downvoteQuote: function(req, res) {
    Quote.findById({ _id: req.params.id })
      .then(data => {
        let quote = data.quotes.id(req.params.quoteid);
        quote.votes--;
        console.log(quote);
        data.save();
      })
      .catch(err => res.json(err));
  }
};
