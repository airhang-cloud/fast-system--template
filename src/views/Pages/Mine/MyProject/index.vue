<template>
    <container-box title="个人中心" subtitle="我的工程">
        <div class="col-2">
            <a-button type="primary" @click="sort">reset</a-button>
        </div>

        <div class="col-6">
            <h3>Transition</h3>
            <draggable
                class="list-group"
                item-key="order"
                tag="transition-group"
                handle=".handle"
                :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
                v-model="list"
                v-bind="dragOptions"
                @start="isDragging = true"
                @end="isDragging = false"
            >
                <template #item="{ element }">
                    <li class="list-group-item">
                        <a-card :style="{ width: '360px' }" :title="element.name">
                            <icon-drag-dot-vertical class="handle" />
                            ByteDance's core product --- {{ element.name }}
                        </a-card>
                    </li>
                </template>
            </draggable>
        </div>
    </container-box>
</template>

<script>
import draggable from "vuedraggable";
const message = ["vue.draggable", "draggable", "component", "for", "vue3.x", "based", "on", "Sortablejs"];
export default {
    name: "transition-example",
    display: "Transition",
    order: 6,
    components: {
        draggable,
    },
    data() {
        return {
            list: message.map((name, index) => {
                return { name, order: index + 1 };
            }),
        };
    },
    methods: {
        sort() {
            this.list = this.list.sort((a, b) => a.order - b.order);
        },
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: false,
                ghostClass: "ghost",
            };
        },
    },
};
</script>

<style>
ul {
    list-style: none;
}
.button {
    margin-top: 35px;
}
.flip-list-move {
    transition: transform 0.5s;
}
.no-move {
    transition: transform 0s;
}
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
.list-group {
    min-height: 20px;
}
.list-group-item {
    cursor: move;
}
.list-group-item i {
    cursor: pointer;
}
</style>
