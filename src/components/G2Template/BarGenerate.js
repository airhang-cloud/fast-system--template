import { Bar } from "@antv/g2plot";
import "./CSS/index.css";

export default {
    name: "BarGenerate",
    data() {
        return {
            list: [
                { year: "1951 年", value: 38 },
                { year: "1952 年", value: 52 },
                { year: "1956 年", value: 61 },
                { year: "1957 年", value: 145 },
                { year: "1958 年", value: 48 },
            ],
        };
    },
    mounted() {
        const bar = new Bar("container7", {
            data: this.list,
            xField: "value",
            yField: "year",
            seriesField: "year",
            legend: {
                position: "top-left",
            },
        });

        bar.render();
    },
    render() {
        return <div id="container7" class="barKey animate__animated animate__fadeIn animate__faster animate__zoomIn"></div>;
    },
};
