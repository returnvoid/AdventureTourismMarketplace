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
            name: db.wishlists.find()[1].name,
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

db.wishlists.update(
  { name: "Thanksgiving Weekend" },
    { tours:
            {
                $push: {
                    _id: '57e70d8651bc3f0dbab89212',
                    name: "Half Day Whale Watching",
                    votes: 0
                }
            }
  }
)

db.wishlists.update(
  {name:  "Thanksgiving Weekend"},
  { $push:
    {
      tours: {
        _id: '57e70d8651bc3f0dbab89212',
        name: "Half Day Whale Watching",
        votes: 0
      }
    }
  }
  )
}

db.wishlists.update(
  { },
  { $pull: { tours: { _id: null } } },
)

db.collection.update(
    { "_id": ID, "playlists._id": "58"},
    { "$push":
        {"playlists.$.musics":
            {
                "name": "test name",
                "duration": "4.00"
            }
        }
    }
)