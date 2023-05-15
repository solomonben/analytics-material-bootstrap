
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import * as shape from 'd3-shape';
import { AnalyticService } from 'app/main/apps/dashboards/analytic/analytic.service';
import { multi, horizontalnormalized } from './data';
@Component({
    selector     : 'analytics-dashboard',
    templateUrl  : './analytic.component.html',
    styleUrls    : ['./analytic.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    
})
export class AnalyticComponent implements OnInit
{
    widgets: any;
    widget1SelectedYear = '2016';
    widget5SelectedDay = 'today';

    /**
     * Constructor
     *
     * @param {AnalyticsDashboardService} _analyticsDashboardService
     */

    multi: any[];
    view: any[] = [800, 400];
    widget5: any = {};
    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '';
    showYAxisLabel: boolean = true;
    yAxisLabel: string = '';
    legendTitle: string = 'Years';

    suppliersales = {
        domain: ['#174764', '#39BBFF', '#39BBFF']
      };
    trends = {
      domain: ['#174764', '#39BBFF','#234990', '#39BBFF']
    };
    constructor(
        private _analyticsDashboardService: AnalyticService
    )
    {
        // Register the custom chart.js plugin
       //this._registerCustomChartJSPlugin();
        Object.assign(this, { multi,horizontalnormalized })
        this.widget5 = {
            currentRange  : 'TW',
            xAxis         : true,
            yAxis         : true,
            gradient      : false,
            legend        : false,
            showXAxisLabel: false,
            xAxisLabel    : 'Days',
            showYAxisLabel: false,
            yAxisLabel    : 'Isues',
            scheme        : {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect      : (ev) => {
                console.log(ev);
            },
            supporting    : {
                currentRange  : '',
                xAxis         : false,
                yAxis         : false,
                gradient      : false,
                legend        : false,
                showXAxisLabel: false,
                xAxisLabel    : 'Days',
                showYAxisLabel: false,
                yAxisLabel    : 'Isues',
                scheme        : {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve         : shape.curveBasis
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the widgets from the service
        this.widgets = this._analyticsDashboardService.widgets;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a custom plugin
     */
    private _registerCustomChartJSPlugin(): void
    {
        (window as any).Chart.plugins.register({
            afterDatasetsDraw: function(chart, easing): any {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function(dataset, i): any {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function(element, index): any {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (window as any).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }
}
