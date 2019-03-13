import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {ChampionService} from '../champion.service';
import {Champion} from '../Champion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-champion',
  templateUrl: './add-champion.component.html',
  styleUrls: ['./add-champion.component.css']
})
export class AddChampionComponent implements OnInit {
  champions: Champion[];
  championForm: FormGroup;

  constructor(private championService: ChampionService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.championForm = this.formBuilder.group({
        name: [''],
        mastery: [''],
        describe: ['']
      });
    this.championService.getChampions().subscribe(champions => this.champions = champions)
  }

  add(): void {
    if (this.championForm.valid) {
      const {value} = this.championForm;
      this.championService.add(value)
        .subscribe(champion => {
          this.champions.unshift(champion);
          this.router.navigate(['champions']);
          this.championForm.reset(
            {
              name: '',
              mastery: '',
              describe: ''
            }
          );
        });
    }
  }
}
