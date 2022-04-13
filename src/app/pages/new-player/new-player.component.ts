import { Component, Input, OnInit } from '@angular/core';
import { getFirestore, collection, addDoc } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@app/shared/library/indicators/snack-bar/notification.service';
import { markFormGroupTouched } from '@app/shared/utils/form.service';
import { PlayerResponseInterface } from '../players/store/types/playerResponse.interface';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent implements OnInit {
  form: FormGroup;
  player: PlayerResponseInterface;
  isFormSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        this.player?.name,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      phone: [
        this.player?.phone,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      email: [
        this.player?.email,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      weight: [
        this.player?.weight,

        {
          updateOn: 'blur',
          validators: [Validators.maxLength(128)],
        },
      ],
      height: [
        this.player?.height,

        {
          updateOn: 'blur',
          validators: [Validators.maxLength(128)],
        },
      ],
      birthplace: [
        this.player?.birthplace,

        {
          updateOn: 'blur',
          validators: [Validators.maxLength(128)],
        },
      ],
      sponsors: [
        this.player?.sponsors,

        {
          updateOn: 'blur',
          validators: [Validators.maxLength(128)],
        },
      ],
      bio: [
        this.player?.bio,

        {
          updateOn: 'blur',
          validators: [Validators.maxLength(128)],
        },
      ],
      image: [
        this.player?.bio,

        {
          updateOn: 'blur',
        },
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const db = getFirestore();
      const colRef = collection(db, 'players');
      addDoc(colRef, {
        ...this.form.value,
      });
      this.router.navigate(['players']);
      this.notification.success('Added new player success!');
      this.isFormSubmitted = true;
    } else {
      markFormGroupTouched(this.form);
    }
  }

  canDeactivate = () => {
    return !this.form?.dirty || this.isFormSubmitted;
  };
}
