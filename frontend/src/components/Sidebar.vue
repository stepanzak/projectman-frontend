<template>
    <aside class="sidebar">
        <ul class="app-sections-list">
            <li class="app-section-link" @click="setPageTo('Naklady')">Náklady</li>
            <li class="app-section-link" @click="setPageTo('Ukoly')">Úkoly</li>
            <li class="app-section-link" @click="setPageTo('Lide')">Lidé</li>
        </ul>
    </aside>

</template>

<script>
export default {
    name: 'Sidebar',

    methods: {
        setPageTo: function (page) {
            this.$store.commit('changePage', page)
        }
    }
}
</script>

<style>
.sidebar {
    grid-area: aside;
    border-right: 5px solid black;
    height: 90vh;
    background-color: var(--main-color-darker);
}

.app-sections-list {
    list-style: none;
}

.app-section-link {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    background-color: var(--main-color-lighter);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.app-section-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #18272F;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

.app-section-link:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}
</style>