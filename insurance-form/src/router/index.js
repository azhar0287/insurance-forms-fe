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
        path: "/create-order",
        name: "createorder",
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
            import ("../views/cameraform/InsruanceFileUpload.vue"),
        
    },
    {
        path: "/formview",
        name: "formview",
        component: () =>
            import ("../views/formview/FormView.vue"),
        
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
            import ("../views/dashboard/Dashboard.vue"),
        
    },
    {
        path: "/patientCount",
        name: "patientCount",
        component: () =>
            import ("../views/patientcount/PatientCount.vue"),
        
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
