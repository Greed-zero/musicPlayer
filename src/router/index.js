import VueRouter from "vue-router";
import video from "@/views/mv/video";
import findMusic from "@/views/findMusic/findMusic";
import recommend from "@/views/findMusic/recommend";
import list from "@/views/findMusic/list";
import customize from "@/views/findMusic/customize";
import rank from "@/views/findMusic/rank";
import singer from "@/views/findMusic/singer";
import newMusic from "@/views/findMusic/newMusic";

//创建一个路由器
const router =new VueRouter({
    routes:[
        {
            path:'/findMusic',
            component:findMusic,
            children:[
                {
                    path:'recommend',
                    component:recommend
                },
                {
                    path:'list',
                    component:list
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
                }
            ]
        },
        {
            path:'/video',
            component:video,
        }
    ]

})

//暴露
export default router
