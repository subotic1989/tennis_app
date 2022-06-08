import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnsavedPlayerGourd } from '@app/guards/unsavedPlayerEdit.guard';
import { NotificationService } from '@app/shared/library/indicators/snack-bar/notification.service';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { editPlayerAction } from '../../store/players.actions';
import { getPlayerSelector } from '../../store/players.selectors';
import { PlayerResponseInterface } from '../../store/types/playerResponse.interface';
import { doc, getFirestore, deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent
  implements OnInit, OnDestroy, UnsavedPlayerGourd
{
  form: FormGroup;
  unsubscribePlayer: Subscription;
  player: PlayerResponseInterface;
  isFormSubmitted: boolean = false;
  isDialog: boolean = true;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initForm();
  }

  initValues() {
    this.unsubscribePlayer = this.store
      .pipe(select(getPlayerSelector))
      .subscribe((data) => {
        this.player = data;
      });
  }

  confirmDelete() {
    const db = getFirestore();
    const docRef = doc(db, 'players', this.player?.eventId);
    deleteDoc(docRef);
    this.notification.error('Deleted Success!');
    this.router.navigate(['./players']);
    this.isDialog = true;
  }
  cancelDelete() {
    this.isDialog = true;
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
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      height: [
        this.player?.height,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      birthplace: [
        this.player?.birthplace,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      sponsors: [
        this.player?.sponsors,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      points: [
        this.player?.points,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
      bio: [
        this.player?.bio,

        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(5)],
        },
      ],
    });
  }

  onSubmit() {
    this.store.dispatch(
      editPlayerAction({ id: this.player.eventId, user: this.form.value })
    );
    this.router.navigate(['../'], { relativeTo: this.route });
    this.notification.success('Changed Success!');
    this.isFormSubmitted = true;
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete() {
    this.isDialog = false;
  }

  canDeactivate = () => {
    return !this.form?.dirty || this.isFormSubmitted;
  };

  ngOnDestroy(): void {
    this.unsubscribePlayer.unsubscribe();
  }
}
