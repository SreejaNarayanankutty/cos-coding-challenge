import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

export interface Items {
  imageUrl: string;
  label: string;
  ez: string;
  milageInKM: number;
  fuelType: string;
  transmission: string;
  currentHighestBidValue: number;
  remainingTimeInSeconds: number;
  amIHighestBidder: boolean
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Items[] = []

  constructor(private apiServiceService: ApiServiceService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.apiServiceService.getBuyerAuctionDetails().subscribe((data:any) => {
        data.items.forEach((item: any) => {
           const carItem: any = {}
           carItem['imageUrl'] = item['associatedVehicle']['vehicleImages'][0]['url']
           carItem['label'] = item['label']
           carItem['ez'] = item['associatedVehicle']['ez']
           carItem['milageInKM'] = item['associatedVehicle']['mileageInKm']
           carItem['fuelType'] = item['associatedVehicle']['fuelType']
           carItem['transmission'] = item['associatedVehicle']['transmission']
           carItem['currentHighestBidValue'] = item['currentHighestBidValue']
           carItem['remainingTimeInSeconds'] = item['remainingTimeInSeconds']
           carItem['amIHighestBidder'] = item['amIHighestBidder']
           this.items.push(carItem)
        });
       })
    }, 20000)
  }
}
