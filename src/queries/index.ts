import { gql } from "@apollo/client";

// * FIELDS 
const query = gql`
query Me{ 
  viewer { 
    login
  }
}
`

// * ARGUMENTS
// const query = gql`
//   query User{
//     user(login: "") { 
//       name, 
//       email,
//       id,
//       followers(first: 1) { 
//         edges { 
//           node { 
//             login
//             name
//           }
//         }
//       }
//     }
//   }
// `
// * ALIASES
// const query = gql`
//   query User{
//       user(login: "") { 
//         firstFollower: followers(first: 1) { 
//           edges { 
//             node { 
//               login
//               name
//             }
//           }
//         }
//       }
//   }
// `


// * FRAGMENTS
// const followers = gql`
//     fragment FirstFollower on User {
//       followers(first: 1) { 
//           edges { 
//             node { 
//               login
//               name
//             }
//           }
//         }
//     }
// `

// const basicInfo = gql`
//   fragment BasicInfo on User {
//     login
//     name
//     avatarUrl
//   }
// `
// const query = gql`
//   ${basicInfo}
//   query User{
//       user(login: "andreamazzatxt") { 
//         ...BasicInfo
//       }
//   }
// `

// * VARIABLES
// const query = gql`
//   query UserWithFirstFriend($login: String!) {
//     user(login: $login) { 
//       name
//       id
//       followers(first: 1) { 
//         edges { 
//           node { 
//             login
//             name
//           }
//         }
//       }
//     }
//   }
// `

// * DIRECTIVES 
// const query = gql`
//   query UserWithFirstFriend($login: String!, $withFollowers: Boolean!) {
//     user(login: $login) { 
//       name
//       followers (first: 20) @include(if: $withFollowers) { 
//         edges { 
//           node { 
//             login
//             name
//           }
//         }
//       }
//     }
//   }
// `

// * MUTATION
const mutation = gql`
  mutation FollowUser($userId: ID!) {
      followUser(input: {userId: $userId }) { 
        user {
          name
          id
        }
      }
  }
`

export { query, mutation }