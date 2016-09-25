db.users.update(
   { firstName: "Jenny" },
   { $set:
      {
        wishlistsCreated: [
          {
            _id: db.wishlists.find()[0]._id,
            name: db.wishlists.find()[0].name,
          },
          {
            _id: db.wishlists.find()[1]._id,
            name: 'db.wishlists.find()[1].name,'
          },
        ],
        wishlistsJoined: [
          {
            _id: db.wishlists.find()[2]._id,
            name: db.wishlists.find()[2].name,
          },
          {
            _id: db.wishlists.find()[3]._id,
            name: db.wishlists.find()[3].name,
          }
        ]
      }
   }
)

db.students.update( { _id: 1 }, { $rename: { 'nickname': 'alias', 'cell': 'mobile' } } )

db.students.update( { _id: 1 }, { $rename: { "name.first": "name.fname" } } )

db.wishlists.update({}, { $rename: {"users.id": "users._id"}})

db.wishlists.update(
  { name: "Thanksgiving Weekend" },
  { $pull:
    { tours:
      { name: 'Half Day Whale Watching' }
    }
  }
)