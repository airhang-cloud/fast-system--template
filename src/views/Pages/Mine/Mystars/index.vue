<template>
    <container-box title="个人中心" subtitle="我的星星">
        <a-table :columns="columns" :data="data" :pagination="no_default" />
        <a-pagination class="pagination-center" :total="50" show-total show-jumper show-page-size />
    </container-box>
</template>

<script>
export default {
    name: "MyStars",
    data() {
        return {
            no_default: false,
            columns: [
                {
                    title: "Name",
                    dataIndex: "name",
                },
                {
                    title: "Salary",
                    dataIndex: "salary",
                },
                {
                    title: "Address",
                    dataIndex: "address",
                },
                {
                    title: "Email",
                    dataIndex: "email",
                },
            ],
            data: [
                {
                    key: "1",
                    name: "Jane Doe",
                    salary: 23000,
                    address: "32 Park Road, London",
                    email: "jane.doe@example.com",
                },
                {
                    key: "2",
                    name: "Alisa Ross",
                    salary: 25000,
                    address: "35 Park Road, London",
                    email: "alisa.ross@example.com",
                },
                {
                    key: "3",
                    name: "Kevin Sandra",
                    salary: 22000,
                    address: "31 Park Road, London",
                    email: "kevin.sandra@example.com",
                },
                {
                    key: "4",
                    name: "Ed Hellen",
                    salary: 17000,
                    address: "42 Park Road, London",
                    email: "ed.hellen@example.com",
                },
                {
                    key: "5",
                    name: "William Smith",
                    salary: 27000,
                    address: "62 Park Road, London",
                    email: "william.smith@example.com",
                },
            ],
        };
    },
};
</script>

<style scoped></style>
