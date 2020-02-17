// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// myHeaders.append("Authorization", "Bearer f9f852b990e90949da173cb4cabc8267b55645c8");

// var formdata = new FormData();
// formdata.append("refresh_token", "");
// formdata.append("client_id", "");
// formdata.append("client_secret", "");
// formdata.append("grant_type", "refresh_token");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.imgur.com/3/album/MsAJctm/images", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// import qs from 'qs';
// import axios from 'axios';

// // const CLIENT_ID = process.env.CLIENT_ID
// // const ACCESS_TOKEN = process.env.ACCESS_TOKEN
// const ROOT_URL = 'https://api.imgur.com'
// const CLIENT_ID = `6e79d957303ffff`
// const ACCESS_TOKEN = `7212c5e90cfd58bb57682ebc54f1bb683a25ceff`

// export default{
//     login(){
//         const queryString ={
//             client_id: CLIENT_ID,
//             response_type: 'token'
//         };
//         console.log("imgur token here",ACCESS_TOKEN)
//         console.log("imgur clientID here",CLIENT_ID)
//         console.log("imgur queryString here", queryString)

//         window.location  = `${ROOT_URL}//oauth2//authorize?${qs.stringify(queryString)}`;

//     },
//     fetchImages(accessToken){
//         return axios.get(`${ROOT_URL}//3//account//me//images`, {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//                 // Authorization: `Bearer 7212c5e90cfd58bb57682ebc54f1bb683a25ceff`
//             }
//         })
//     },



    // uploadImages(images, token){
    //     const promises = Array.from(images).map(image =>{
    //         const formData = new FormData();
    //         formData.append('image', image);

    //         return axios.post(`${ROOT_URL}//3//image`, formData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //     });

    //     return Promise.all(promises);
    // }

// }