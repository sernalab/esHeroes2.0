<template>
    <nuxt-link :to="'/mapas/' + id">
        <article class="mapa">
            <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
            <div class="box-name">
                <span class="map-name">{{ title }}</span>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
    export default {
        props: [
            'thumbnail', 'title', 'id'
        ]
    }
</script>