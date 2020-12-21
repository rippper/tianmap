<template>
    <div id="mapDiv"></div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'map',
    data() {
        return {
            map: '',
            cityName: '绍兴市',
            cityinfo: '',
            centerList: []
        }
    },
    mounted() {
        this.onLoad()
    },
    methods: {
        onLoad() {
            let that = this
            let countries = [];
            let countriesOverlay = new T.D3Overlay(init,redraw);
            let countriesOverlay1 = new T.D3Overlay(init1,redraw1);
            let centerInfo = new T.D3Overlay(initInfo,redrawInfo)
            let zoom = 9;
            that.map = new T.Map('mapDiv')
            that.map.centerAndZoom(new T.LngLat(120.57, 30), zoom);
            d3.json("/api/data", function(data) {
                countries = data.features;
                that.map.addOverLay(countriesOverlay)
                countriesOverlay.bringToBack();
                that.map.addOverLay(countriesOverlay1)
                countriesOverlay.bringToBack();
                that.map.addOverLay(centerInfo)
            })
            function init(sel, transform) {
                console.log(sel)
                var upd = sel.selectAll('path.geojson').data(countries);
                upd.enter()
                    .append('path')
                    .attr("class", "geojson")
                    .attr('stroke', 'black')
                    .attr('fill', function (d, i) {
                        return d3.hsl(Math.random() * 360, 0.9, 0.5)
                    })
                    .attr('fill-opacity', '0.5')
            }

            function redraw(sel, transform) {
                sel.selectAll('path.geojson').each(
                        function (d, i) {
                            d3.select(this).attr('d', transform.pathFromGeojson)
                        }
                )

            }
            function init1(sel, transform) {
                var upd = sel.selectAll('path.geojson1').data(countries);
                upd.enter()
                    .append('path')
                    .attr("class", "geojson1")
                    .attr('stroke', 'black')
                    .attr('fill', function (d, i) {
                        return d3.hsl(Math.random() * 360, 0.9, 0.5)
                    })
                    .attr('fill-opacity', '0.5')


            }

            function redraw1(sel, transform) {
                sel.selectAll('path.geojson1').each(
                    function (d, i) {
                        d3.select(this).attr('d', transform.pathFromGeojson)
                    }
                )

            }
            
            function initInfo(sel, transform) {
                let Info = sel.selectAll('text.info').data(countries)
                        .enter()
                        .append('text')
                        .attr('class', 'info')
                        // .attr('x', function(d2, i) {
                        //     return d2.properties.center[0]
                        // })
                        // .attr('y', function(d2, i) {
                        //     return d2.properties.center[1]
                        // })
                        .text(function(d){ return d.properties.name})
                
            }

            function redrawInfo(sel, transform) {
                sel.selectAll('text.info').each(
                    function(d,i) {
                        if(d && d.properties && d.properties.center[0] && d.properties.center[1]) {
                            var _latlng = new T.LngLat(d.properties.center[0], d.properties.center[1]);
                            d3.select(this)
                                .attr("transform", "translate(" + that.map.lngLatToLayerPoint(_latlng).x + ',' + that.map.lngLatToLayerPoint(_latlng).y +')')
                        }
                    }
                )
            }
        }
    }
}
</script>

<style lang="scss">
#mapDiv{
    width: 1080px;
    height: 1080px;
}
</style>