import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ground } from 'src/app/models/Ground';
import { Failure, Loading, Resource, Success } from 'src/app/models/Resource';
import { AuthService } from 'src/app/services/auth/AuthService';
import { GroundDetailService } from 'src/app/services/groundDetails/GroundDetailService';

@Component({
  selector: 'app-ground-complete-detail',
  templateUrl: './ground-complete-detail.component.html',
  styleUrls: ['./ground-complete-detail.component.css']
})
export class GroundCompleteDetailComponent implements OnInit {
  groundId: string | null = null
  ground: Ground | null = null
  isFetchingData = false

  constructor(
    private authService: AuthService,
    private groundDetailService: GroundDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchParams()
    this.fetchGround()
  }

  private fetchParams() {
    this.groundId = this.route.snapshot.paramMap.get('groundId')
  }

  private fetchGround() {
    if (this.groundId)
      this.groundDetailService.fetchGround(this.groundId).subscribe((resource: Resource<Ground>) => {
        if (resource instanceof Success) {
          this.ground = resource.data
          this.isFetchingData = false
        }
        if (resource instanceof Failure) {
          this.ground = null
          this.isFetchingData = false
        }

        if (resource instanceof Loading) {
          this.isFetchingData = true
        }
      })
  }

  isOwner(): boolean {
    return this.authService.isAdminUser()
  }

  editClick() {
    if (this.ground)
      this.router.navigate(['/form', { flow: 'update-ground', groundId: this.ground.groundId }])
  }

  bookClick() {
    if (this.ground)
      this.router.navigate(['/ground-list', this.ground.groundId])
  }
}
