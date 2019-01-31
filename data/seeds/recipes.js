
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, user_id: 1, name: 'Everything Soft Pretzels', link: 'http://sugarandwine.com/homemade-everything-soft-pretzels/', tag: 'Bread'},
        {id: 2, user_id: 1, name: 'Crispy Parm Garlic Edamame', link: 'https://homemadehooplah.com/crispy-parmesan-garlic-edamame/', tag: 'Vegetable'},
        {id: 3, user_id: 1, name: 'Coconut Lemon Cheesecake', link: 'http://rainbowinmykitchen.com/coconut-lemon-and-berry-cheesecake/', tag: 'Dessert'},
        {id: 4, user_id: 1, name: 'Asparagus Chard Ramen Bowl', link: 'https://gratefulgrazer.com/home/asparagus-chard-ramen-bowl/', tag: 'Vegetable'},
        {id: 5, user_id: 1, name: 'Chickpea Tacos', link: 'https://www.theartfulappetite.com/truly-healthy-vegetarian-cookbook-review-spicy-chickpea-tacos-vegan-recipe/', tag: 'Protein'},
        {id: 6, user_id: 1, name: 'Apple Fritter Rings', link: 'https://www.elephantasticvegan.com/vegan-apple-fritter-rings/', tag: 'Dessert'},
        {id: 7, user_id: 1, name: 'Wild Garlic Gnocchi', link: 'https://circusgardener.com/2018/04/07/wild-garlic-gnocchi-with-kale/', tag: 'Pasta'},
      ]);
    });
};
