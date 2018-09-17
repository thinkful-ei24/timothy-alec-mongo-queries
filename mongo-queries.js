
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