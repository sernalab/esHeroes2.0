<template>
    <section class="container">
        <p>{{ $route.params.id }}</p>
        <LargeMap/>   
    </section>
</template>

<script>
    import LargeMap from '@/components/Mapas/LargeMap'

    export default {
        components: {
            LargeMap
        },
        asyncData(context){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        mapas:[
                                {
                                    id: "1",
                                    title: "Tumba de la Reina Araña",
                                    thumbnail: "https://boostingfactory.com/heroes-of-the-storm/wp-content/uploads/2015/10/maxresdefault-e1444955213521.jpg"
                                },
                                {
                                    id: "2",
                                    title:"Santuarios Infernales",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/9.jpg" 
                                },
                                {
                                    id: "3",
                                    title:"Torres de Fatalidad",
                                    thumbnail:"https://c-5uwzmx78pmca09x24l9c3x781t2ex78ig1sx2ektwclnzwvbx2evmb.g00.gamepedia.com/g00/3_c-5pmzwmawnbpmabwzu.oiumx78mlqi.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fl9c3x781t2ex78ig1s.ktwclnzwvb.vmbx2fittabiza_oiumx78mlqix2fbpcujx2f5x2f55x2fBwemza_wn_Lwwu_Izb.rx78ox2f588x78f-Bwemza_wn_Lwwu_Izb.rx78ox3fdmzaqwvx3din30457l3nil23ml6i75304681j09728x26q98k.uizsx3dquiom_$/$/$/$/$/$/$" 
                                },
                                {
                                    id: "4",
                                    title:"Cuenca Maldita",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/3.jpg" 
                                },
                                {
                                    id: "5",
                                    title:"Condado del Dragón",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/3.jpg" 
                                }
                            ].find(el => el.id === context.params.id)
                    })
                }, 500);
            })
    }}
</script>
