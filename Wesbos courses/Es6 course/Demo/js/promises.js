//Promieses

console.log("Going to fetch the last posts from wes/block ");

// const postsPromises =fetch('http://wesbos.com/wp-json/wp/v2/posts');
// postsPromises
//     .then(data=>data.json())
//     .then(data=>{console.log(data)})
//     .catch((err)=>{console.error(err)});

// Create a promises
// const p =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(Error('err wes isn\'t cool'));
//     },1000)
// });

// p
//     .then(data=>{console.log(data);})
//     .catch((err)=>{console.error(err)})

//changing promises + follow control
const posts = [
  { title: "i love javascrip", author: "wes bos", id: 1 },
  { title: "css", author: "Chris Coyier", id: 2 },
  { title: "Dev tool trick", author: "Addy Osami", id: 3 },
];

const authors = [
  { name: "wes bos", twitter: "@wesbos", bio: "Canadian develop" },
  { name: "Chris Coyier", twitter: "@chriscoyier", bio: "CSS tricks and Codepen" },
  { name: "Addy Osami", twitter: "@addyosami", bio: "Googler" },
];

function getPostById(id) {
  //create a new promises
  return new Promise((resolve, reject) => {
    //   using setTimeout to mimick a databse
    setTimeout(() => {
      // find the post we want
      const post = posts.find((post) => post.id === id);
      if (post) {
        resolve(post); //send the post back
      } else {
        reject(Error("No post was found"));
      }
    }, 1000);
  });
}
function hydrateAuthor(post) {
  //create a new promises
  return new Promise((resolve, reject) => {
    //   find the author
    const authorDetails = authors.find((person) => person.name === post.author);
    if (authorDetails) {
      // 'hydrate' the post object with author object
      post.author = authorDetails;
      resolve(post);
    } else {
      reject(Error("Can not find the author"));
    }
  });
}
getPostById(1)
  .then((post) => {
    return hydrateAuthor(post);
  })
  .then((post) => {
    // console.log(post);
  })
  .catch((err) => {
    console.error(err);
  });

// working with muntiple promises

const weathers= new Promise((resolve)=>{
    setTimeout(() => {
        resolve({temp:29,conditions:'Sunny with clouds'});
    }, 1000);
})

const tweets =new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(['I like cake','BBQ is good too']);
    }, 500);
})

// Promise
//     .all([weathers,tweets])
//     .then(responses=>{
//         const [weatherInfo,tweetInfo]=responses;
//         console.log(weatherInfo,tweetInfo);
//     });



const postsPromises=fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromises=fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
    .all([postsPromises,streetCarsPromises])
    .then(responses=>{
        return Promise.all(responses.map(res=>res.json()));
    })
    .then(responses=>{
        console.log(responses);
    })