<template>        
    <section>
        <Search />
        <section class="container mapas-grouped">
            <Mapa 
                v-for="mapa in mapas"
                :key="mapa.id"
                :title="mapa.title"
                :thumbnail="mapa.thumbnail" 
                :id="mapa.id"
            />
        </section>   
    </section>
</template>

<script>
    import Mapa from '@/components/Mapas/Mapa'
    import Search from '@/components/Search'

    export default {
        components: {
            Mapa, Search
        },
        asyncData(){
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
                                    thumbnail:"https://assets.tentonhammer.com/guides/attached_images/000/011/429/medium/Dragonshire.jpg?1527270029" 
                                },
                                {
                                    id: "6",
                                    title:"Resistencia en Braxis",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/12.jpg" 
                                },
                                {
                                    id: "7",
                                    title:"Estación Nuclear",
                                    thumbnail:"https://i.ytimg.com/vi/pmwUPnS4cEY/maxresdefault.jpg" 
                                },
                                {
                                    id: "8",
                                    title:"Bahía de Almanegra",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/4.jpg" 
                                },
                                {
                                    id: "9",
                                    title:"Jardín del Terror",
                                    thumbnail:"https://vignette.wikia.nocookie.net/heroesofthestorm/images/9/9a/Garden_of_Terror.jpg/revision/latest/scale-to-width-down/2000?cb=20140802083314" 
                                },
                                {
                                    id: "10",
                                    title:"Templo Celeste",
                                    thumbnail:"https://www.heroescounters.com/images/maps/400/6.jpg" 
                                },
                                {
                                    id: "11",
                                    title:"Campos Batalla Eternidad",
                                    thumbnail:"https://vignette.wikia.nocookie.net/heroesofthestorm/images/f/f4/Battlefield_of_Eternity.jpg/revision/latest?cb=20180122180015" 
                                },
                                {
                                    id: "12",
                                    title:"Minas Encantadas",
                                    thumbnail:"https://d1u5p3l4wpay3k.cloudfront.net/allstars_gamepedia/thumb/f/f0/Haunted_Mines.jpg/350px-Haunted_Mines.jpg?version=8df02e349145b2828a94d7804243a494" 
                                },
                                {
                                    id: "13",
                                    title:"Fundición de Volskaya",
                                    thumbnail:"https://i.ytimg.com/vi/dH4pUEBGgSg/maxresdefault.jpg" 
                                },
                                {
                                    id: "14",
                                    title:"Cañón de Alterac",
                                    thumbnail:"https://i.gadgets360cdn.com/large/Alterac_Pass_Loading_Screen_1528133354660.jpg?output-quality=80" 
                                }
                            ]
                    })
                }, 500);
            })
        }
    }
</script>

<style lang="sass">
    
</style>
