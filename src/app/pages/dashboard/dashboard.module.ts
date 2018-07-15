import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {StatusCardComponent} from './status-card/status-card.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomSelectorComponent} from './rooms/room-selector/room-selector.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {TemperatureDraggerComponent} from './temperature/temperature-dragger/temperature-dragger.component';
import {TeamComponent} from './team/team.component';
import {KittenComponent} from './kitten/kitten.component';
import {SecurityCamerasComponent} from './security-cameras/security-cameras.component';
import {ElectricityComponent} from './electricity/electricity.component';
import {ElectricityChartComponent} from './electricity/electricity-chart/electricity-chart.component';
import {WeatherComponent} from './weather/weather.component';
import {SolarComponent} from './solar/solar.component';
import {PlayerComponent} from './rooms/player/player.component';
import {TrafficComponent} from './traffic/traffic.component';
import {TrafficChartComponent} from './traffic/traffic-chart.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {ChartjsPieComponent} from '../charts/chartjs/chartjs-pie.component';
import {HttpModule} from '@angular/http';
import {ChartjsBarComponent} from "../charts/chartjs/chartjs-bar.component";


@NgModule({
    imports: [
        ThemeModule,
        NgxEchartsModule,
        NgxChartsModule,
        ChartModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        HttpModule,
    ],
    declarations: [
        DashboardComponent,
        StatusCardComponent,
        TemperatureDraggerComponent,
        ContactsComponent,
        RoomSelectorComponent,
        TemperatureComponent,
        RoomsComponent,
        TeamComponent,
        KittenComponent,
        SecurityCamerasComponent,
        ElectricityComponent,
        ElectricityChartComponent,
        WeatherComponent,
        PlayerComponent,
        SolarComponent,
        TrafficComponent,
        TrafficChartComponent,
        ChartjsPieComponent,
        ChartjsBarComponent
    ],
})
export class DashboardModule {
}
