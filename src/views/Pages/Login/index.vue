<script>
import { defineComponent } from "vue";
import LoginView from "./View";

export default defineComponent({
    name: "index",
    components: { LoginView },
    render() {
        return <login-view />;
    },
});
</script>
