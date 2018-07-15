import {Component, OnDestroy, Input, SimpleChanges, OnChanges, NgZone} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {NbJSThemeVariable} from '@nebular/theme/services/js-themes/theme.options';

@Component({
    selector: 'ngx-chartjs-pie',
    template: `
        <chart type="pie" [data]="chartData" [options]="options"></chart>
    `,
})
export class ChartjsPieComponent implements OnDestroy, OnChanges {
    @Input() chartData: any;
    c_colors: NbJSThemeVariable;
    options: any;
    themeSubscription: any;

    ngOnChanges(changes: SimpleChanges) {
        this.ngZone.run(() => {
            const a = changes;
            const b = this.chartData;

            const c = [this.c_colors.warningLight,
                this.c_colors.infoLight,
                this.c_colors.dangerLight,
                this.c_colors.successLight,
                this.c_colors.primaryLight];
            this.chartData.datasets[0].backgroundColor = c;
        });
    }

    constructor(private theme: NbThemeService, private ngZone: NgZone) {

        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            this.c_colors = config.variables;
            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;
            // this.chartData.backgroundColor = [colors.primaryLight, colors.infoLight, colors.successLight];

            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }

    setData(data) {
        this.theme.getJsTheme().subscribe(config => {

            const colors: any = config.variables;
            const chartjs: any = config.variables.chartjs;
            this.chartData = data;
            this.chartData.backgroundColor = [colors.primaryLight, colors.infoLight, colors.successLight];

            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
