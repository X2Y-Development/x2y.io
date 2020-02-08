<template>
    <header id="header" :class="{alt: altNav, reveal: !altNav}">
        <router-link to="/" class="logo" title="X2Y Development">
            <strong>X2Y</strong> <span v-show="!altNav">Development</span>
        </router-link>

        <nav>
            <a href="#menu" @click.stop="open">Menu</a>
        </nav>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                altNav: true,
                windowHeight: this.viewHeight(100),
                lastScrollPosition: 0
            }
        },
        methods: {
            open() {
                this.$emit('toggle-menu')
            },
            viewHeight(height) {
                const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                return (height * viewportHeight) / 100;
            },
            onScroll() {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

                if (currentScrollPosition < 0) {
                    return
                }

                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < this.windowHeight) {
                    return
                }

                this.altNav = currentScrollPosition < this.lastScrollPosition
                this.lastScrollPosition = currentScrollPosition
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>