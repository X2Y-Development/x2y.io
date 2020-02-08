<template>
    <footer id="footer">
        <div class="inner">
            <ul class="icons">
                <li v-for="socialNetwork in socialNetworks" :key="socialNetwork.id">
                    <Link :link="socialNetwork"/>
                </li>
            </ul>
            <ul class="links">
                 <li v-for="(item, index) in menu" :key="index">
                    <router-link :to="item.path" :title="item.name">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    import Link from '@/components/elements/Link'

    export default {
        components: {
            Link
        },
        data: function () {
            return {
                socialNetworks: [
                    {
                        href: "https://twitter.com/X2Y_Development",
                        class: "icon brands alt fa-twitter",
                        title: "Follow X2Y on Twitter",
                        target: '_blank'
                    },
                    {
                        href: "https://www.instagram.com/X2Y_Development",
                        class: "icon brands alt fa-instagram",
                        title: "Follow X2Y on Instagram",
                        target: '_blank'
                    },
                    {
                        href: "https://www.linkedin.com/company/x2y.io",
                        class: "icon brands alt fa-linkedin-in",
                        title: "Follow X2Y on LinkedIn",
                        target: '_blank'
                    },
                    {
                        href: "https://github.com/X2Y-Development",
                        class: "icon brands alt fa-github",
                        title: "Follow X2Y on GitHub",
                        target: '_blank'
                    }
                ]
            }
        },
        computed: {
            menu: function() {
                let routes = [...this.$router.options.routes];

                routes.shift()
                
                return routes
            }
        }
    }
</script>