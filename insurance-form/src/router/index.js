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
        path: "/personal-image",
        name: "personal-image",
        component: () =>
            import ("../views/cameraform/PersonalPhotoInput.vue"),
        
    },
    {
        path: "/insurance-image",
        name: "insurance-image",
        component: () =>
            import ("../views/cameraform/InsruanceFileUpload.vue"),
        
    },
    {
        path: "/form-view",
        name: "form-view",
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
        path: "/patient-count",
        name: "patient-count",
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
