import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from '../../service/dashboard-service';
import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
    selector: 'ngx-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    cameras: any = [
        {id: 'aaa', name: 'Kitchen'},
        {id: 'bbb', name: 'Entrance'},
        {id: 'ccc', name: 'Cashiers'},
        {id: 'ddd', name: 'Food Court'}
    ];

    selectedCamera: any = 'aaa';
    genderCamera = {
        labels: ['Male', 'Female'],
        datasets: [{
            data: [100, 128],
            //backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
    };
    ageCamera = {
        labels: ['0-20', '20-40', '40+'],
        datasets: [{
            data: [3, 12, 40]
        }],
    };
    emotionCamera = {
        labels: ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad', 'Surprise'],
        datasets: [{
            data: [10, 13, 16, 8, 0, 0, 7]
        }],
    };
    camData4 = {
        labels: ['Gender', 'Age', 'Emotion'],
        datasets: [{
            data: []
        }],
    };

    constructor(private dashboardService: DashboardService) {

    }

    ngOnInit() {
        this.getCamera1Data();
        this.getCamera2Data();
        this.getCamera3Data();
        this.getCamera4Data();
    }

    getCamera1Data() {
        const age = this.dashboardService.getAge1();
        const gender = this.dashboardService.getGender1();
        const emo = this.dashboardService.getEmotion1();

        forkJoin([gender, age, emo]).subscribe((res: any) => {
            this.camData1.datasets = [res[0].length, res[1].length, res[2].length];
        });
    }

    getCamera2Data() {
        const age = this.dashboardService.getAge2();
        const gender = this.dashboardService.getGender2();
        const emo = this.dashboardService.getEmotion2();
        forkJoin([gender, age, emo]).subscribe((res: any) => {
            this.camData2.datasets = [res[0].length, res[1].length, res[2].length];
        });
    }

    getCamera3Data() {
        const age = this.dashboardService.getAge1();
        const gender = this.dashboardService.getGender1();
        const emo = this.dashboardService.getEmotion1();
        forkJoin([gender, age, emo]).subscribe((res: any) => {
            this.camData3.datasets = [res[0].length, res[1].length, res[2].length];
        });
    }

    getCamera4Data() {
        const age = this.dashboardService.getAge1();
        const gender = this.dashboardService.getGender1();
        const emo = this.dashboardService.getEmotion1();
        forkJoin([gender, age, emo]).subscribe((res: any) => {
            this.camData4.datasets = [res[0].length, res[1].length, res[2].length];
        });
    }
}
