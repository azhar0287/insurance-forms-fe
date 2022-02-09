import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: () =>
            import ("../views/Index.vue"),
        
    },
    {
        path: "/insurance",
        name: "insurance",
        component: () =>
            import ("../views/insuranceform/InsuranceForm.vue"),
        
    },
    {
        path: "/imageInfo",
        name: "imageInfo",
        component: () =>
            import ("../views/cameraform/PersonalPhotoInput.vue"),
        
    },
    {
        path: "/cardImage",
        name: "cardImage",
        component: () =>
            import ("../views/cameraform/PassportFileUpload.vue"),
        
    }
];

// Always leave this as last one
// if (process.env.MODE !== "ssr") {
//     routes.push({
//         path: "*",
//         component: () =>
//             import ("../views/Error404.vue")
//     });
// }

const router = new VueRouter({
    mode: "hash",
    base: process.env.VUE_APP_API_BASE,
    routes
});

export default router;
