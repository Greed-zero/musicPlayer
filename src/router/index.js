import VueRouter from "vue-router";
import videos from "@/views/mv/videos"
import findMusic from "@/views/findMusic/findMusic";
import recommend from "@/views/findMusic/recommend";
import list from "@/views/findMusic/list";
import customize from "@/views/findMusic/customize";
import rank from "@/views/findMusic/rank";
import singer from "@/views/findMusic/singer";
import newMusic from "@/views/findMusic/newMusic";
import musicList from "@/views/findMusic/musicList"
import highquality from "@/views/findMusic/highquality"
import dj from "@/views/dj/dj"
import attention from "@/views/attention/attention";
import listOfMusic from "@/views/listOfMusic/listOfMusic";
//创建一个路由器
const router =new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/findMusic'
        },
        {
            path:'/findMusic',
            component:findMusic,
            redirect:'/findMusic/recommend',
            children:[
                {
                    path:'recommend',
                    component:recommend
                },
                {
                    path:'list',
                    component:list,
                    redirect:'/findMusic/list/musicList',
                    children:[
                        {
                            path:'musicList',
                            component:musicList
                        },
                        {
                            path:'highquality',
                            component:highquality
                        }
                    ]
                },
                {
                    path:'customize',
                    component:customize
                },
                {
                    path:'rank',
                    component:rank
                },
                {
                    path:'singer',
                    component:singer
                },
                {
                    path:'newMusic',
                    component:newMusic
                },
            ]
        },
        {
            path:'/videos',
            component:videos
        },
        {
            path:'/dj',
            component:dj,
        },
        {
            path:'/attention',
            component:attention
        },
        {
            path:'/listOfMusic',
            component:listOfMusic
        }

    ]

})

//暴露
export default router
