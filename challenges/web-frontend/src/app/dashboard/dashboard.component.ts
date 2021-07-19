import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  username = localStorage.getItem('username')

  constructor(private router: Router,private apiServiceService: ApiServiceService) { }
  
  getBuyerAuctions(): void {
    this.apiServiceService.getBuyerAuctionDetails().subscribe((data:any) => {
      this.items = []
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
  }
  ngOnInit(): void {
    this.getBuyerAuctions();
    setInterval(() => {
     this.getBuyerAuctions();
    }, 20000)
  }
  onLogout(){
    console.log("logout called")
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
