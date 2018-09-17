
// // 1. displays all documents
//  db.notes.find();

// // 2. display all documents and formats with pretty()
// db.notes.find().pretty();

// 3.
// db.notes.find(
//     {},
//     { title: 1, content: 1}
// ).pretty();

//4. exclude _id field
// db.notes.find(
//     {},
//     { title: 1, content: 1, _id: 0}
// ).pretty();

// 5. display only title field and sort results by _id in descending order
// db.notes.find(
//     {},
//     {title: 1, _id: 0}
// ).sort({_id: -1});

// 6.
// db.notes.find({title: '5 life lessons learned from cats'}).pretty();

// 7. display first five documents
// db.notes.find().limit(5).pretty();

// 8. display next five after skipping first five
// db.notes.find().skip(5).limit(5).pretty();

// 9. display total number documents in collection notes
// db.notes.find().count();

// 10. createdAt date greater than Jan 01 2018
// db.notes.find(
//     {
//         createdAt: {
//             $gt: new Date('Jan 01 2018')
//         }
//     },
//     {
//         title: 1,
//         createdAt: 1
//     }
// ).pretty();

// 11. updatedAt is greater than or equal to Jan 01 2018 but less than or equal to now
// db.notes.find(
//     {
//         updatedAt: {
//             $gte: new Date('Jan 01 2018'),
//             $lte: new Date(Date.now())
//         }
//     },
//     {
//         title: 1,
//         updatedAt: 1,
//         _id: 0
//     }
// ).pretty();

// 12. display all notes createdAt less than or equal to now
// db.notes.find(
//     {
//         createdAt: {
//             $lte: new Date(Date.now())
//         }
//     },
//     {
//         title: 1,
//         createdAt: 1,
//         _id: 0
//     }
// ).pretty();
// 13Write a MongoDB query to display only one document from the collection notes.
//
// db.notes.find().limit(1).pretty();

//14 Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).
// db.notes.find({}, {title: 1}).limit(1);

//15 Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).
// db.notes.find({}, {title: 1, _id: 0}).limit(1);

//16 Write a MongoDB query to insert one document into the collection notes. The title and content fields can be whatever you like.
// db.notes.insert({title: "asdf", content: "sadfweqradsf"});

//17Write a MongoDB query to insert two note documents into the collection notes. The title and content fields can be whatever you like.
// db.notes.insertMany([{title: "things", content: "sadfweqradsf"}, {title: "people", content: "asdfasdf"}], {});

//18 Write a MongoDB query to modify the title and content fields of the document from the collection notes with _id "000000000000000000000003".
//Change the title and content to be whatever you like.
// db.notes.updateOne({_id: ObjectId('000000000000000000000003')}, {$set: {title: 'title I changed', content: 'content I changed'}});
// db.notes.find({title: 'title I changed'});

//19 Write a MongoDB query to modify only the title field of th
//e document from the collection notes with _id "000000000000000000000007". The content field should remain unchanged.
// db.notes.updateOne({_id: ObjectId('000000000000000000000007')}, {$set: {title: 'only the title I changed'}});

//20 Write a MongoDB query to modify the title and
//content fields of all the documents in the collection notes that have an createdAt field greater than Jan 01 2018.
// db.notes.updateMany({
//   createdAt: {
//              $gt: new Date('Jan 01 2018')
//          }
// },
//   {$set: {title: 'something', content: "asdfdfsaadfsdfsa"}}
// )

//21. Write a MongoDB query to remove only the title
//field from the document in the collection notes with _id "000000000000000000000005".
// db.notes.updateOne({_id: ObjectId('000000000000000000000003')}, {$unset: {title: ""}});
// db.notes.find({_id: ObjectId('000000000000000000000003')});

//22. Write a MongoDB query to remove the content fields
// from all documents in the collection notes with a createdAt field which is less than or equal to "Now"
//
// db.notes.updateMany({
//   createdAt: {
//       $lte: new Date('Jan 01 2018')
//   }
// },
// {$unset: {content: ""}}
// )














//
