angular.module('unlisted.services.mocks', [])
.factory('Mock', function() {
  var user = {
    id: '12345',
    token: 'qwerty',
    name: {
      first: 'Scott',
      last: 'Moss'
    }
  };


  var  companies = [
    {
      'name': 'Joe Shack',
      'type': 'restuarunt',
      'address': {
        'street': '230 powell st',
        'city': 'San Francisco',
        'zip': '94012'
      },
      'logo': '',
      'menu': [
        {
          'name': 'Flap jacks',
          'price': '1299',
          'days_left': '9'
        }
      ]
    },

    {
      'name': 'Roscoes',
      'type': 'restuarunt',
      'address': {
        'street': '888 market st',
        'city': 'San Francisco',
        'zip': '94012'
      },
      'logo': '',
      'menu': [
        {
          'name': 'Mayo chicken meal',
          'price': '889',
          'days_left': '22'
        },

        {
          'name': 'Lemonade Talapia',
          'price': '699',
          'days_left': '11'
        }
      ]
    },

    {
      'name': 'Anne"s Botique',
      'type': 'clothing',
      'address': {
        'street': '44 moe ave',
        'city': 'San Francisco',
        'zip': '94012'
      },
      'logo': '',
      'menu': [
        {
          'name': 'Sun hat',
          'price': '550',
          'days_left': '4'
        }
      ]
    }
  ];

  var hero = {
  'name': 'Blue Bottle',
  'type': 'cafe',
  'address': {
    'street': '111 5th st',
    'city': 'San Francisco',
    'zip': '94012'
  },
  'logo': 'http://blog.bedfordcheeseshop.com/wp-content/uploads/2012/06/BlueBottleCoffeeCo.jpg',
  'menu': [
    {
      'name': 'Orange coffee',
      'price': '550',
      'days_left': '4'
    }
  ]
};

  return {
    companies: companies,
    user: user,
    hero: hero
  };
});
