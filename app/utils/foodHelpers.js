import axios from 'axios'

const id = "8db81e73";
const sec = "9d1c6b52e2aa104929a368a3d307ad01";
const param = `?appId=${id}&appKey=${sec}`;

function getFoodSearch (search) {
  return axios.get('https://api.nutritionix.com/v1_1/search/' + search + param);
}

export async function getSearchResult (search) {
  let result = await getFoodSearch(search)
  return result;
}

// function getRepos (username) {
//   return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
// }

// function getTotalStars (repos) {
//   return repos.data.reduce(function (prev, current) {
//     return prev + current.stargazers_count
//   }, 0)
// }



// function getPlayersData (player) {
//   return getRepos(player.login)
//     .then(getTotalStars)
//     .then(function (totalStars) {
//       return {
//         followers: player.followers,
//         totalStars: totalStars
//       }
//     })
// }

// function calculateScores (players) {
//   return [
//     players[0].followers * 3 + players[0].totalStars,
//     players[1].followers * 3 + players[1].totalStars
//   ]
// }

// export function getPlayersInfo (players) {
//   return axios.all(players.map(function (username) {
//     return getUserInfo(username)
//   }))
//   .then(function (info) {
//     return info.map(function (user) {
//       return user.data
//     })
//   })
//   .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
// }

// export function battle (players) {
//   const playerOneData = getPlayersData(players[0]);
//   const playerTwoData = getPlayersData(players[1]);
//   return axios.all([playerOneData, playerTwoData])
//     .then(calculateScores)
//     .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
// }