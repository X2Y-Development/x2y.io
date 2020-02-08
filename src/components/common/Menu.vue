<template>
    <nav id="menu">
        <div class="inner">
            <ul class="links">
                <li @click="close()" v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.path" :title="item.name">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <a class="close" @click="close()">Close</a>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: this.$router.options.routes
        }
    },
    methods: {
        close() {
            this.$emit('toggle-menu')
        }
    }
}
</script>