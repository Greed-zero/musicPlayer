import axios from "axios";

export function getBanner() {
    let res
    axios.get('http://localhost:3000/banner').then(
        response =>{
            res = response.data
        },
        error =>{
            console.log('请求失败了',error.message)
        }
    )
    return res
}

// export function getBanner(banners) {
//     axios({
//         url:'http://localhost:3000/banner',
//         method:'get',
//
//     }).then(
//         response =>{
//             banners = response.data.banners
//             console.log(banners)
//         },
//         error =>{
//             console.log('请求失败了',error.message)
//         }
//     )
// }
